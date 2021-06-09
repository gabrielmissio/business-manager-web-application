import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select';
import bmApi from '../../../bm-api-config/BmApi';


class CreateServiceOrderForm extends React.Component {

    state = {
        process: [],
        subpross: [],
        client: [],
        selectedProcessId: -1,
        selectedProcessName: '*Selecione um processo*',
        selectedSubprocessId: -1,
        selectedSubprocessName: '*Selecione um subprocesso*',
        selectedClientId: -1,
        selectedClientName: '*Selecione um cliente'
    };

    componentDidMount() {
        
        bmApi.get('process')
        .then(response => {
            var data = response.data
            const options = data.process.map(d => ({
                "value" : d.id,
                "label" : d.name
            }))
            this.setState({ process: options}, () => loadSubprocessOptions());
        });        
        //
        bmApi.get('client')
        .then(response => {
            var data = response.data
            const options = data.clients.map(d => ({
                "value" : d.id,
                "label" : d.name
            }))
            this.setState({ client: options});
        }); 
        //
        const loadSubprocessOptions = () => {
            bmApi.get('process/'+this.state.selectedProcessId)
            .then(response => {
                var data = response.data
                const options = data.subprocess.map(d => ({
                  "value" : d.id,
                  "label" : d.name
                }))
                this.setState({ subprocess: options});
            });
          }

    }

    render() {
        const handleChangeComboProcess = (e) => {
            this.setState({ selectedProcessId: e.value, selectedProcessName: e.label}, () => loadSubprocessOptions(),  this.setState({ selectedSubprocessId: -1, selectedSubprocessName: '*Selecione o subprocesso*'}));
        }
    
        const handleChangeComboSubprocess = (e) => {
            this.setState({ selectedSubprocessId: e.value, selectedSubprocessName: e.label});
        }

        const handleChangeComboClient = (e) => {
            this.setState({ selectedClientId: e.value, selectedClientName: e.label});
        }
    
        const loadSubprocessOptions = () => {
            bmApi.get('process/'+this.state.selectedProcessId)
            .then(response => {
                var data = response.data
                const options = data.subprocess.map(d => ({
                    "value" : d.id,
                    "label" : d.name
                }))
                this.setState({ subprocess: options});
            });
        }

        const handleSubmit = event => {

            event.preventDefault();
        
            var data = JSON.stringify({"client_id": this.state.selectedClientId, "current_process_id": this.state.selectedProcessId, "current_subprocess_id": this.state.selectedSubprocessId, "user_id": 1});
            
            
            alert(data)
            bmApi.post('service-order', data)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert('O.S. cadastrada com sucesso!')
            })
            .catch(function (error) {
                console.log(error);
                alert('Erro ao cadastrar O.S.!')
            });
            
        }
    
        return(
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" justify="space-between" alignItems="flex-start">
                    <Grid  container item xs={12} alignItems="flex-start" justify="center">
                      <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                        <Box fontWeight="fontWeightBold">
                        CADASTRAR ORDEM DE SERVICO
                        </Box>
                      </Typography>            
                    </Grid>
                    <br/>
                    <br/>
                    <Grid container xs={12}>
                        <Typography color="primary" variant="h6" component="h2" >
                            Cliente
                            <hr/>
                        </Typography>
        
                    </Grid>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12}>                             
                            <Select
                                value={{ label: this.state.selectedClientName, value: this.state.selectedClientId }}
                                onChange={handleChangeComboClient}
                                options={this.state.client}                  
                            />
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid container xs={12}>
                        <Typography color="primary" variant="h6" component="h2" >
                            Processo
                            <hr/>
                        </Typography>
        
                    </Grid>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12}>
                            <Select
                                value={{ label: this.state.selectedProcessName, value: this.state.selectedProcessId }}
                                onChange={handleChangeComboProcess}
                                options={this.state.process}                  
                            />
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid container xs={12}>
                        <Typography color="primary" variant="h6" component="h2" >
                            Subprocesso
                            <hr/>
                        </Typography>
        
                    </Grid>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12}>
                            <Select
                                value={{ label: this.state.selectedSubprocessName, value: this.state.selectedSubprocessId }}
                                onChange={handleChangeComboSubprocess}
                                options={this.state.subprocess}                  
                            />    
                            
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

export default CreateServiceOrderForm;