import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select';
import bmApi from '../../../bm-api-config/BmApi';
import { Auth } from 'aws-amplify';

async function signUp(username, password, email, phone_number, data) {
    try {
      const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
              email,          // optional
              phone_number,   // optional - E.164 number convention
              // other custom attributes 
          }
      });
      console.log(user);
      bmApi.post('user', data)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('Usuario cadastrado com sucesso!')
      })
      .catch(function (error) {
        console.log(error);
        alert('Erro ao cadastrar usuario!')
      });
    } catch (error) {
        console.log('error signing up:', error);
        alert('error signing up: Verificaque o log do console para mais informações')
    }
}


class CreateUserForm extends React.Component{
  
  state = {
    permissions: [],
  };

  componentDidMount () {

    bmApi.get('permissions')
    .then(response => {
      var data = response.data
      const options = data.permissions.map(d => ({
        "value" : d.id,
        "label" : d.name
      }))
      this.setState({ permissions: options});
    });
    
  }

  render () {

    const handleChangeCombo = (e) => {
      //var a = {value:e}
      //var b = a.value
      //valueTeste = b
    }
  
    const handleSubmit = event => {
      
      var name = event.target.name.value
      var userName = event.target.userName.value
      var email = event.target.email.value
      var password = event.target.password.value
      var confirmPassword = event.target.passwordConfirm.value
      var phone = event.target.phone.value
      
      event.preventDefault();
  
      var data = JSON.stringify({"name":name, "user_name": userName, "password": password, "phone": phone, "email": email, "function": 123});
      console.log(data)
      signUp(userName, password, email, phone, data)
      
      
    }

    return (
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" justify="space-between" alignItems="flex-start">
            <Grid  container item xs={12} alignItems="flex-start" justify="center">
              <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                <Box fontWeight="fontWeightBold">
                CADASTRAR USUARIO
                </Box>
              </Typography>            
            </Grid>
            <br/>
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
                    <TextField size="small" fullWidth variant="outlined"  name="name" label="Nome"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" fullWidth variant="outlined"  name="userName" label="Nome de usuario"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" fullWidth variant="outlined"  name="password" label="Senha" type="password"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" fullWidth variant="outlined"  name="passwordConfirm" label="Cofirmação Senha" type="password"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" fullWidth variant="outlined"  name="email" label="Email"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" fullWidth variant="outlined"  name="phone" label="Phone"/>
                </Grid>
                
            </Grid>
            <br/>
            <Grid container xs={12}>
                <Typography color="primary" variant="h6" component="h2" >
                    Permições
                    <hr/>
                </Typography>
            </Grid>
            <br/>
            <Grid container spacing={4}>
              <Grid item xs={12}> 
                  <Select onChange={handleChangeCombo} isMulti/>
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
                Cadastrar
            </Button>

            </Grid>
            
          </Grid>
          
        </form>        
      </Container>
    )

  }

}

export default CreateUserForm;