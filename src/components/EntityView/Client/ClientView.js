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
import axios from 'axios';

class ClientView extends React.Component {

    state = {
        client: [],
        address: [],
        phones: {},
        phone1: '-',
        service_order: []
    };

    componentDidMount() {
        var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/service-order/'+this.props.serviceOrderId
        axios.get(url, {
            responseType: 'json'
        }).then(response => {
            var data = response.data
            console.log(response.data)
            this.setState({ service_order: data}, () => loadClientInformation());
        });
        const loadClientInformation = () => {
        var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/client/'+this.state.service_order.client.id
        axios.get(url, {
            responseType: 'json'
        }).then(response => {
            var data = response.data
            console.log(response.data)      
            this.setState({ client: data});
            this.setState({ address: data.addresses[0]})
            this.setState({ phones: data.phones}, () => this.setState({ phone1: this.state.phones[0].phone_number}))
            // () => this.setState({ address: this.state.client.addresses[0]}), this.setState({ phones: this.state.client.phones[0]})
        });
        }
        
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
                            <TextField size="small" fullWidth variant="outlined"  name="name" label="Name" value={this.state.client.name} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" fullWidth variant="outlined"  name="document" label="Documento" value={this.state.client.document} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" fullWidth variant="outlined"  name="birthdate" label="Data de nascimento" value={this.state.client.birthdate} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container item xs={12} >
                                <RadioGroup row aria-label="gender" name="gender1" value={this.state.client.type} defaultValue={'NP'} >
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
                            <TextField size="small" variant="outlined" fullWidth name="country" label="Pais" value={this.state.address.country} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" variant="outlined" fullWidth name="province" label="Estado" value={this.state.address.province} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" variant="outlined" fullWidth name="city" label="Cidade" value={this.state.address.city} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" variant="outlined" fullWidth name="zip" label="CEP" value={this.state.address.zip} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" variant="outlined" fullWidth name="street" label="Rua" value={this.state.address.street} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" variant="outlined" fullWidth name="address_number" label="Numero" value={this.state.address.address_number} defaultValue={'-'}/>
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
                            <TextField size="small" variant="outlined" fullWidth name="email" label="Email" value={'example@mail.com'} defaultValue={'-'}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" variant="outlined" fullWidth name="phone1" label="Telefone 1" value={this.state.phone1}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField size="small" variant="outlined" fullWidth name="phone2" label="Telefone 2" value={this.state.phone1}/>
                        </Grid>
                    </Grid> 
                </Grid>
            </Container>
        )
    } 
}

export default ClientView;
