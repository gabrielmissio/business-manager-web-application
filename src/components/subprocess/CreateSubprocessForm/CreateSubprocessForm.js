import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import bmApi from '../../../bm-api-config/BmApi';

class CreateSubprocessForm extends React.Component{

  render () {

    const handleSubmit = event => {
      
      event.preventDefault();//stop to reload the page

      let name = event.target.name.value
      let limit_time = event.target.limit_time.value

      let data = JSON.stringify({"name":name,"limit_time":limit_time});
      
      bmApi.post('subprocess', data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert('Subprocesso cadastrado com sucesso!')
      })
      .catch((error) => {
        alert('Erro ao cadastrar subprocesso')
        console.log(error);
      });
      
    }

    return(
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" justify="space-between" alignItems="flex-start">
            <Grid  container item xs={12} alignItems="flex-start" justify="center">
              <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                <Box fontWeight="fontWeightBold">
                CADASTRAR SUBPROCESSO
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
                <TextField 
                  size="small" 
                  fullWidth 
                  variant="outlined"  
                  name="name" 
                  label="Nome"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  fullWidth 
                  variant="outlined"  
                  name="limit_time" 
                  label="Tempo Limite" 
                  required
                  helperText="Em horas"
                  type="number" 
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
                Cadastrar
              </Button>
            </Grid>
          </Grid> 
        </form>        
      </Container>
    )
  }
}

export default CreateSubprocessForm;