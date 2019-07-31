import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
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

    const getTemperatureDays = () => {
        const currentDate = new Date();
        const currentTime = currentDate.getTime()
          
        if(props.temp.length === 1) {
            const lastDate = props.temp[props.temp.length-1].date
            const update = Date.parse(lastDate)
            const diffTime = currentTime - update;
            const diff = new moment.duration(diffTime);
            const days = diff.asDays();
            return (Math.round(days *100)/100);
        } else if (props.temp.length === 0) {
            return 0
        } else {
            for(let i=props.temp.length-1; i > -1; i-- ){
                let compareTemp = props.temp[i+1];
                if (compareTemp !== undefined) {
                  if (compareTemp.tankTemp !== props.temp[i].tankTemp) {
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

    const displayTemp = () => {
        if (props.tankTemp) {
            return props.tankTemp
        } else if (props.temp[props.temp.length-1]) {
            return props.temp[props.temp.length-1].tankTemp
        } else {
            return 0
        }
    }

    return (
        <div className="fermentationData">
            <p>Temperature</p>
            <div className = "organizeFermentation">
                <TextField
                    value={displayTemp()}
                    onChange={props.userInput}
                    type= "number"
                    name = "tankTemp"
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
            </div>
        </div>
    )
}

export default withStyles(styles)(TemperatureList);