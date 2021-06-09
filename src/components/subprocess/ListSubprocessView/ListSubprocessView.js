import React from 'react';
import ReactDOM from 'react-dom';
import MaterialTable, { MTableBodyRow } from "material-table";
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import SubprocessModal from './components/SubprocessModal'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from '@material-ui/core';
import bmApi from './../../../bm-api-config/BmApi'

class TableSubprocess extends React.Component {
  
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
      subprocessId: 0,
      subprocessName: ''
    };
      
  }

  componentDidMount () {
  
    bmApi.get('subprocess?page='+this.state.page+'&paginate_by='+this.state.rowsPerPage)
    .then(response => {
      var data = response.data
      console.log(response.data)
      data.subprocess.map(v => console.log(v.name))
      this.setState({ tableData: data.subprocess });
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
              { field: 'limit_time', title: 'Tempo Limite', minWidth: 50 },
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
                    this.setState({subprocessId: props.data.id});
                    this.setState({subprocessName: props.data.name});
                    this.setState({modalIsOpen: true});
                  }
                }
                />
              )
              
            }}

            data={tableData}
            title="Subprocessos cadastrados"
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
              {this.state.subprocessName}
            </DialogTitle>
            <IconButton aria-label="close" onClick={()=>{this.setState({modalIsOpen: false})}}>
              <CloseIcon fontSize='large' style={{ color: '#fff' }}/>
            </IconButton>
          </Grid>
          <DialogContent dividers>
            <SubprocessModal subprocessId={this.state.subprocessId}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{this.setState({modalIsOpen: false})}} autoFocus color="primary">
              fechar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};

ReactDOM.render(<div><TableSubprocess/></div>, document.getElementById("root"));

export default TableSubprocess;