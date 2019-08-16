import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Toggle from '../SubComponents/toggle';
import { withStyles } from '@material-ui/core/styles';
import '../../../../App.css';


const styles = theme => ({
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
    }
})

const Spund = (props) => {
    const { classes } = props;
    const spund = {
         label: "Spund",
         name: "spund"
    }

      return(
        <div className="fermentationData">
            <p>Fermentation Pressure</p>
            <div className="organizeFermentation">
              <Toggle checked={props.spund} onChange={props.toggle} value={props.spund} label={spund.label} name={spund.name} />
              {props.spund ?
                <TextField
                  value={props.spundPressure}
                  onChange={props.userInput}
                  type= "number"
                  name = "spundPressure"
                  className={classes.textField} 
                  variant="outlined" 
                  label= "Pressure"
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
                      endAdornment: <InputAdornment position="end">PSI</InputAdornment>
                  }}  >
                </TextField>
              : null}
            </div>
        </div>
      ) 
    
}


export default withStyles(styles)(Spund);