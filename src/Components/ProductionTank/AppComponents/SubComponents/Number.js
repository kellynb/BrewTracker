import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: '#d1d0bb',
        maxWidth: '175px',
        minWidth: '100px'
      },
    
    input: {
        color: '#5c4925',
        width: 'auto'
    },

    cssLabel: {
        '&$cssFocused': {
          color: '#5c4925',
          fontWeight: 'bold',
          fontSize: 15
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
          borderBottomColor: '#5c4925',
        },
      },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: '#5c4925',
        },
      },

      notchedOutline: {
      },
  });

const Number = (props) => {
    const {classes} = props;

    return (
        <TextField
            value={props.valueCalc}
            onChange={props.onChange}
            type= "number"
            name = {props.name}
            id = {props.id}
            onFocus ={props.changeSelect}
            onBlur = {props.changeSelect}
            className={classes.textField} 
            variant="outlined" 
            label= {props.label}
            margin="normal"
            InputLabelProps={{
                classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
                },
            }} 
            InputProps={{classes: 
                { root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
                },
                endAdornment: <InputAdornment position="end">{props.measurement}</InputAdornment>
            }}  >
        </TextField>
    )
}

export default withStyles(styles)(Number);