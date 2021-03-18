import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function CreateClientForm() {

  return(
        <form>               
            <Paper style={{ padding: 26, height: '83vh'}} elevation={3}>
                <Grid container item xs={12}>
                    <TextField variant="outlined" fullWidth name="name" label="Name"/>
                    <TextField variant="outlined" fullWidth name="name" label="Name"/>
                </Grid>
            </Paper>
        </form>


    )
}

export default CreateClientForm;