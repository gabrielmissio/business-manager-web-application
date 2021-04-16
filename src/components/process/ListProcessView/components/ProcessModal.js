import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import ListRegisterView from '../../../register/ListRegisterView/ListRegisterView'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CreateRegisterMessageForm from '../../../register/CreateRegisterForms/CreateRegisterMessageForm'
import CreateRegisterProcessSubprocessForm from '../../../register/CreateRegisterForms/CreateRegisterProcessSubprocessForm'
import ClientView from '../../../client/EntityView/ClientView'

class ProcessModal extends Component {

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
            <h1>Editar processo</h1>
          </Grid>
        </div>
      )
  } 

}

export default ProcessModal;