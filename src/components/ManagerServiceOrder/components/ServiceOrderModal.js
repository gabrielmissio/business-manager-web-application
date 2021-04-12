import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import ListRegisterView from './../../ListRegisterView/ListRegisterView'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CreateRegisterMessageForm from './../../CreateRegisterForms/CreateRegisterMessageForm'


class ServiceOrderModal extends Component {

  constructor () {
    super();

    this.state = {
      modalRegisterMessage: false,
      modalRegisterFlowChange: false,
      modalClientInfo: false,
      modalFinalizeServiceOrder: false,
    };
    
  }
  render() {
      return (
        <div>
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
                            <Button onClick={()=>{this.setState({modalRegisterMessage: true})}} disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
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
          <Dialog  fullWidth={true} maxWidth={'sm'} aria-labelledby="max-width-dialog-title" open={this.state.modalRegisterMessage}>
            <DialogTitle id="customized-dialog-title">
              Modal title
            </DialogTitle>
            <DialogContent dividers>
              <CreateRegisterMessageForm/>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=>{this.setState({modalRegisterMessage: false})}} autoFocus color="primary">
                fechar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )
  } 

}

export default ServiceOrderModal;