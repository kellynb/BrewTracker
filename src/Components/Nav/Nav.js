import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuList from './MenuList/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import '../../App.css';
import BrewButton from '../Home/BrewButton/BrewButton';

const styles = {
  root: {
    flexGrow: 1
  },

  appbar: {
    backgroundColor: '#78909C',    
  },

  title: {
    color: 'white',
    marginLeft: 20,
    flexGrow: 1,
    fontWeight: 'bold'
  },

  toolbar: {
    display: 'flex',
    direction: 'row',
    textAlign: 'center'
  },

  menuButton: {
    padding: 0,
    color: 'white'
  },

  brew: {
    flexGrow: 1,
    textAlign: 'center'
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
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} 
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}>
              <MenuIcon/>
            </IconButton>
            <MenuList anchorEl ={this.state.anchorEl} handleClose={this.handleClose}/>
            <Typography variant="h6" className={classes.title}>
              Very Good Brewing Company
            </Typography>
            <div className={classes.brew} id="navBrew">
              <BrewButton/>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
  

export default withStyles(styles)(Nav);