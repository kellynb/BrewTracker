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
            color={getStatus === "sanitize" ? classes.sanitizeText : "inherit"}
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