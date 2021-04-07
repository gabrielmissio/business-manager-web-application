import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NotFound from './NotFound'; 
import WorkflowDashboard from '../components/workflow/WorkflowDashboard'
import CreateClientForm from '../components/CreateClientForm/CreateClientForm'
import CreateSubprocessForm from '../components/CreateSubprocessForm/CreateSubprocessForm'
import CreateProcessForm from '../components/CreateProcessForm/CreateProcessForm'
import CreateUserForm from '../components/CreateUserForm/CreateUserForm'
import CreateServiceOrderForm from '../components/CreateServiceOrderForm/CreateServiceOrderForm'
import CreateRegisterMessageForm from '../components/CreateRegisterForms/CreateRegisterMessageForm'
import CreateRegisterProcessSubprocessForm from '../components/CreateRegisterForms/CreateRegisterProcessSubprocessForm'
import ListRegisterView from '../components/ListRegisterView/ListRegisterView'
import Paper from '@material-ui/core/Paper';

import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),//Espacamento dentro do drawer
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
      <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          <Grid container direction="row" justify="flex-start" xs={6}>
            <Typography variant="h6" noWrap>
              <Link href="/"  color="inherit" >
                {'Business Manager'}
              </Link>
            </Typography>
          </Grid>
          <Grid container direction="row" justify="flex-end" xs={8} >
            <Button
              disableElevation
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AccountCircle />}
            >
              Profile
            </Button>
            <Button
              disableElevation
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<ExitToAppIcon />}
              href="https://github.com/gabrielmissio/teste-react"
              target="_blank"
            >
                Logout
            </Button>

          </Grid>
            
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <NavLink to={"/"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </NavLink> 
            <NavLink to={"/cadastro-de-cliente"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Cadastrar Cliente"} />
              </ListItem>
            </NavLink>  
            <NavLink to={"/cadastro-de-subprocesso"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Cadastrar Subprocesso"} />
              </ListItem>
            </NavLink>  
            <NavLink  to={"/cadastro-de-processo"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Cadastrar Processo"} />
              </ListItem>
            </NavLink>  
            <NavLink  to={"/cadastro-de-usuario"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Cadastrar Usuario"} />
              </ListItem>
            </NavLink>
            <NavLink  to={"/cadastro-de-ordem-de-servico"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Cadastrar O.S."} />
              </ListItem>
            </NavLink>         
            <NavLink  to={"/adicionar-registro/mensagem"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Adicionar Mensagem"} />
              </ListItem>
            </NavLink>
            <NavLink  to={"/adicionar-registro/alterar-processo-subprocesso"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Alterar Processo/Subprocesso"} />
              </ListItem>
            </NavLink>            
            <NavLink  to={"/ordem-de-servico/registro"} style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItem button>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Listar registros"} />
              </ListItem>
            </NavLink>
          </List>
          <Divider />
          <List>
            {['-----', '-----', '-----'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main 
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        > 
        <div className={classes.drawerHeader} />
        <Paper style={{ padding: 26, minHeight: '80.8vh'}} elevation={3} >

          <Switch>
            <Route exact path="/" component={WorkflowDashboard}/>
            <Route exact path="/cadastro-de-cliente" component={CreateClientForm}/>
            <Route exact path="/cadastro-de-subprocesso" component={CreateSubprocessForm}/>
            <Route exact path="/cadastro-de-processo" component={CreateProcessForm}/>
            <Route exact path="/cadastro-de-usuario" component={CreateUserForm}/>
            <Route exact path="/cadastro-de-ordem-de-servico" component={CreateServiceOrderForm}/>
            <Route exact path="/adicionar-registro/mensagem" component={CreateRegisterMessageForm}/>
            <Route exact path="/adicionar-registro/alterar-processo-subprocesso" component={CreateRegisterProcessSubprocessForm}/>
            <Route exact path="/ordem-de-servico/registro" component={ListRegisterView}/>
            <Route exact path="/*" component={NotFound}/>
          </Switch>
        </Paper>
        </main>
      </div>
    </Router>
  );
}

