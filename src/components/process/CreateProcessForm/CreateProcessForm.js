import React from 'react'; 
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select';
import bmApi from './../../../bm-api-config/BmApi'

class CreateProcessForm extends React.Component{

  state = {
    subprocessOptions: [],
    selectedOption: []
  };

  componentDidMount () {
    bmApi.get('subprocess')
    .then(response => {
      var data = response.data
      const options = data.subprocess.map(d => ({
        "value" : d.id,
        "label" : d.name
      }))
      //options.map((v) => {console.log(v)})
      this.setState({subprocessOptions: options});
    });

  }

  render () {

    const handleSubmit = event => {
      const subprocess = this.state.selectedOption.map(d => ({
        "subprocess_id" : d.value
      }))
      //tags.map(v => console.log(v.tag))
      
      var name = event.target.name.value
  
      event.preventDefault();
  
      var data = JSON.stringify({"name":name, "subprocess":subprocess});

      bmApi.post('process', data)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('Processo cadastrado com sucesso!')
      })
      .catch(function (error) {
        console.log(error);
        alert('Erro ao cadastrar processo!')
      });
      
    }
  
    const handleChangeCombo = (e) => {
      this.setState({selectedOption: e});
    }

    return(
      <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" justify="space-between" alignItems="flex-start">
              <Grid  container item xs={12} alignItems="flex-start" justify="center">
                <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                  <Box fontWeight="fontWeightBold">
                  CADASTRAR PROCESSO
                  </Box>
                </Typography>            
              </Grid>
              <br/>
              <br/>
              <Grid container xs={12}>
                  <Typography color="primary" variant="h6" component="h2" >
                      Identificação
                      <hr/>
                  </Typography>
  
              </Grid>
              <br/>
              <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                      <TextField size="small" fullWidth variant="outlined"  name="name" label="Nome"/>
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
                  <Select options={this.state.subprocessOptions} isMulti onChange={handleChangeCombo}/>
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
                >
                  Cadastrar
              </Button>
  
              </Grid>
              
            </Grid>
            
        </form>        
      </Container>
    )
     
  }

}


export default CreateProcessForm;