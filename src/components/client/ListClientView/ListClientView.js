import React from 'react';
import ReactDOM from 'react-dom';
import MaterialTable, { MTableBodyRow } from "material-table";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import ClientModal from './components/ClientModal'
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import bmApi from './../../../bm-api-config/BmApi'

class TableClient extends React.Component {
  
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
          clientId: 0,
          clientName: ''
      };
      
  }

  componentDidMount () {
    bmApi.get('client?page='+this.state.page+'&paginate_by='+this.state.rowsPerPage)
    .then(response => {
      var data = response.data
      console.log(response.data)
      data.clients.map(v => console.log(v.name))
      this.setState({ tableData: data.clients });
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
                    this.setState({clientId: props.data.id});
                    this.setState({clientName: props.data.name});
                    this.setState({modalIsOpen: true});
                  }
                }
                />
              )
              
            }}

            data={tableData}
            title="Clientes cadastrados"
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
            <ClientModal clientId={this.state.clientId}/>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
};

ReactDOM.render(<div><TableClient/></div>, document.getElementById("root"));

export default TableClient;