import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
  color: {
    backgroundColor: '#5d9732'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Status: Fermenting
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);