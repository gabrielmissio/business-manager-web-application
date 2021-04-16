import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import MaterialTable, { MTableBodyRow } from "material-table";
import Modal from "react-modal";
import ListRegisterView from '../../register/ListRegisterView/ListRegisterView'
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import ProcessModal from './components/ProcessModal'
//Modal.setAppElement("#root");

class TableProcess extends React.Component {
  
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
          serviceOrderId: 0,
          clientName: ''
      };
      
  }


  componentDidMount () {
    var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/process?page='+this.state.page+'&paginate_by='+this.state.rowsPerPage
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        var data = response.data
        console.log(response.data)
        data.process.map(v => console.log(v.name))
        this.setState({ tableData: data.process });
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
        <TableContainer style={{ maxHeight: 440}}>
          <MaterialTable
            columns={[
              { field: 'id', title: 'Id', minWidth: 50 },
              { field: 'name', title: 'Identificação', minWidth: 100 },
              {
                field: 'is_active',
                title: 'Ativo',
                minWidth: 50,
                align: 'right',
                format: (value) => value.toLocaleString('en-US'),
              },
              {
                field: 'inserted_at',
                title: 'Abertura',
                minWidth: 100,
                align: 'right',
                format: (value) => value.toLocaleString('en-US'),
              },
              {
                field: 'updated_at',
                title: 'Atualizado em',
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
                    this.setState({serviceOrderId: props.data.id});
                    this.setState({clientName: props.data.name});
                    this.setState({modalIsOpen: true});
                  }
                }
                />
              )
              
            }}

            data={tableData}
            title="O.S. Abertas"
            options={{
              paging: false
            }}
        
          />
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={this.state.paginationInfo.total_rows}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.paginationInfo.current_page -1}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          onChangePage={handleChangePage}
        />
        
        <Dialog  fullWidth={true} maxWidth={'md'} aria-labelledby="max-width-dialog-title" open={this.state.modalIsOpen}>
          <DialogTitle id="customized-dialog-title">
            O.S. {this.state.serviceOrderId} | {this.state.clientName}
          </DialogTitle>
          <DialogContent dividers>
            <ProcessModal/>
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

ReactDOM.render(<div><TableProcess/></div>, document.getElementById("root"));

export default TableProcess;