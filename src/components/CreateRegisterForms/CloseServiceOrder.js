import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';


class CloseServiceOrder extends React.Component {
  
  state = {
    service_order: []
  };

  componentDidMount () {
    var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/service-order/'+this.props.serviceOrderId
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        var data = response.data
        console.log(response.data)
        this.setState({ service_order: data});
    });
  }

  render() {
    
    const handleSubmit = event => {        
    var message = event.target.message.value
    var title = 'Adicionado comentario'
    var is_changed = false
    var user_id = 1
  
    event.preventDefault();

    var axios = require('axios');
    var data = JSON.stringify({"is_changed": is_changed, "user_id": user_id, "process_id": this.state.service_order.current_process.id, "subprocess_id": this.state.service_order.current_subprocess.id, "service_order_id": this.state.service_order.id, "title": this.props.messageTitle, "message": message});

    var config = {
      method: 'post',
      url: 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/register',
      headers: { 
        'Authorization': 'Bearer', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert('Mensagem adicionada com sucesso!')
      alert('Falta enviar request para marca O.S. como fechada')
    })
    .catch(function (error) {
      console.log(error);
      alert('Erro ao adicionar mensagem!')
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
export default CloseServiceOrder;
