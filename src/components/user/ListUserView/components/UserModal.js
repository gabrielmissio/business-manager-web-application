import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import AsyncSelect from 'react-select/async';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';


class SubprocessModal extends Component {

  constructor () {
    super();

    this.state = {
      user: false,
      isEditable: true
    };
    
  }

  componentDidMount() {
    var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/user/'+this.props.userId
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        var data = response.data
        console.log(response.data)
        this.setState({ user: data});
    });  
  }

  render() {
      return (
        <div>
            {
              this.state.user ?
                <Container maxWidth="sm">
                <form >
                  <Grid container direction="column" justify="space-between" alignItems="flex-start">
                    <Grid container xs={12}>
                      <Checkbox
                        checked={!this.state.isEditable}
                        onChange={() => {this.setState({ isEditable: !this.state.isEditable})}}
                        name="checkedF"
                        defaultChecked
                        color="primary"
                      />
                      <h4>Edição habilitada</h4>
                    </Grid>
                    <br/>
                    <Grid container xs={12}>
                      <Typography color="primary" variant="h6" component="h2" >
                          Identificação
                          <hr/>
                      </Typography>
                    </Grid>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="name" label="Nome" defaultValue={this.state.user.name}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="user_name" label="Nome de usuario" defaultValue={this.state.user.user_name}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField disabled={this.state.isEditable} size="small" fullWidth variant="outlined"  name="email" label="Email" defaultValue={this.state.user.email}/>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid container xs={12}>
                        <Typography color="primary" variant="h6" component="h2" >
                            Permições
                            <hr/>
                        </Typography>
                    </Grid>
                    <br/>
                    <Grid container spacing={4}>
                      <Grid item xs={12}> 
                          <AsyncSelect disabled={this.state.isEditable} cacheOptions defaultOptions isMulti/>
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
                        <TextField disabled size="small" fullWidth variant="outlined"  label="Cadastrado em" defaultValue={this.state.user.inserted_at}/>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField disabled size="small" fullWidth variant="outlined"  label="Atualizado em" defaultValue={this.state.user.updated_at ? this.state.user.updated_at : this.state.user.inserted_at} />
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
                        disabled={this.state.isEditable}
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

export default SubprocessModal;