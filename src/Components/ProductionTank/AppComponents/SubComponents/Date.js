import React from 'react';

import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: '#EEEEEE',
        width: '175px'
      },
    
    input: {
        color: '#424242',
        width: 'auto'
    },

    cssLabel: {
        '&$cssFocused': {
          color: '#424242',
          fontSize: 15
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
          borderBottomColor: '#424242',
        },
      },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: 'black',
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
      // should i setstate and change this since im technically changing state
      const toDayMonthYear = moment.utc(inputDate).format('YYYY-MM-DD');
      return toDayMonthYear;
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