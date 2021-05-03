import React from 'react';
import LoginCard from './../components/login/LoginCard/LoginCard'
import Grid from '@material-ui/core/Grid';


function NotFound() {

  return(
    <Grid container direction="column" justify="center" alignItems="center" style={{minHeight: '100.0vh', color: 'white', backgroundColor: '#EFF2F3'}}> 
  
        <LoginCard/>
    </Grid>
  )
}

export default NotFound;