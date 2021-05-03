import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import ListRegisterView from '../../../register/ListRegisterView/ListRegisterView'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CreateRegisterMessageForm from '../../../register/CreateRegisterForms/CreateRegisterMessageForm'
import CreateRegisterProcessSubprocessForm from '../../../register/CreateRegisterForms/CreateRegisterProcessSubprocessForm'
import ClientView from '../../../client/EntityView/ClientView'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
        <div style={{ maxHeight: 360}}>
          <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={6}>
            <Grid item xs={12} sm={8}>
              <ListRegisterView serviceOrderId={this.props.serviceOrderId}/>
            </Grid>
              <Grid item xs={12} sm={4}>
                <Container maxWidth="sm">
                    <Grid container direction="column" justify="space-between" alignItems="flex-start">
                      <Grid container spacing={4}>
                          <Grid item xs={12} sm={12}> 
                            <Button onClick={()=>{this.setState({modalClientInfo: true})}} disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
                              Informações do cliente
                            </Button>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Button onClick={()=>{this.setState({modalRegisterMessage: true})}} disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
                              Adicionar comentario
                            </Button>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Button onClick={()=>{this.setState({modalRegisterFlowChange: true})}} disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
                              Alterar processo/subprocesso
                            </Button>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Button onClick={()=>{this.setState({modalFinalizeServiceOrder: true})}} disableElevation variant="contained" color="primary" fullWidth endIcon={<SendIcon/>}>
                              Encerrar O.S.
                            </Button>
                          </Grid>
                      </Grid>
          
                      
                    </Grid>
                    
              </Container>
                
            </Grid>
            
          </Grid>
          
          <Dialog  fullWidth={true} maxWidth={'sm'} aria-labelledby="max-width-dialog-title" open={this.state.modalClientInfo}>
            <Grid container justify="space-between" maxWidth={'md'} style={{backgroundColor: '#3f51b5', color:'#fff'}}>
              <DialogTitle id="customized-dialog-title">
                Informações do cliente
              </DialogTitle>
              <IconButton aria-label="close" onClick={()=>{this.setState({modalClientInfo: false})}}>
                <CloseIcon fontSize='large' style={{ color: '#fff' }}/>
              </IconButton>
            </Grid>
            <DialogContent dividers>
              <ClientView serviceOrderId={this.props.serviceOrderId}/>
            </DialogContent>
          </Dialog>

          <Dialog  fullWidth={true} maxWidth={'sm'} aria-labelledby="max-width-dialog-title" open={this.state.modalRegisterMessage}>
            <Grid container justify="space-between" maxWidth={'md'} style={{backgroundColor: '#3f51b5', color:'#fff'}}>
              <DialogTitle id="customized-dialog-title">
                Adicionar Registro
              </DialogTitle>
              <IconButton aria-label="close" onClick={()=>{this.setState({modalRegisterMessage: false})}}>
                <CloseIcon fontSize='large' style={{ color: '#fff' }}/>
              </IconButton>
            </Grid>
            <DialogContent dividers>
              <CreateRegisterMessageForm serviceOrderId={this.props.serviceOrderId} messageTitle='Adicionado comentario' keepOpenServiceOrder={true} is_changed={false}/>
            </DialogContent>
          </Dialog>

          <Dialog  fullWidth={true} maxWidth={'sm'} aria-labelledby="max-width-dialog-title" open={this.state.modalRegisterFlowChange}>
            <Grid container justify="space-between" maxWidth={'md'} style={{backgroundColor: '#3f51b5', color:'#fff'}}>
              <DialogTitle id="customized-dialog-title">
                Adicionar Registro
              </DialogTitle>
              <IconButton aria-label="close" onClick={()=>{this.setState({modalRegisterFlowChange: false})}}>
                <CloseIcon fontSize='large' style={{ color: '#fff' }}/>
              </IconButton>
            </Grid>
            <DialogContent dividers>
              <CreateRegisterProcessSubprocessForm serviceOrderId={this.props.serviceOrderId} messageTitle='Alterado Processo/Subprocesso'/>
            </DialogContent>
          </Dialog>

          <Dialog  fullWidth={true} maxWidth={'sm'} aria-labelledby="max-width-dialog-title" open={this.state.modalFinalizeServiceOrder}>
            <Grid container justify="space-between" maxWidth={'md'} style={{backgroundColor: '#3f51b5', color:'#fff'}}>
              <DialogTitle id="customized-dialog-title">
                Encerrar O.S. | {this.props.serviceOrderId}
              </DialogTitle>
              <IconButton aria-label="close" onClick={()=>{this.setState({modalFinalizeServiceOrder: false})}}>
                <CloseIcon fontSize='large' style={{ color: '#fff' }}/>
              </IconButton>
            </Grid>
            <DialogContent dividers>
              <CreateRegisterMessageForm serviceOrderId={this.props.serviceOrderId} messageTitle='Teste finalizar O.S.' keepOpenServiceOrder={false} is_changed={true}/>
            </DialogContent>
          </Dialog>

        </div>
      )
  } 

}

export default ServiceOrderModal;