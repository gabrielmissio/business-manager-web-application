import React, {Component} from 'react';
import { Grid } from '@material-ui/core';


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
            <h1>Editar cliente</h1>
          </Grid>
        </div>
      )
  } 

}

export default ProcessModal;