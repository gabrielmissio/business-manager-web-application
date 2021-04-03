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

var type = 'np'

function CreateClientForm() {

    const [value, setValue] = React.useState('np');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
        type = event.target.value
    };
    const handleSubmit = event => {
        
        //indentification
        var name = event.target.name.value
        var document = event.target.document.value
        var birthdate = event.target.birthdate.value
        //outros 

        //nome, documento, pf pj
        event.preventDefault();
    
        var axios = require('axios');
        var data = JSON.stringify({"name":name, "type":type, "document":document, "birthdate":birthdate});
        var config = {
            method: 'post',
            url: 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/client',
            headers: { 
                'Authorization': 'Bearer eyJraWQiOiJzbmEyYmFlNGtMbnhpODdPOU5nRDlkd3NzOWRJN2lPNExzQUd3c0lCa1cwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1NWMyMzQ2NC1mZWIxLTRkOWItYmViOC0yYzQ3YmEwMTFkNDQiLCJjb2duaXRvOmdyb3VwcyI6WyJsdWNraWUtdGVjaCJdLCJldmVudF9pZCI6IjI1MGM5OThhLTIwYTMtNDc0Zi1hNGNmLThjNjQ4N2ZiYThmYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTM3NjcxMTIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1hwUGtubkpzciIsImV4cCI6MTYxMzc3MDcxMiwiaWF0IjoxNjEzNzY3MTEyLCJqdGkiOiJiMGVjOWE4OC1hZmEzLTQ1MTQtOWEyYS04NjUxYTM5NmZhY2MiLCJjbGllbnRfaWQiOiI3MTNqcGgwZWxnc291ZTltY211M2xnY2o1aSIsInVzZXJuYW1lIjoidGhpYWdvLm0ifQ.LNtqXXWxyIDkQEKktocWTNj-raVOVsbK71m8J4_Ijy06_eD9CzYxqa4S7rhRaew-6Ql5NPH4gIDOfUHtkd42ttCZOuiphk8AtetpLuWuwB_M-3QWo68YWevW-X1hgn_fx9AXt9B8kz2FDbN6g2gylQ8jrEPdaB-tnnR5PkcXTZB7pKLz8moX_qB2Sfe8OTMey6abV1nEzrQ9CqPWPMklrR_CsEa2G4OZZdRO9orPRa9E5tmxXdaSH7hzR6cH6lSe4yb3ACJ-AxLB-ZsUpbkV0oLNmP3sDk3gB_uWO2TYpuZ-7FFqUYqZRzeYW1-SYvL7WCPQJHxQMDXzCA_sG4eqeA', 
                'Content-Type': 'application/json'
          },
          data : data
        };
        alert(data)
        axios(config)
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
                    <TextField size="small" fullWidth variant="outlined"  name="birthdate" label="Data de nascimento"/>
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
                    <TextField size="small" variant="outlined" fullWidth name="name1" label="Pais"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name2" label="Estado"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name3" label="Cidade"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name4" label="Bairo"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name5" label="Rua"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name6" label="Numero"/>
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
                    <TextField size="small" variant="outlined" fullWidth name="name7" label="Email"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name8" label="Telefone 1"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField size="small" variant="outlined" fullWidth name="name9" label="Telefone 2"/>
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

export default CreateClientForm;