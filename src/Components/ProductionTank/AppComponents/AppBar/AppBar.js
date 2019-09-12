import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
    backgroundColor: '#66bb6a',
    boxShadow: 'none'
  },
  conditioning: {
    backgroundColor: '#29b6f6',
    boxShadow: 'none'
  },
  empty: {
    backgroundColor: "#8d6e63",
    boxShadow: 'none'
  },
  dirty: {
    backgroundColor: "#8d6e63",
    boxShadow: 'none'
  },
  clean: {
    backgroundColor: "#ffee58",
    boxShadow: 'none'
  },
  sanitize: {
    backgroundColor: "#78909c",
    boxShadow: 'none'
  }
};

const FormBar = props => {
  const getStatus = props.batchStatus;
  const { classes } = props;

  const displayStatus = status => {
    const firstLetter = status[0];
    const firstLetterUpperCase = firstLetter.toUpperCase();
    const changeLetters = status.replace(firstLetter, firstLetterUpperCase);
    return changeLetters;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes[getStatus]}>
        <Toolbar>
          <Typography
            variant="h6"
            color= "black"
            className={classes.grow}
          >
            {props.tank}: {displayStatus(getStatus)}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(FormBar);