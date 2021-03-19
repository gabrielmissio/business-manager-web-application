import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CreateClientForm() {

    const [value, setValue] = React.useState('np');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };
   
  return(
    <Container maxWidth="sm">
        <form>
          <Grid container direction="column" justify="space-between" alignItems="flex-start">
            <Grid  container item xs={12} alignItems="flex-start" justify="center">
              <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                <Box fontWeight="fontWeightBold">
                CADASTRAR CLIENTE
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
                    <TextField size="small" fullWidth variant="outlined"  name="name" label="Name"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" fullWidth variant="outlined"  name="name" label="Documento"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" fullWidth variant="outlined"  name="name" label="Data de nascimento"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container item xs={12} >
                        <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
                            <FormControlLabel value="np" control={<Radio color="primary"/>} label="PF" />
                            <FormControlLabel value="lp" control={<Radio color="primary"/>} label="PJ" />
                        </RadioGroup>       
                    </Grid>   
                </Grid>
            </Grid>


            <br/>
            <Grid container xs={12}>
                <Typography color="primary" variant="h6" component="h2" >
                    Endereço
                    <hr/>
                </Typography>
            </Grid>
            <br/>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Pais"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Estado"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Cidade"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Bairo"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Rua"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Numero"/>
                </Grid>
            </Grid>

            <br/>
            <Grid container xs={12}>
                <Typography color="primary" variant="h6" component="h2" >
                    Contato
                    <hr/>
                </Typography>
            </Grid>
            <br/>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Email"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Telefone 1"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name" label="Telefone 2"/>
                </Grid>
            </Grid>
            <br/>
            <Grid container xs={12} sm={12}>
                <Button
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

export default CreateClientForm;