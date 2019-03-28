import '../../../App.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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

 

  const StyleBatch = (props) => {
    const {classes} = props;

    const inputNames = ['Brew Number', 'Brew Letter', 'Style', 'Tank'];

    const inputs = [
        <input type="number" name="number" value={props.brewBatch.number} onChange={props.handleBrewNumber}>
        </input>,
        <input type="text" name="id" value={props.brewBatch.batch.id}  onChange={props.handleBatch}>
        </input>,
        <input type="text"  name="style" value={props.brewBatch.style}  onChange={props.handleBrewNumber}>
        </input>,
        <input type="text"  name="tank" value={props.brewBatch.tank}  onChange={props.handleBrewNumber}>
        </input>
      ];

    return (
        inputs.map( (input,index) =>
            <TextField
                key ={index} 
                className={classes.textField} 
                variant="outlined" 
                label= {inputNames[index]}
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
                      input: classes.input
                    }
                }} >{input}
             </TextField>
             )
        )

  }

  export default withStyles(styles)(StyleBatch);