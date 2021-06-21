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

    /*const  data_valida = (date) => {

        let matches = /(\d{4})[-./](\d{2})[-./](\d{2})/.exec(date);
        if (matches == null) {
            return false;
        }
        let dia = matches[3];
        let mes = matches[2] - 1;
        let ano = matches[1];
        let data = new Date(ano, mes, dia);
        return data.getDate() === dia && data.getMonth() === mes && data.getFullYear() === ano;
    }*/

    const handleChangeRadio = (event) => {
      this.setState({ type: event.target.value})
    };
    const handleSubmit = event => {
        
      //indentification
      let name = event.target.name.value
      let document = event.target.document.value
      let birthdate = event.target.birthdate.value
      //address 
      let country = event.target.country.value
      let province = event.target.province.value
      let city = event.target.city.value
      let zip = event.target.zip.value
      let street = event.target.street.value
      let address_number = event.target.address_number.value
      //contact
      let email = event.target.email.value
      let phone1 = event.target.phone1.value
      let phone2 = event.target.phone2.value
    
      event.preventDefault();

      let data = JSON.stringify({"name":name, "type":this.state.type, "document":document, "birthdate":birthdate, "addresses":[{"country": country, "province": province, "city": city, "zip": zip, "street": street, "address_number": address_number}], "email": email,"phones":[{"phone_number": phone1},{"phone_number": phone2}]});
    
      alert(data)
      console.log(data)
      bmApi.post('client', data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert('Cliente cadastrado com sucesso!')
      })
      .catch((error) => {
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
                <TextField 
                  size="small"
                  fullWidth 
                  variant="outlined"  
                  name="name" 
                  label="Name"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}> 
                <TextField 
                  size="small" 
                  fullWidth 
                  variant="outlined"  
                  name="document" 
                  label="Documento"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  fullWidth 
                  variant="outlined"  
                  name="birthdate" 
                  label="Data de nascimento" 
                  helperText="AAAA-MM-DD"
                  />
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
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth 
                  name="country" 
                  label="Pais"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth 
                  name="province" 
                  label="Estado"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth 
                  name="city" 
                  label="Cidade"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth name="zip" 
                  label="CEP"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth 
                  name="street" 
                  label="Rua"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth 
                  name="address_number" 
                  label="Numero"
                />
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
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth 
                  name="email" 
                  label="Email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth name="phone1" 
                  label="Telefone 1"
                  required
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth 
                  name="phone2" 
                  label="Telefone 2"
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

export default CreateClientForm;