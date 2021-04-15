import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ListItemLink from './../ListItemLink/ListItemLink'
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 360,
    },
    lists: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function ItensDrawer() {
    const classes = useStyles();
    const [userControl, setUserControl] = React.useState(false);
    const [clientControl, setClientControl] = React.useState(false);
    const [processControl, setProcessControl] = React.useState(false);
    const [subprocessControl, setSubprocessControl] = React.useState(false);
    const [serviceOrderControl, setServiceOrderControl] = React.useState(false);
    const [reportControl, setReportControl] = React.useState(false);

    const handleUserClick = (event) => {
        setUserControl((prevUserControl) => !prevUserControl);
    };

    const handleClientClick = (event) => {
        setClientControl((prevClientControl) => !prevClientControl);
    };

    const handleProcessClick = (event) => {
        setProcessControl((prevProcessControl) => !prevProcessControl);
    };

    const handleSubprocessClick = (event) => {
        setSubprocessControl((prevSubprocessControl) => !prevSubprocessControl);
    };

    const handleServiceOrderClick = (event) => {
        setServiceOrderControl((prevServiceOrderControl) => !prevServiceOrderControl);
    };

    const handleReportClick = (event) => {
        setReportControl((prevReportControl) => !prevReportControl);
    };

    return(
        <List>
            <NavLink to={"/"} style={{ textDecoration: 'none', color: "inherit" }}>
                <ListItem button>
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
            </NavLink> 
            <ListItem button onClick={handleUserClick} name='teste_name'>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Usuarios"} />
            </ListItem>
            <Collapse component="li" in={userControl} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemLink to="/usuario/cadastrar" className={classes.nested} label='Cadastrar' />
                    <ListItemLink to="/usuario/gerenciar" className={classes.nested} label='Geranciar' />
                </List>
            </Collapse>
            <ListItem button onClick={handleClientClick} name='teste_name'>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Clientes"} />
            </ListItem>
            <Collapse component="li" in={clientControl} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemLink to="/cliente/cadastrar" className={classes.nested} label='Cadastrar' />
                    <ListItemLink to="/cliente/gerenciar" className={classes.nested} label='Geranciar' />
                </List>
            </Collapse>
            <ListItem button onClick={handleProcessClick} name='teste_name'>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Processos"} />
            </ListItem>
            <Collapse component="li" in={processControl} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemLink to="/processo/cadastrar" className={classes.nested} label='Cadastrar' />
                    <ListItemLink to="/processo/gerenciar" className={classes.nested} label='Geranciar' />
                </List>
            </Collapse>
            <ListItem button onClick={handleSubprocessClick} name='teste_name'>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Subprocessos"} />
            </ListItem>
            <Collapse component="li" in={subprocessControl} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemLink to="/subprocesso/cadastrar" className={classes.nested} label='Cadastrar' />
                    <ListItemLink to="/subprocesso/gerenciar" className={classes.nested} label='Geranciar' />
                </List>
            </Collapse>
            <ListItem button onClick={handleServiceOrderClick} name='teste_name'>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Ordens de Serviço"} />
            </ListItem>
            <Collapse component="li" in={serviceOrderControl} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemLink to="/cadastro-de-ordem-de-servico" className={classes.nested} label='Cadastrar' />
                    <ListItemLink to="/ordem-de-servico/gerenciar" className={classes.nested} label='Geranciar' />
                </List>
            </Collapse>
            <ListItem button onClick={handleReportClick} name='teste_name'>
                <ListItemIcon>{<LabelImportantIcon />}</ListItemIcon>
                <ListItemText primary={"Relatorios"} />
            </ListItem>
            <Collapse component="li" in={reportControl} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemLink to="/spam" className={classes.nested} label='Relatorio 1' />
                    <ListItemLink to="/spam" className={classes.nested} label='Relatorio 2' />
                    <ListItemLink to="/spam" className={classes.nested} label='Relatorio 3' />
                </List>
            </Collapse> 
        </List>
    )
}

export default ItensDrawer;