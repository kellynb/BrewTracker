import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

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
          fontWeight: 'bold',
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
          borderColor: '#424242',
        },
      },

      notchedOutline: {
      },
  });

const Time = (props) => {
    const {classes} = props;
    
    const getTemperatureDays = (arr) => {
        const currentDate = new Date();
        const currentTime = currentDate.getTime()
          
        if(arr.length === 1) {
            const lastDate = arr[arr.length-1].date
            const update = Date.parse(lastDate)
            const diffTime = currentTime - update;
            const diff = new moment.duration(diffTime);
            const days = diff.asDays();
            return (Math.round(days *100)/100);
        } else if (arr.length === 0) {
            return 0
        } else {
            for(let i=arr.length-1; i > -1; i-- ){
                let compareValue = arr[i+1];
                if (compareValue !== undefined) {
                  if (compareValue[props.value] !== arr[i][props.value]) {
                    const getChangeDate = compareValue.date;
                    const updateDate = Date.parse(getChangeDate);
                    const timeDiff = currentTime - updateDate;
                    const diff = new moment.duration(timeDiff)
                    const days = diff.asDays();
                    return (Math.round(days *100)/100);
                    }
                }
            }
          
        }
          
    }

    return (
        <TextField
            value={getTemperatureDays(props.arrInput)}
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
    )
}

export default withStyles(styles)(Time);