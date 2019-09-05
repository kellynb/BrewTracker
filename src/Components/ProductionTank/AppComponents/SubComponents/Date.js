import React from 'react';


import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: '#d1d0bb',
        maxWidth: '175'
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

  const Date = (props) => {
    const {classes} = props;
    
   const getDate = (inputDate,select) => {
    if (inputDate && select) {
      return inputDate
    } else if (inputDate && !select)  {
      props.updateDate(props.name, inputDate)
    } else {
      return inputDate
    }
  }
  
    

    return (
        <TextField
            value={getDate(props.productionTankDate,props.select)}
            id = {props.id}
            onChange={props.onChange}
            onFocus ={props.changeSelect}
            type= "date"
            name = {props.name}
            className={classes.textField} 
            variant="outlined" 
            label= {props.label}
            margin="normal"
            InputLabelProps={{
                shrink: true
            }} 
            InputProps={{classes: 
                { root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
                }
            }}  
        >
        </TextField>
    )

  }

  export default withStyles(styles)(Date);