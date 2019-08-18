import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    colorSwitchBase: {
      color: green[300],
      '&$colorChecked': {
      color: green[500],
      '& + $colorBar': {
        backgroundColor: green[500],
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  root: {
    height: 56,
    marginTop: 16,
    marginBottom: 8
  },

  formControl: {
    margin: theme.spacing.unit,
  }
})

const Toggle = (props) => {
    const { classes } = props;
      return(
        <FormControlLabel classes ={{root: classes.root}}
            control={
            <Switch
                checked={props.checked}
                onChange={props.onChange}
                value={props.value}
                name = {props.name}
                classes={{
                switchBase: classes.colorSwitchBase,
                checked: classes.colorChecked,
                bar: classes.colorBar
                }}
            />
            }
            label={props.label}
        />
      ) 
    
}


export default withStyles(styles)(Toggle);