import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../../../../App.css'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: '#78909C'
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div id="spinner">
      <CircularProgress className={classes.progress} />
    </div>
  );
}

export default withStyles(styles)(CircularIndeterminate);