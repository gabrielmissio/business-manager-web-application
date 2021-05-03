import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';


class SubprocessModal extends Component {

  constructor () {
    super();

    this.state = {
      subprocess: false
    };
    
  }

  componentDidMount() {
    var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/subprocess/'+this.props.subprocessId
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
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
      var axios = require('axios');
      var data = JSON.stringify({"name":name,"limit_time":limit_time});
      
      var config = {
        method: 'put',
        url: 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/subprocess',
        headers: { 
          'Authorization': 'Bearer eyJraWQiOiJzbmEyYmFlNGtMbnhpODdPOU5nRDlkd3NzOWRJN2lPNExzQUd3c0lCa1cwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1NWMyMzQ2NC1mZWIxLTRkOWItYmViOC0yYzQ3YmEwMTFkNDQiLCJjb2duaXRvOmdyb3VwcyI6WyJsdWNraWUtdGVjaCJdLCJldmVudF9pZCI6IjI1MGM5OThhLTIwYTMtNDc0Zi1hNGNmLThjNjQ4N2ZiYThmYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTM3NjcxMTIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1hwUGtubkpzciIsImV4cCI6MTYxMzc3MDcxMiwiaWF0IjoxNjEzNzY3MTEyLCJqdGkiOiJiMGVjOWE4OC1hZmEzLTQ1MTQtOWEyYS04NjUxYTM5NmZhY2MiLCJjbGllbnRfaWQiOiI3MTNqcGgwZWxnc291ZTltY211M2xnY2o1aSIsInVzZXJuYW1lIjoidGhpYWdvLm0ifQ.LNtqXXWxyIDkQEKktocWTNj-raVOVsbK71m8J4_Ijy06_eD9CzYxqa4S7rhRaew-6Ql5NPH4gIDOfUHtkd42ttCZOuiphk8AtetpLuWuwB_M-3QWo68YWevW-X1hgn_fx9AXt9B8kz2FDbN6g2gylQ8jrEPdaB-tnnR5PkcXTZB7pKLz8moX_qB2Sfe8OTMey6abV1nEzrQ9CqPWPMklrR_CsEa2G4OZZdRO9orPRa9E5tmxXdaSH7hzR6cH6lSe4yb3ACJ-AxLB-ZsUpbkV0oLNmP3sDk3gB_uWO2TYpuZ-7FFqUYqZRzeYW1-SYvL7WCPQJHxQMDXzCA_sG4eqeA', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
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
                  <Typography color="primary" variant="h6" component="h2" >
                    Identificação
                    <hr/>
                  </Typography>
                </Grid>
                <br/>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField disabled size="small" fullWidth variant="outlined"  name="name" label="Nome" defaultValue={this.state.subprocess.name}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField disabled size="small" fullWidth variant="outlined"  name="limit_time" label="Tempo Limite" defaultValue={this.state.subprocess.limit_time} />
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
                    disabled
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