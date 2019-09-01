import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

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
    const toDayMonthYear = moment.utc(props.reduxDate).format('YYYY-MM-DD');

    const getValue = () => {
        if (props.productionTankDate) {
            return props.productionTankDate
        } else if (props.reduxDate) {
            return toDayMonthYear
        } else {
            return null
        }
    }

    return (
        <TextField
            value={getValue()}
            onChange={props.onChange}
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