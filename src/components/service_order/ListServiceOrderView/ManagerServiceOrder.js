import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import MaterialTable, { MTableBodyRow } from "material-table";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ServiceOrderModal from './components/ServiceOrderModal'
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from '@material-ui/core';
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
          serviceOrderId: 0,
          clientName: ''
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
        <TableContainer style={{ maxHeight: 440}}>
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
                    this.setState({serviceOrderId: props.data.id});
                    this.setState({clientName: props.data.client.name});
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
          <Grid container justify="space-between" maxWidth={'md'} style={{backgroundColor: '#3f51b5', color:'#fff'}}>
            <DialogTitle id="customized-dialog-title">
              {this.state.clientName}
            </DialogTitle>
            <IconButton aria-label="close" onClick={()=>{this.setState({modalIsOpen: false})}}>
              <CloseIcon fontSize='large' style={{ color: '#fff' }}/>
            </IconButton>
          </Grid>
          <DialogContent dividers>
            <ServiceOrderModal serviceOrderId={this.state.serviceOrderId}/>
          </DialogContent>
        </Dialog>
      
      </div>
    );
  }
};

ReactDOM.render(<div><TableRegister/></div>, document.getElementById("root"));

export default TableRegister;