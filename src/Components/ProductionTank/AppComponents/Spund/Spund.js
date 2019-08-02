import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { green } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import '../../../../App.css';


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
    }
})

const Spund = (props) => {
    const { classes } = props;
      return(
        <div className="fermentationData">
            <p>Fermentation Pressure</p>
            <div className="organizeFermentation">
              <FormControlLabel classes ={{root: classes.root}}
                  control={
                  <Switch
                      checked={props.spund}
                      onChange={props.spundInput}
                      value={props.spund}
                      name = "spund"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                  />
                  }
                  label="Spund"
              />
              {
              props.spund ?
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