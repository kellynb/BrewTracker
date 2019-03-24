import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../Images/logo.png'
import MenuList from './MenuList/MenuList';
import '../../App.css';

const styles = {
  root: {
    flexGrow: 1,
    height: '70px',
  },
 
  appbar: {
    backgroundColor: '#5c4925;'
  },

  grow: {
    width: 'auto',
    fontFamily: 'Fira Sans Condensed',
    color: '#e6e5d4',
    fontSize: '25px'
  },

  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center'
  },

  menuButton: {
    padding: 0
  }

};

const Nav = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt='Thirsy Planet Logo' id='logo' />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Thirsty Planet Brewing
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuList/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Nav);