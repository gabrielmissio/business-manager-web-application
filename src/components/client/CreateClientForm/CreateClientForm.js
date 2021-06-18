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
import bmApi from '../../../bm-api-config/BmApi';



class CreateClientForm extends React.Component{

  
  state = {
    type: 'NP'
  };

  render () {

    const handleChangeRadio = (event) => {
      this.setState({ type: event.target.value})
    };
    const handleSubmit = event => {
        
      //indentification
      var name = event.target.name.value
      var document = event.target.document.value
      var birthdate = event.target.birthdate.value
      //address 
      var country = event.target.country.value
      var province = event.target.province.value
      var city = event.target.city.value
      var zip = event.target.zip.value
      var street = event.target.street.value
      var address_number = event.target.address_number.value
      //contact
      var email = event.target.email.value
      var phone1 = event.target.phone1.value
      var phone2 = event.target.phone2.value
    
      event.preventDefault();

      var data = JSON.stringify({"name":name, "type":this.state.type, "document":document, "birthdate":birthdate, "addresses":[{"country": country, "province": province, "city": city, "zip": zip, "street": street, "address_number": address_number}], "email": email,"phones":[{"phone_number": phone1},{"phone_number": phone2}]});
    
      alert(data)
      console.log(data)
      bmApi.post('client', data)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('Cliente cadastrado com sucesso!')
      })
      .catch(function (error) {
        console.log(error);
        alert('Erro ao cadastrar cliente!')
      });
        
    }


    return(
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
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
                    <TextField size="small" fullWidth variant="outlined"  name="document" label="Documento"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" fullWidth variant="outlined"  name="birthdate" label="Data de nascimento" helperText="AAAA-MM-DD"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container item xs={12} >
                        <RadioGroup row aria-label="gender" name="gender1" value={this.state.type} onChange={handleChangeRadio}>
                            <FormControlLabel value="NP" control={<Radio color="primary"/>} label="PF" />
                            <FormControlLabel value="LP" control={<Radio color="primary"/>} label="PJ" />
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
                    <TextField size="small" variant="outlined" fullWidth name="country" label="Pais"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="province" label="Estado"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="city" label="Cidade"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="zip" label="CEP"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="street" label="Rua"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="address_number" label="Numero"/>
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
                    <TextField size="small" variant="outlined" fullWidth name="email" label="Email"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="phone1" label="Telefone 1"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="phone2" label="Telefone 2"/>
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

export default CreateClientForm;