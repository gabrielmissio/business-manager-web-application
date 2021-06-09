import React from 'react'
import { Grid } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const Registers = ({registers}) => {
  return (
    <div>
      {registers.map((register) => (
        <div class="card">
          <div class="card-body">
            <ListItem alignItems="flex-start">
              <Grid container direction="column" justify="space-between" alignItems="flex-start">
                <ListItemText
                primary={register.title}
                secondary={
                  <React.Fragment>
                  {register.user.user_name + " | "  + register.inserted_at}
                  </React.Fragment>
                }
                />
                <ListItemText
                primary={register.message}
                />
              </Grid>
            </ListItem>
            <hr/>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Registers