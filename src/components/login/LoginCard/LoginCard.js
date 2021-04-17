import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@material-ui/icons/Lock';


class LoginCard extends React.Component {
  
  constructor () {
      super();

      this.state = {
          serviceOrderId: 0,
          clientName: ''
      };
      
  }


  componentDidMount () {
    
  }

    render () {
        return (
            <Container maxWidth="xs">
                <Paper style={{ padding: 26, minHeight: '60.8vh', backgroundColor: '#FBFBFC'}} elevation={3} >
                    <form >
                        <Grid container direction="column" justify="space-between" alignItems="flex-start">
                            <Grid  container item xs={12} alignItems="flex-start" justify="center">
                            <Typography color="primary" variant="h6" align="center" component="h2"  alignItems="center" justify="center">
                                <Box fontWeight="fontWeightBold">
                                Autenticação
                                </Box>
                            </Typography>            
                            </Grid>
                            <br/>
                            <Grid  container item xs={12} alignItems="flex-start" justify="center">
                                <LockIcon  style={{ fontSize: 120 }} color="primary"/>
                            </Grid>
                            <br/>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={12}>
                                    <TextField size="small" fullWidth variant="outlined"  name="user" label="Usuario"/>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField size="small"  type="password"fullWidth variant="outlined"  name="password" label="Senha"/>
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
                                >
                                Entrar
                            </Button>
                            </Grid>
                        </Grid> 
                    </form>   
                </Paper>
            </Container>
        );
    }
};

export default LoginCard;