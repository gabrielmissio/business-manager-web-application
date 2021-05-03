import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select/async';

class ProcessModal extends React.Component {

  constructor () {
    super();

    this.state = {
      process: false
    };
    
  }
  componentDidMount() {
    var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/process/'+this.props.processId
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        var data = response.data
        console.log(response.data)
        this.setState({process: data});
    });  
  }
  render() {
      return (
        <div>
          {
            this.state.process ?
            <Container maxWidth="sm">
              <form >
                <Grid container direction="column" justify="space-between" alignItems="flex-start">
                  <Grid container xs={12}>
                    <Typography color="primary" variant="h6" component="h2" >
                      Identificação
                      <hr/>
                    </Typography>
                  </Grid>
                  <br/>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={12}>
                      <TextField size="small" fullWidth variant="outlined"  name="name" label="Nome" defaultValue={this.state.process.name}/>
                    </Grid>
                  </Grid>
                  <br/>
                  <Grid container xs={12}>
                    <Typography color="primary" variant="h6" component="h2" >
                      Subprocessos
                      <hr/>
                    </Typography>
                  </Grid>
                  <br/>
                  <Grid container spacing={4}>
                    <Grid item xs={12}> 
                      <Select cacheOptions defaultOptions isMulti/>
                    </Grid>
                  </Grid>
                  <br/>
                  <Grid container xs={12}>
                    <Typography color="primary" variant="h6" component="h2" >
                      Cadastro
                      <hr/>
                    </Typography>
                  </Grid>
                  <br/>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <TextField disabled size="small" fullWidth variant="outlined"  label="Cadastrado em" defaultValue={this.state.process.inserted_at}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField disabled size="small" fullWidth variant="outlined"  label="Atualizado em" defaultValue={this.state.process.updated_at ? this.state.process.updated_at : this.state.process.inserted_at} />
                    </Grid>
                  </Grid>
                  <br/>
                  <Grid container xs={12} sm={12}>
                    <Button
                      type="submit"
                      disableElevation
                      variant="contained"
                      color="primary"
                      fullWidth
                      endIcon={<SendIcon/>}
                      disabled
                    >
                      Alterar
                    </Button>
                  </Grid>
                </Grid>
            </form>        
          </Container>
            : 'Loading'
          }
        </div>
      )
  } 

}

export default ProcessModal;