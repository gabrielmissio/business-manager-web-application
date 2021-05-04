import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Checkbox from '@material-ui/core/Checkbox';
import Select from 'react-select';

class ProcessModal extends React.Component {

  constructor () {
    super();

    this.state = {
      process: false,
      isEditable: true,
      subprocess: []
    };
    
  }
  componentDidMount() {
    var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/process/'+this.props.processId
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        var data = response.data
        console.log(response.data)
        this.setState({process: data});
    });
    url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/subprocess'
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        var data = response.data
        const options = data.subprocess.map(d => ({
          "value" : d.id,
          "label" : d.name
        }))
        options.map((v) => {console.log(v)})
        this.setState({subprocess: options});
    });
  
  }
  render() {
      return (
        <div>
          {
            this.state.process ?
            <Container maxWidth="sm">
              <form >
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
                      <Select isDisabled={this.state.isEditable} options={this.state.subprocess} isMulti defaultValue={this.state.process.subprocess.map(d => ({"value" : d.id, "label" : d.name}))}/>
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