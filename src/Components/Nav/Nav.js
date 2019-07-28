import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../Images/beerLogo.png';
import MenuList from './MenuList/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import '../../App.css';

const styles = {
  root: {
    flexGrow: 1,
    height: '9.5vh',
  },

  appbar: {
    backgroundColor: '#5c4925;'
  },

  grow: {
    fontFamily: 'Fira Sans Condensed',
    color: '#e6e5d4',
    fontSize: '25px',
    flexGrow: 1
  },

  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center'
  },

  menuButton: {
    padding: 0
  }

};

class Nav extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <img src={logo} alt='Thirsy Planet Logo' id='logo' />
            <Typography variant="h1" color="inherit" className={classes.grow}>
              Very Good Brewing Company
            </Typography>
            <IconButton className={classes.menuButton} color="inherit"
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}>
              <MenuIcon/>
            </IconButton>
            <MenuList anchorEl ={this.state.anchorEl} handleClose={this.handleClose}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
  

export default withStyles(styles)(Nav);