import React from 'react'; 
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select';
import bmApi from '../../../bm-api-config/BmApi';

class CreateRegisterProcessSubprocessForm extends React.Component {

  state = {
    service_order: [],
    process: [],
    subpross: [],
    selectedProcessId: -1,
    selectedProcessName: 'Carregando processo atual',
    selectedSubprocessId: -1,
    selectedSubprocessName: 'Carregando subprocesso atual',

  };

  componentDidMount () {
    //load current service order informations
    bmApi.get('service-order/'+this.props.serviceOrderId)
    .then(response => {
      var data = response.data
      console.log(response.data)
      this.setState({ service_order: data}, () => set_current_process_subprocess(), loadProcessOptions());
    });
    const loadProcessOptions = () => {
      bmApi.get('process') 
      .then(response => {
          var data = response.data
          const options = data.process.map(d => ({
            "value" : d.id,
            "label" : d.name
          }))
          this.setState({ process: options}, () => loadSubprocessOptions());
      });
    }
    const loadSubprocessOptions = () => {
      bmApi.get('process/'+this.state.service_order.current_process.id)
      .then(response => {
          var data = response.data
          const options = data.subprocess.map(d => ({
            "value" : d.id,
            "label" : d.name
          }))
          this.setState({ subprocess: options});
      });
    }
    //load all process
    
    const set_current_process_subprocess = () => {
      this.setState({ selectedProcessId: this.state.service_order.current_process.id, selectedProcessName: this.state.service_order.current_process.name});
      this.setState({ selectedSubprocessId: this.state.service_order.current_subprocess.id, selectedSubprocessName: this.state.service_order.current_subprocess.name});
    }

  }


  render() {

    const handleChangeComboProcess = (e) => {
      this.setState({ selectedProcessId: e.value, selectedProcessName: e.label}, () => loadSubprocessOptions(),  this.setState({ selectedSubprocessId: -1, selectedSubprocessName: ''}));
    }

    const handleChangeComboSubprocess = (e) => {
      this.setState({ selectedSubprocessId: e.value, selectedSubprocessName: e.label});
    }

    const loadSubprocessOptions = () => {
      bmApi.get('process/'+this.state.selectedProcessId)
      .then(response => {
          var data = response.data
          const options = data.subprocess.map(d => ({
            "value" : d.id,
            "label" : d.name
          }))
          this.setState({ subprocess: options});
      });
    }

    const handleSubmit = event => {  
      var message = 'Iniciado subprocesso ' + this.state.selectedSubprocessName + ' no processo ' + this.state.selectedProcessName + '\n\n\n <br/>' + event.target.message.value
      var user_id = window.sessionStorage.getItem('currentUser')
  
      event.preventDefault();
  
      var data = JSON.stringify({"is_changed": true, "user_id": user_id, "process_id": this.state.selectedProcessId, "subprocess_id": this.state.selectedSubprocessId, "service_order_id": this.props.serviceOrderId, "title": this.props.messageTitle, "message": message});
      
      alert(data)
      bmApi.post('register', data)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('Registro adicionado com sucesso!')
      })
      .catch(function (error) {
        console.log(error);
        alert('Erro ao adicionar registro!')
      });
      
    }
    return(
      <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" justify="space-between" alignitems="flex-start">
              <Grid container xs={12}>
                  <Typography color="primary" variant="h6" component="h2" >
                      Alterar Processo
                      <hr/>
                  </Typography>
  
              </Grid>
              <br/>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                  <Select
                    value={{ label: this.state.selectedProcessName, value: this.state.selectedProcessId }}
                    onChange={handleChangeComboProcess}
                    options={this.state.process}                  
                  />
                </Grid>
              </Grid>
              <br/>
              <Grid container xs={12}>
                  <Typography color="primary" variant="h6" component="h2" >
                      Alterar Subprocesso
                      <hr/>
                  </Typography>
  
              </Grid>
              <br/>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                  <Select
                    value={{ label: this.state.selectedSubprocessName, value: this.state.selectedSubprocessId }}
                    onChange={handleChangeComboSubprocess}
                    options={this.state.subprocess}                  
                  />                             
                </Grid>
              </Grid>
              <br/>
              <Grid container xs={12}>
                  <Typography color="primary" variant="h6" component="h2" >
                      Comentario
                      <hr/>
                  </Typography>
  
              </Grid>
              <br/>
              <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      label="Comentario"
                      name="message"
                      multiline
                      rows={6}
                      variant="outlined"
                    />
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
                >
                  Enviar
              </Button>
  
              </Grid>
              
            </Grid>
            
        </form>        
      </Container>
      )
  } 
}

export default CreateRegisterProcessSubprocessForm;

