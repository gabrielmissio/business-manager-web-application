import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function ListItemLink(props) {
    const { to, open, ...other } = props;
  
    return (
        <ListItem button component={RouterLink} to={to} {...other}>
          <ListItemIcon>{<ArrowRightIcon />}</ListItemIcon> 
          <ListItemText primary={props.label} />
          {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
    );
  }
  
  ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
  };

export default ListItemLink;