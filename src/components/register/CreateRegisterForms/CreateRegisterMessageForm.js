import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import bmApi from '../../../bm-api-config/BmApi';



class CreateRegisterMessageForm extends React.Component {
  
  state = {
    service_order: []
  };

  componentDidMount () {
    
    bmApi.get('service-order/'+this.props.serviceOrderId)
    .then(response => {
        var data = response.data
        console.log(response.data)
        this.setState({ service_order: data});
    });
  }

  render() {
    
    const handleSubmit = event => {        
    var message = event.target.message.value
    var user_id = window.sessionStorage.getItem('currentUser')
  
    event.preventDefault();

    var data = JSON.stringify({"is_open": this.props.keepOpenServiceOrder, "is_changed": this.props.is_changed, "user_id": user_id, "process_id": this.state.service_order.current_process.id, "subprocess_id": this.state.service_order.current_subprocess.id, "service_order_id": this.state.service_order.id, "title": this.props.messageTitle, "message": message});

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
        <Grid container direction="column" justify="space-between" alignItems="flex-start">
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
export default CreateRegisterMessageForm;
