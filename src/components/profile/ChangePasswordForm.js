import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';



class ChangePasswordForm extends React.Component {
  
  state = {
    service_order: []
  };

  componentDidMount () {
    
  }

  render() {
    
    const handleSubmit = event => {          
   
    event.preventDefault();

    alert('nao disponivel')
    
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
                <TextField type="password" size="small" fullWidth variant="outlined"  name="current_password" label="Senha atual"/>
            </Grid>
            <Grid item xs={12} sm={6}> 
                <TextField type="password" size="small" fullWidth variant="outlined"  name="new_password" label="Nova senha"/>
            </Grid>
            <Grid item xs={12} sm={6}> 
                <TextField type="password" size="small" fullWidth variant="outlined"  name="new_password_confirmation" label="Nova senha confirmação"/>
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
