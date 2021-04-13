import React, {Component} from 'react';
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

class ClientView extends React.Component {

    state = {
        client: []
    };

    componentDidMount() {
        
        
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Grid container direction="column" justify="space-between" alignItems="flex-start">
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
                                <RadioGroup row aria-label="gender" name="gender1" value={'NP'} >
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
            </Container>
        )
    } 
}

export default ClientView;
