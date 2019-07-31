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

const Brix = (props) => {
    const {classes} = props;
    const brixAvg = props.brix.reduce((acc,brix,index) => acc+(brix-acc)/(index+1),0);

    const getBrixDays = () => {
        const currentDate = new Date();
        const currentTime = currentDate.getTime()
          
        if(props.fBrix.length === 1) {
            const lastDate = props.fBrix[props.fBrix.length-1].date
            const update = Date.parse(lastDate)
            const diffTime = currentTime - update;
            const diff = new moment.duration(diffTime);
            const days = diff.asDays();
            return (Math.round(days *100)/100);
        } else if (props.fBrix.length === 0) {
            return 0
        } else {
            for(let i=props.fBrix.length-1; i > -1; i-- ){
                let compareTemp = props.fBrix[i+1];
                if (compareTemp !== undefined) {
                  if (compareTemp.fBrix !== props.fBrix[i].fermentingBrix) {
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

    const displayBrix = () => {
        if (props.fermentingBrix) {
            return props.fermentingBrix
        } else if (props.fBrix[props.fBrix.length-1]) {
            return props.fBrix[props.fBrix.length-1].fermentingBrix
        } else if(props.brix.length > 0) {
            return brixAvg
        } else {
            return 0
        }
    }

    return (
        <div className="fermentationData">
            <p>Brix</p>
            <div className = "organizeFermentation">
                <TextField
                    value={displayBrix()}
                    onChange={props.userInput}
                    type= "number"
                    name = "fermentingBrix"
                    className={classes.textField} 
                    variant="outlined" 
                    label= "Brix"
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
                        }
                    }}  >
                </TextField>
                <TextField
                    value={getBrixDays()}
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

export default withStyles(styles)(Brix);