import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ListRegisterView() {

  return (
    <List >
      <ListItem alignItems="flex-start">
        <Grid container direction="column" justify="space-between" alignItems="flex-start">
          <ListItemText
            primary="Comentario ao encaminhar:"
            secondary={
              <React.Fragment>
                {"gmissio | 15/02/2021 15:30"}
              </React.Fragment>
            }
          />
          <ListItemText
            secondary={
              <React.Fragment>
                {"Encaminhado para Troca de tela | Encomenda de peça"}
              </React.Fragment>
            }
          />
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Grid container direction="column" justify="space-between" alignItems="flex-start">
          <ListItemText
            primary="Adicionado comentario::"
            secondary={
              <React.Fragment>
                {"gmissio | 15/02/2021 15:29"}
              </React.Fragment>
            }
          />
          <ListItemText
            primary={
              <React.Fragment>
                {"Cliente aceitou o orçamento"}
              </React.Fragment>
            }
          />
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Grid container direction="column" justify="space-between" alignItems="flex-start">
          <ListItemText
            primary="Adicionado comentario:"
            secondary={
              <React.Fragment>
                {"gmissio | 15/02/2021 13:45"}
              </React.Fragment>
            }
          />
          <ListItemText
            primary={
              <React.Fragment>
                {"Entrado em contato com o cliente e passado o orçamento, aguardando retorno"}
              </React.Fragment>
            }
          />
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Grid container direction="column" justify="space-between" alignItems="flex-start">
          <ListItemText
            primary="Comentario ao encaminhar:"
            secondary={
              <React.Fragment>
                {"gmissio | 15/02/2021 13:35"}
              </React.Fragment>
            }
          />
          <ListItemText
            secondary={
              <React.Fragment>
                {"Aberta O.S. em Troca de tela | Orçamento"}
              </React.Fragment>
            }
          />

        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
