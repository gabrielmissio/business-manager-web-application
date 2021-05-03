import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select';
import axios from 'axios';


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
        var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/process'
        axios.get(url, {
            responseType: 'json'
        }).then(response => {
            var data = response.data
            const options = data.process.map(d => ({
                "value" : d.id,
                "label" : d.name
            }))
            this.setState({ process: options}, () => loadSubprocessOptions());
        });        
        //
        url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/client'
        axios.get(url, {
            responseType: 'json'
        }).then(response => {
            var data = response.data
            const options = data.clients.map(d => ({
                "value" : d.id,
                "label" : d.name
            }))
            this.setState({ client: options});
        }); 
        //
        const loadSubprocessOptions = () => {
            var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/process/'+this.state.selectedProcessId
            axios.get(url, {
                responseType: 'json'
            }).then(response => {
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
            var url = 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/process/'+this.state.selectedProcessId
            axios.get(url, {
                responseType: 'json'
            }).then(response => {
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
        
            var axios = require('axios');
            var data = JSON.stringify({"client_id": this.state.selectedClientId, "current_process_id": this.state.selectedProcessId, "current_subprocess_id": this.state.selectedSubprocessId, "user_id": 1});
            
            var config = {
                method: 'post',
                url: 'https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/service-order',
                headers: { 
                    'Authorization': 'Bearer eyJraWQiOiJzbmEyYmFlNGtMbnhpODdPOU5nRDlkd3NzOWRJN2lPNExzQUd3c0lCa1cwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1NWMyMzQ2NC1mZWIxLTRkOWItYmViOC0yYzQ3YmEwMTFkNDQiLCJjb2duaXRvOmdyb3VwcyI6WyJsdWNraWUtdGVjaCJdLCJldmVudF9pZCI6IjI1MGM5OThhLTIwYTMtNDc0Zi1hNGNmLThjNjQ4N2ZiYThmYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTM3NjcxMTIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1hwUGtubkpzciIsImV4cCI6MTYxMzc3MDcxMiwiaWF0IjoxNjEzNzY3MTEyLCJqdGkiOiJiMGVjOWE4OC1hZmEzLTQ1MTQtOWEyYS04NjUxYTM5NmZhY2MiLCJjbGllbnRfaWQiOiI3MTNqcGgwZWxnc291ZTltY211M2xnY2o1aSIsInVzZXJuYW1lIjoidGhpYWdvLm0ifQ.LNtqXXWxyIDkQEKktocWTNj-raVOVsbK71m8J4_Ijy06_eD9CzYxqa4S7rhRaew-6Ql5NPH4gIDOfUHtkd42ttCZOuiphk8AtetpLuWuwB_M-3QWo68YWevW-X1hgn_fx9AXt9B8kz2FDbN6g2gylQ8jrEPdaB-tnnR5PkcXTZB7pKLz8moX_qB2Sfe8OTMey6abV1nEzrQ9CqPWPMklrR_CsEa2G4OZZdRO9orPRa9E5tmxXdaSH7hzR6cH6lSe4yb3ACJ-AxLB-ZsUpbkV0oLNmP3sDk3gB_uWO2TYpuZ-7FFqUYqZRzeYW1-SYvL7WCPQJHxQMDXzCA_sG4eqeA', 
                    'Content-Type': 'application/json'
              },
              data : data
            };
            alert(data)
            axios(config)
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