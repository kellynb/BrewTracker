import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItems from './MenuItems/MenuItems';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  fermenting: {
    backgroundColor: '#5d9732',
    boxShadow: 'none'
  },
  conditioning: {
    backgroundColor: '#3490db',
    boxShadow: 'none'
  },
  empty: {
    backgroundColor: "#5c4925",
    boxShadow: 'none'
  },
  dirty: {
    backgroundColor: "#5c4925",
    boxShadow: 'none'
  },
  clean: {
    backgroundColor: "#707070",
    boxShadow: 'none'
  },
  sanitize: {
    backgroundColor: "white",
    boxShadow: 'none'
  },
  sanitizeText: {
   color: 'black'
  }
};

class ButtonAppBar extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleStatusChange = (value) => {
    const valueAllLowerCase = value.toLowerCase();
    this.props.statusUpdate(valueAllLowerCase);
  }

  render () {
    const getComponentStatus = this.props.componentStatus;
    const getReduxStatus = this.props.status;
    const { classes } = this.props;
    const {anchorEl} = this.state;

    const determineReduxOrComponent = (componentStatus, reduxStatus) => {
      if (componentStatus) {
        return componentStatus
      } else {
        return reduxStatus
      }
    }

    const dipslayStatus = (status) => {
      const firstLetter = status[0];
      const firstLetterUpperCase = firstLetter.toUpperCase();
      const changeLetters = status.replace(firstLetter, firstLetterUpperCase);
      return changeLetters
    }
    
    return (
      <div className={classes.root} >
        <AppBar position="static" className={classes[determineReduxOrComponent(getComponentStatus, getReduxStatus)]}>
          <Toolbar>
            <Typography 
              variant="h6" 
              color={determineReduxOrComponent(getComponentStatus, getReduxStatus) === 'sanitize' ? classes.sanitizeText : "inherit" } 
              className={classes.grow}
            >
              {this.props.tank}: {dipslayStatus(determineReduxOrComponent(getComponentStatus,getReduxStatus))}
            </Typography>
            {determineReduxOrComponent(getComponentStatus, getReduxStatus) === 'fermenting' ?
              <IconButton 
                className={classes.menuButton} 
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}>
                <MenuIcon/>
              </IconButton>
              :
              null
            }
            <MenuItems 
              anchorEl ={this.state.anchorEl} 
              handleClose={this.handleClose} 
              status={determineReduxOrComponent(getComponentStatus, getReduxStatus)} 
              handleStatusChange={this.handleStatusChange}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  
}

export default withStyles(styles)(ButtonAppBar);