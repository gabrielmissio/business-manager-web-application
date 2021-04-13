import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import MaterialTable, { MTableBodyRow } from "material-table";
import Modal from "react-modal";
import ListRegisterView from './../ListRegisterView/ListRegisterView'
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import ServiceOrderModal from './components/ServiceOrderModal'

//Modal.setAppElement("#root");

class TableRegister extends React.Component {
  
  constructor () {
      super();

      this.state = {
          tableData: [{
              
          }],
          paginationInfo: [{

          }],
          page: 0,
          rowsPerPage: 10,
          modalIsOpen: false,
          serviceOrderId: 0
      };
      
  }


  componentDidMount () {
    var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/service-order?page='+this.state.page+'&paginate_by='+this.state.rowsPerPage
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        var data = response.data
        console.log(response.data)
        data.service_orders.map(v => console.log(v.current_process.name))
        this.setState({ tableData: data.service_orders });
        this.setState({ paginationInfo: data.metadata });
    });
  }

  render () {
      const { tableData } = this.state;
      const handleChangeRowsPerPage = (event) => {
        this.setState({ rowsPerPage: +event.target.value },() => this.setState({ page: 0 }, () => this.componentDidMount ()));
      };
      const handleChangePage = (event, newPage) => {
        this.setState({ page: newPage+1 },() => this.componentDidMount ());
        console.log(newPage)
      };

      return (
        <div id="oteste">
        <MaterialTable
          columns={[
            { field: 'id', title: 'Id', minWidth: 50 },
            { field: 'client.name', title: 'Cliente', minWidth: 100 },
            { field: 'current_process.name', title: 'Processo', minWidth: 50 },
            {
              field: 'current_subprocess.name',
              title: 'Subprocesso',
              minWidth: 50,
              align: 'right',
              format: (value) => value.toLocaleString('en-US'),
            },
            {
              field: 'opening_date',
              title: 'Abertura',
              minWidth: 100,
              align: 'right',
              format: (value) => value.toLocaleString('en-US'),
            },
            {
              field: 'opening_date',
              title: 'Prazo',
              minWidth: 100,
              align: 'right',
              format: (value) => value.toFixed(2),
            },
          ]}
          components={{
            Row: props => (
              <MTableBodyRow
                {...props}
                onDoubleClick={e => {
                  console.log(props.actions);
                  console.log(props.data.name)
                  this.setState({serviceOrderId: props.data.id});
                  this.setState({modalIsOpen: true});
                }
              }
              />
            )
            
          }}

          data={tableData}
          title="O.S. Abertas"
      
        />
        <Dialog  fullWidth={true} maxWidth={'md'} aria-labelledby="max-width-dialog-title" open={this.state.modalIsOpen}>
          <DialogTitle id="customized-dialog-title">
            Modal title
          </DialogTitle>
          <DialogContent dividers>
            <ServiceOrderModal serviceOrderId={this.state.serviceOrderId}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{this.setState({modalIsOpen: false})}} autoFocus color="primary">
              fechar
            </Button>
          </DialogActions>
        </Dialog>
        <Modal
          isOpen={false}
          contentLabel="My dialog"
          >
          <div>My modal dialog.</div>
          <Button onClick={()=>{this.setState({modalIsOpen: false})}}>fechar</Button>
          <ListRegisterView serviceOrderId={this.state.serviceOrderId}/>
      </Modal>
        </div>
    
      );
  }
};

ReactDOM.render(<div><TableRegister/></div>, document.getElementById("root"));

export default TableRegister;