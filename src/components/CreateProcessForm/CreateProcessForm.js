import React from 'react'; 
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AsyncSelect from 'react-select/async';

var valueTeste = []

async function getOptions(){
  alert('teste')
  var axios = require('axios');
  const res = await axios.get('https://lzsxdvovw7.execute-api.us-east-1.amazonaws.com/dev/subprocess')
  const data = res.data

  const options = data.subprocess.map(d => ({
    "value" : d.id,
    "label" : d.name
  }))
  alert(options)
  return options
}

function CreateProcessForm() {
  
  const handleChangeCombo = (e) => {
    var a = {value:e}
    var b = a.value
    //alert(b)
    valueTeste = b
  }

  return(
    <Container maxWidth="sm">
        <form>
          <Grid container direction="column" justify="space-between" alignItems="flex-start">
            <Grid  container item xs={12} alignItems="flex-start" justify="center">
              <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                <Box fontWeight="fontWeightBold">
                CADASTRAR PROCESSO
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
                <Grid item xs={12} sm={12}>
                    <TextField size="small" fullWidth variant="outlined"  name="name" label="Nome"/>
                </Grid>
                <Grid item xs={12}> 
                  <AsyncSelect cacheOptions defaultOptions loadOptions={getOptions} onChange={handleChangeCombo} isMulti/>
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

export default CreateProcessForm;