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
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  fermenting: {
    backgroundColor: '#5d9732'
  },
  conditioning: {
    backgroundColor: 'blue'
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
    this.props.changeStatus()
  };

  render () {
    const { classes } = this.props;
    const {anchorEl} = this.state;
    const firstLetter = this.props.status[0];
    const firstLetterUpperCase = firstLetter.toUpperCase();
    const changeLetters = this.props.status.replace(firstLetter, firstLetterUpperCase)

    return (
      <div className={classes.root} >
        <AppBar position="static" className={classes[this.props.status]}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {this.props.tank}: {changeLetters}
            </Typography>
            {this.props.status === 'fermenting' ?
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
            <MenuItems anchorEl ={this.state.anchorEl} handleClose={this.handleClose} status={this.props.status}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  
}

export default withStyles(styles)(ButtonAppBar);