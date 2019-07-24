import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import '../../../../App.css';

const styles = theme => ({

    formControl: {
      margin: theme.spacing.unit,
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: '#d1d0bb',
      },
    
    input: {
        color: '#5c4925'
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

const TemperatureList = (props) => {
    const {classes} = props;

    return (
        <div className="fermentationData">
            <p>Temperature</p>
            <div className = "organizeFermentation">
                <TextField
                    value={props.temp[props.temp.length-1] ? props.temp[props.temp.length-1].temp : 0}
                    onChange={props}
                    type= "number"
                    name = "Temp"
                    className={classes.textField} 
                    variant="outlined" 
                    label= "Temp"
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
                        endAdornment: <InputAdornment position="end">F</InputAdornment>
                    }}  >
                </TextField>
                <TextField
                    value={props}
                    onChange={props}
                    type= "number"
                    name = "Time"
                    className={classes.textField} 
                    label= "For"
                    margin="normal"
                    InputLabelProps={{
                        classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused
                        },
                    }} 
                    InputProps={{
                        classes: {
                            focused: classes.cssLabel
                        },
                        endAdornment: <InputAdornment position="end">Days</InputAdornment>,
                        readOnly: true
                    }}  >
                </TextField> 
            </div>
        </div>
    )
}

export default withStyles(styles)(TemperatureList);