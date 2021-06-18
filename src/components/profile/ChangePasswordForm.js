import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { Auth } from 'aws-amplify';

function changePassword(oldPassword, newPassword) {
  Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, oldPassword, newPassword);
    })
    .then(function(data) {
      console.log(data)
      alert('Senha atualizada com sucesso!')
    })
    .catch(function(err) {
      console.log(err)
      alert('Erro ao atualizar senha! Verifique o log do console para mais informações')
   })
}

class ChangePasswordForm extends React.Component {
  
  render() {
    
    const handleSubmit = event => {          
   
      event.preventDefault();
      let oldPassword = event.target.oldPassword.value
      let newPassword = event.target.newPassword.value
      let newPasswordConfirmation = event.target.newPasswordConfirmation.value

      if (newPassword === newPasswordConfirmation){
        changePassword(oldPassword, newPassword)
      }else{
        alert('Erro: a senha inserida no campo `Nova senha` precisa ser igual no campo `Nova senha confirmação`')  
      }

      
      
    }    
  return(
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" justify="space-between" alignItems="flex-start">
          <Grid container xs={12}>
            <Typography color="primary" variant="h6" component="h2" >
                Troca de Senha
                <hr/>
            </Typography>
          </Grid>
          <br/>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
                <TextField type="password" size="small" fullWidth variant="outlined"  name="oldPassword" label="Senha atual"/>
            </Grid>
            <Grid item xs={12} sm={6}> 
                <TextField type="password" size="small" fullWidth variant="outlined"  name="newPassword" label="Nova senha"/>
            </Grid>
            <Grid item xs={12} sm={6}> 
                <TextField type="password" size="small" fullWidth variant="outlined"  name="newPasswordConfirmation" label="Nova senha confirmação"/>
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
export default ChangePasswordForm;
