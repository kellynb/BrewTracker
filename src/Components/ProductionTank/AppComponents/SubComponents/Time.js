import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

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

const Time = (props) => {
    const {classes} = props;

    const getTemperatureDays = () => {
        const currentDate = new Date();
        const currentTime = currentDate.getTime()
          
        if(props.arrInput.length === 1) {
            const lastDate = props.arrInput[props.arrInput.length-1].date
            const update = Date.parse(lastDate)
            const diffTime = currentTime - update;
            const diff = new moment.duration(diffTime);
            const days = diff.asDays();
            return (Math.round(days *100)/100);
        } else if (props.arrInput.length === 0) {
            return 0
        } else {
            for(let i=props.arrInput.length-1; i > -1; i-- ){
                let compareTemp = props.arrInput[i+1];
                if (compareTemp !== undefined) {
                  if (compareTemp[props.value] !== props.arrInput[i][props.value]) {
                    const getChangeDate = compareTemp.date;
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
            value={getTemperatureDays()}
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