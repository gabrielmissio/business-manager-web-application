import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Checkbox from '@material-ui/core/Checkbox';
import Select from 'react-select';
import bmApi from './../../../../bm-api-config/BmApi'


class ProcessModal extends React.Component {

  constructor () {
    super();

    this.state = {
      process: false,
      isEditable: true,
      subprocess: [],
      subprocessOptions: [],
      selectedOption: []
    };
    
  }
  componentDidMount() {

    bmApi.get('process/'+this.props.processId)
    .then(response => {
      var data = response.data
      console.log(response.data)
      this.setState({process: data}, () => {
        const options = this.state.process.subprocess.map(d => ({
          "value" : d.id,
          "label" : d.name
        }))
        this.setState({selectedOption: options})
      });
    });

    bmApi.get('subprocess')
    .then(response => {
      var data = response.data
      const options = data.subprocess.map(d => ({
        "value" : d.id,
        "label" : d.name
      }))
      //options.map((v) => {console.log(v)})
      this.setState({subprocess: options});
    });
  
  }

  render() {

    const handleSubmit = event => {

      event.preventDefault();
      
      let subprocess = this.state.selectedOption.map(d => ({
        "subprocess_id" : d.value
      }))
      let name = event.target.name.value
      let data = JSON.stringify({"name":name, "subprocess":subprocess});

      if (!subprocess.length > 0){
        alert('Erro: Pelo menos um subprocesso deve ser selecionado')
        return;
      }
      
      bmApi.put('process/' + this.state.process.id, data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert('Processo atualizado com sucesso!')
      })
      .catch((error) => {
        console.log(error);
        alert('Erro ao atualizar processo!')
      });
      
    }
  
    const handleChangeCombo = (e) => {
      this.setState({selectedOption: e});
    }

    return (
      <div>
        {
          this.state.process ?
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
                <Grid container xs={12}>
                  <Typography color="primary" variant="h6" component="h2" >
                    Identificação
                    <hr/>
                  </Typography>
                </Grid>
                <br/>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="name" label="Nome" defaultValue={this.state.process.name}/>
                  </Grid>
                </Grid>
                <br/>
                <Grid container xs={12}>
                  <Typography color="primary" variant="h6" component="h2" >
                    Subprocessos
                    <hr/>
                  </Typography>
                </Grid>
                <br/>
                <Grid container spacing={4}>
                  <Grid item xs={12}> 
                    <Select 
                      isDisabled={this.state.isEditable} 
                      options={this.state.subprocess} 
                      isMulti 
                      defaultValue={this.state.process.subprocess.map(d => ({"value" : d.id, "label" : d.name}))}
                      onChange={handleChangeCombo}
                    />
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
                    <TextField disabled size="small" fullWidth variant="outlined"  label="Cadastrado em" defaultValue={this.state.process.inserted_at}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField disabled size="small" fullWidth variant="outlined"  label="Atualizado em" defaultValue={this.state.process.updated_at ? this.state.process.updated_at : this.state.process.inserted_at} />
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
          : 'Loading'
        }
      </div>
    )
  } 

}

export default ProcessModal;