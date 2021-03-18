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

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false); 
    const [helperText, setHelperText] = React.useState('Choose wisely');
   
  return(
    <Container maxWidth="sm">
        <form>
          <Grid container direction="column" justify="space-between" alignItems="flex-start" spacing={4}>
            <Grid  container item xs={12} alignItems="flex-start" justify="center">
              <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                <Box fontWeight="fontWeightBold">
                CADASTRAR CLIENTE
                </Box>
              </Typography>            
            </Grid>
            <Grid container item xs={12}>
                <TextField size="small" variant="outlined" fullWidth name="name" label="Name"/>
            </Grid>
            <Grid container item xs={12}>
                <TextField size="small" variant="outlined" fullWidth name="name" label="Documento"/>
            </Grid>
            <Grid container item xs={12}>
                <TextField size="small" variant="outlined" fullWidth name="name" label="Data de nascimento"/>
            </Grid>
            <Grid container item xs={12}>
                <RadioGroup  row aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                    <FormControlLabel  value="best" control={<Radio color="primary" />} label="PF" />
                    <FormControlLabel value="worst" control={<Radio color="primary"/>} label="PJ" />
                </RadioGroup>          
            </Grid>
            <Grid container item xs={12}>
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