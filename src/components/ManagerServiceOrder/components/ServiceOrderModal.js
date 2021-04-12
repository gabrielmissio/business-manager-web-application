import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListRegisterView from './../../ListRegisterView/ListRegisterView'
import Button from '@material-ui/core/Button';
import CreateClientForm from './../../CreateClientForm/CreateClientForm'
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class ServiceOrderModal extends Component {

  constructor () {
    super();

    this.state = {

      modalIsOpen: false
    };
    
  }
  render() {
      return (
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={6}>
          <Grid item xs={12} sm={8}>
            <ListRegisterView serviceOrderId={this.props.serviceOrderId}/>
          </Grid>
            <Grid item xs={12} sm={4}>
              <Container maxWidth="sm">
                  <Grid container direction="column" justify="space-between" alignItems="flex-start">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12}>
                          <Button disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
                            Informações do cliente
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Button disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
                            Adicionar comentario
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Button disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
                            Alterar processo/subprocesso
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Button disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
                            Encerrar O.S.
                          </Button>
                        </Grid>
                    </Grid>
        
                    
                  </Grid>
                  
            </Container>
              
          </Grid>
          
        </Grid>
      )
  } 

}

export default ServiceOrderModal;