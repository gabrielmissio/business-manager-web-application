import { useState } from 'react';
import { Auth } from 'aws-amplify'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@material-ui/icons/Lock';

export default function Login() {
  let [user, setUser] = useState('');
  let [password, setPassword] = useState('');

  let handleSubmit = async function (event) {
    event.preventDefault();
    let response = await Auth.signIn(user, password)
    console.log('auth response', response)
    //console.log('test jwt', response.signInUserSession.accessToken.jwtToken)
    window.sessionStorage.setItem("token", response.signInUserSession.accessToken.jwtToken);
  }

  return(
    <Grid container direction="column" justify="center" alignItems="center" style={{minHeight: '100.0vh', color: 'white', backgroundColor: '#EFF2F3'}}> 
      <Container maxWidth="xs">
        <Paper style={{ padding: 26, minHeight: '50vh', backgroundColor: '#FBFBFC', justifyContent:'center'}} elevation={3} >
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" justify="space-between" alignItems="flex-start" spacing={4}>
              <Grid  container item xs={12} alignItems="flex-start" justify="center">
                <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                  <Box fontWeight="fontWeightBold">
                  Autenticação
                  </Box>
                </Typography>            
              </Grid>
              <br/>
              <Grid  container item xs={12} alignItems="flex-start" justify="center">
                <LockIcon  style={{ fontSize: 120 }} color="primary"/>
              </Grid>
              <br/>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField size="small" fullWidth variant="outlined"  name="user" label="Usuario" onChange={event => setUser(event.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField size="small"  type="password"fullWidth variant="outlined"  name="password" label="Senha" onChange={event => setPassword(event.target.value)}/>
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
                  >
                  Entrar
                </Button>
              </Grid>
            </Grid> 
          </form>   
        </Paper>
      </Container>
    </Grid>
  )
}
