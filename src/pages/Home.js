import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import NotFound from './NotFound'; 
import WorkflowDashboard from '../components/workflow/WorkflowDashboard'
import CreateClientForm from '../components/client/CreateClientForm/CreateClientForm'
import CreateSubprocessForm from '../components/subprocess/CreateSubprocessForm/CreateSubprocessForm'
import CreateProcessForm from '../components/process/CreateProcessForm/CreateProcessForm'
import CreateUserForm from '../components/user/CreateUserForm/CreateUserForm'
import CreateServiceOrderForm from '../components/service_order/CreateServiceOrderForm/CreateServiceOrderForm'
import CreateRegisterMessageForm from '../components/register/CreateRegisterForms/CreateRegisterMessageForm'
import CreateRegisterProcessSubprocessForm from '../components/register/CreateRegisterForms/CreateRegisterProcessSubprocessForm'
import ListRegisterView from '../components/register/ListRegisterView/ListRegisterView'
import Paper from '@material-ui/core/Paper';
import ManagerServiceOrder from '../components/service_order/ListServiceOrderView/ManagerServiceOrder'
import ItensDrawer from '../components/home/ItensDrawer/ItensDrawer'
import TableProcess from './../components/process/ListProcessView/ListProcessView'
import TableSubprocess from './../components/subprocess/ListSubprocessView/ListSubprocessView'
import TableClient from './../components/client/ListClientView/ListClientView'
import TableUser from './../components/user/ListUserView/ListUserView'
import { Auth } from 'aws-amplify'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import ChangePasswordForm from './../components/profile/ChangePasswordForm'


import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

const drawerWidth = 240;

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))

    window.sessionStorage.setItem("token", '');
    window.sessionStorage.setItem("currentUser", '');
    window.sessionStorage.setItem("auth", '');
    window.location.reload();
}

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

  nested: {
    paddingLeft: theme.spacing(4),
  },

}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [modalProfile, setModalProfile] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Router>
        <div className={classes.root} >
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
                onClick={()=>{setModalProfile(true)}}
              >
                Profile
              </Button>
              <Button
                disableElevation
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ExitToAppIcon />}
                onClick={signOut}
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
            <ItensDrawer/>
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
              <Route exact path="/usuario/cadastrar" component={CreateUserForm}/>
              <Route exact path="/usuario/gerenciar" component={TableUser}/>
              <Route exact path="/cliente/cadastrar" component={CreateClientForm}/>
              <Route exact path="/cliente/gerenciar" component={TableClient}/>
              <Route exact path="/processo/cadastrar" component={CreateProcessForm}/>
              <Route exact path="/processo/gerenciar" component={TableProcess}/>
              <Route exact path="/subprocesso/cadastrar" component={CreateSubprocessForm}/>
              <Route exact path="/subprocesso/gerenciar" component={TableSubprocess}/>
              <Route exact path="/ordem-de-servico/cadastrar" component={CreateServiceOrderForm}/>
              <Route exact path="/adicionar-registro/mensagem" component={CreateRegisterMessageForm}/>
              <Route exact path="/adicionar-registro/alterar-processo-subprocesso" component={CreateRegisterProcessSubprocessForm}/>
              <Route exact path="/ordem-de-servico/gerenciar" component={ManagerServiceOrder}/>
              <Route exact path="/ordem-de-servico/registro" component={ListRegisterView}/> 
              <Route exact path="/*" component={NotFound}/>
            </Switch>
          </Paper>
          </main>
        </div>
      </Router>
      <Dialog  fullWidth={true} maxWidth={'sm'} aria-labelledby="max-width-dialog-title" open={modalProfile}>
        <Grid container justify="space-between" maxWidth={'md'} style={{backgroundColor: '#3f51b5', color:'#fff'}}>
          <DialogTitle id="customized-dialog-title">
            {window.sessionStorage.getItem("currentUserName")}
          </DialogTitle>
          <IconButton aria-label="close" onClick={()=>{setModalProfile(false)}}>
            <CloseIcon fontSize='large' style={{ color: '#fff' }}/>
          </IconButton>
        </Grid>
        <DialogContent dividers>
          <ChangePasswordForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
}

