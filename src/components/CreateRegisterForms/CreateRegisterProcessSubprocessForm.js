import React from 'react'; 
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

var valueClient = -1
var valueProcess = -1
var valueSubprocess = -1

async function loadOptionsProcess(){
  //get subprocess
  var axios = require('axios');
  const res = await axios.get('https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/process')
  const data = res.data

  const options = data.process.map(d => ({
      "value" : d.id,
      "label" : d.name
  }))
  return options
}


class CreateRegisterProcessSubprocessForm extends React.Component {

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
    const handleChangeComboProcess = (e) => {
      var a = {value:e}
      var b = a.value
      valueProcess = b
    }

    const handleSubmit = event => {
    
      alert('os dados: subprocess_id, process_id, user_id, service_order_id estao mokados')
  
      var message = event.target.message.value
      var subprocess_id = 10
      var process_id = 5
      var title = 'Adicionado comentario'
      var is_changed = false
      var user_id = 1
      var service_order_id = 7
  
      event.preventDefault();
  
      var axios = require('axios');
      var data = JSON.stringify({"is_changed": is_changed, "user_id": user_id, "process_id": process_id, "subprocess_id": subprocess_id, "service_order_id": service_order_id, "title": title, "message": message});
      var config = {
        method: 'post',
        url: 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/process',
        headers: { 
          'Authorization': 'Bearer', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      alert(data)
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('Processo cadastrado com sucesso!')
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
                  <AsyncSelect cacheOptions defaultOptions loadOptions={loadOptionsProcess} onChange={handleChangeComboProcess}/>
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
                  <AsyncSelect cacheOptions defaultOptions/>                              
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

