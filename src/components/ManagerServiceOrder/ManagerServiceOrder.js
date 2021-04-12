import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MaterialTable, { MTableBodyRow } from "material-table";
import Modal from "react-modal";
import ListRegisterView from './../ListRegisterView/ListRegisterView'
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Container from '@material-ui/core/Container';
import ServiceOrderModal from './components/ServiceOrderModal'

Modal.setAppElement("#root");

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'id', label: 'Cliente', minWidth: 100 },
  { id: 'current_process.name', label: 'Processo', minWidth: 50 },
  {
    id: 'value',
    label: 'Subprocesso',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'opening_date',
    label: 'Abertura',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'updated_at',
    label: 'Prazo',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

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
      const { teste } = this.state;
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
                  alert("Make row editable" + props.data);
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