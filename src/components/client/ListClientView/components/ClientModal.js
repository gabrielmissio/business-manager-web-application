import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Checkbox from '@material-ui/core/Checkbox';
import bmApi from './../../../../bm-api-config/BmApi';


class ClientView extends React.Component {

  state = {
    client: false,
    service_order: [],
    isEditable: true
  };

  componentDidMount() {
      
    bmApi.get('client/'+this.props.clientId)
    .then(response => {
      var data = response.data
      console.log(response.data)      
      this.setState({ client: data});
    });
        
  }

    render() {
        return (
            <div>
                {
                    this.state.client ?
                    <Container maxWidth="sm">
                        <form >
                        <Grid container direction="column" justify="space-between" alignItems="flex-start">
                            <Grid container xs={12}>
                                <Checkbox
                                checked={!this.state.isEditable}
                                onChange={() => {this.setState({ isEditable: !this.state.isEditable})}}
                                name="checkedF"
                                defaultChecked
                                color="primary"
                                />
                                <h4>Edição habilitada</h4>
                            </Grid>
                            <Grid container xs={12}>
                                <Typography color="primary" variant="h6" component="h2" >
                                    Identificação
                                    <hr/>
                                </Typography>
                            </Grid>
                            <br/>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="name" label="Name" defaultValue={this.state.client.name}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="document" label="Documento" defaultValue={this.state.client.document}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="birthdate" label="Data de nascimento" defaultValue={this.state.client.birthdate}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid container item xs={12} >
                                        <RadioGroup row aria-label="gender" name="gender1" value={this.state.client.type} >
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
                            {
                                this.state.client.addresses.map((d, i) => (
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField disabled={this.state.isEditable} size="small" variant="outlined" fullWidth name="country" label="Pais" defaultValue={d.country}/>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField disabled={this.state.isEditable} size="small" variant="outlined" fullWidth name="province" label="Estado" defaultValue={d.province}/>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField disabled={this.state.isEditable} size="small" variant="outlined" fullWidth name="city" label="Cidade" defaultValue={d.city}/>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField disabled={this.state.isEditable} size="small" variant="outlined" fullWidth name="zip" label="CEP" defaultValue={d.zip}/>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField disabled={this.state.isEditable} size="small" variant="outlined" fullWidth name="street" label="Rua" defaultValue={d.street}/>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField disabled={this.state.isEditable} size="small" variant="outlined" fullWidth name="address_number" label="Numero" defaultValue={d.address_number}/>
                                        </Grid>
                                    </Grid>

                                  ))
                            }
                            
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
                                    <TextField disabled={this.state.isEditable} size="small" variant="outlined" fullWidth name="email" label="Email" defaultValue={'client@domain.com.br'}/>
                                </Grid>
                                {
                                    this.state.client.phones.map((d, i) => (
                                        <Grid item xs={12} sm={6}>
                                            <TextField disabled={this.state.isEditable} size="small" variant="outlined" fullWidth name="phone1" label="Telefone 1" defaultValue={d.phone_number}/>
                                        </Grid>
                                    ))
                                }
                                
                            </Grid>
                            <br/>
                            <Grid container xs={12} sm={12}>
                                <Button
                                disabled={this.state.isEditable}
                                type="submit"
                                disableElevation
                                variant="contained"
                                color="primary"
                                fullWidth
                                endIcon={<SendIcon/>}
                                >
                                Alterar
                            </Button>

                            </Grid>
                            
                        </Grid>
                        
                    </form>        
                    </Container>
                    : 'Loading'
                }
            </div>   
        )
    } 
}

export default ClientView;
