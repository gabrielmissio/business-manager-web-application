import React from 'react';
import Typography from '@material-ui/core/Typography';
import LoginCard from './../components/login/LoginCard/LoginCard'
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function NotFound() {

  return(
    <Grid container direction="column" justify="center" alignItems="center" style={{minHeight: '100.0vh', color: 'white', backgroundColor: '#EFF2F3'}}> 
  
        <LoginCard/>
    </Grid>
  )
}

export default NotFound;