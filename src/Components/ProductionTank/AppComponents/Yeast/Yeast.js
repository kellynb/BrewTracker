import React from 'react';
import TextField from '@material-ui/core/TextField';
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

const YeastAction = (props) => {
    const {classes} = props;
//    CLean up
    const toDayMonthYearA = moment.utc(props.yeastDumpA).format('YYYY-MM-DD');
    const toDayMonthYearB = moment.utc(props.yeastDumpB).format('YYYY-MM-DD');

    const getValue1 = () => {
        if (props.yeastDump1) {
            return props.yeastDump1
        } else if (props.yeastDumpA) {
            return toDayMonthYearA
        } else {
            return null
        }
    }

    const getValue2 = () => {
        if (props.yeastDump2) {
            return props.yeastDump2
        } else if (props.yeastDumpB) {
            return toDayMonthYearB
        } else {
            return null
        }
    }

    return (
        <div className="fermentationData">
            <p>Yeast Removal</p>
            <div className = "organizeFermentation">
                <TextField
                    value={getValue1()}
                    onChange={props.userInput}
                    type= "date"
                    name = "yeastDump1"
                    className={classes.textField} 
                    variant="outlined" 
                    label= "Dump 1"
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
                    }}  >
                </TextField>
                <TextField
                    value={getValue2()}
                    onChange={props.userInput}
                    type= "date"
                    name = "yeastDump2"
                    className={classes.textField} 
                    variant="outlined" 
                    label= "Dump 2"
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
                    }}  >
                </TextField>
            </div>
        </div>
    )
}

export default withStyles(styles)(YeastAction);