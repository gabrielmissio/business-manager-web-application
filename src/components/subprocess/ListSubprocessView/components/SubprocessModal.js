import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Checkbox from '@material-ui/core/Checkbox';
import bmApi from './../../../../bm-api-config/BmApi'


class SubprocessModal extends Component {

  constructor () {
    super();

    this.state = {
      subprocess: false,
      isEditable: true
    };
    
  }

  componentDidMount() {

    bmApi.get('subprocess/'+this.props.subprocessId)
    .then(response => {
      var data = response.data
      console.log(response.data)
      this.setState({ subprocess: data});
    });

  }

  render() {
    const handleSubmit = event => {
      var name = event.target.name.value
      var limit_time = event.target.limit_time.value
  
      event.preventDefault();//stop to reload the page
      var data = JSON.stringify({"name":name,"limit_time":limit_time});
      
      bmApi.put('subprocess/'+this.state.subprocess.id, data)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('Subprocesso cadastrado com sucesso!')
      })
      .catch(function (error) {
        alert('Erro ao cadastrar subprocesso')
        console.log(error);
      });
      
    }
    return (
      <div>
        {
          this.state.subprocess ?
          <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" justify="space-between" alignItems="flex-start">
                <Grid container xs={12}>
                  <Checkbox
                    checked={!this.state.isEditable}
                    onChange={() => {this.setState({ isEditable: !this.state.isEditable})}}
                    name="checkedF"
                    defaultChecked
                    color="primary"
                  />
                  <h4>Edição habilitada</h4>
                </Grid>
                <br/>
                <Grid container xs={12}>
                  <Typography color="primary" variant="h6" component="h2" >
                    Identificação
                    <hr/>
                  </Typography>
                </Grid>
                <br/>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="name" label="Nome" defaultValue={this.state.subprocess.name}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="limit_time" label="Tempo Limite" defaultValue={this.state.subprocess.limit_time} />
                  </Grid>
                </Grid>
                <br/>
                <Grid container xs={12}>
                  <Typography color="primary" variant="h6" component="h2" >
                    Cadastro
                    <hr/>
                  </Typography>
                </Grid>
                <br/>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField disabled size="small" fullWidth variant="outlined"  label="Cadastrado em" defaultValue={this.state.subprocess.inserted_at}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField disabled size="small" fullWidth variant="outlined"  label="Atualizado em" defaultValue={this.state.subprocess.updated_at ? this.state.subprocess.updated_at : this.state.subprocess.inserted_at} />
                  </Grid>
                </Grid>
                <br/>
                <Grid container xs={12} sm={12}>
                  <Button
                    type="submit"
                    disableElevation
                    variant="contained"
                    color="primary"
                    fullWidth
                    endIcon={<SendIcon/>}
                    disabled={this.state.isEditable}
                    >
                    Alterar
                  </Button>
                </Grid>
              </Grid> 
            </form>        
          </Container>
          : 'loading'
        }
      </div>
    )
  } 
}

export default SubprocessModal;