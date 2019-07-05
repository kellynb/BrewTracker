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

  const BrewMetricsStyle = (props) => {
    const {classes} = props;

    const inputNames = ['Strike Volume', 'Mash Temp', 'Sparge Volume', 
                        'Kettle Brix', 'Kettle Volume', 'Whirlpool Volume',
                        'Flow Meter Volume','Run Off Temperature', 'Fermenter Temperature', 'Notes'];

    const inputs = [
      {
        type: "number", 
        name:"strikeVolume",
        value: props.brewBatch.batch.strikeVolume,
        onChange: props.handleBatch
      },
      {
        type: "number", 
        name:"mashTemp",
        value: props.brewBatch.batch.mashTemp,
        onChange: props.handleBatch
      },
      {
        type: "number", 
        name:"spargeVolume",
        value: props.brewBatch.batch.spargeVolume,
        onChange: props.handleBatch
      },
      {
        type: "number", 
        name:"startingBrix",
        value: props.brewBatch.batch.startingBrix,
        onChange: props.handleBatch
      },
      {
        type: "number", 
        name:"kettleVolume",
        value: props.brewBatch.batch.kettleVolume,
        onChange: props.handleBatch
      },
      {
        type: "number", 
        name:"whirlPoolVolume",
        value: props.brewBatch.batch.whirlPoolVolume,
        onChange: props.handleBatch
      },
      {
        type: "number", 
        name:"fmVolume",
        value: props.brewBatch.batch.fmVolume,
        onChange: props.handleBatch,
        required: true
      },
      {
        type: "number", 
        name:"runOffTemp",
        value: props.brewBatch.batch.runOffTemp,
        onChange: props.handleBatch,
        required: true
      },
      {
        type: "number", 
        name: "tankTemp",
        value: props.brewBatch.batch.tankTemp,
        onChange: props.handleBatch,
        required: true
      },
      {
        type: "text", 
        name:"notes",
        value: props.brewBatch.batch.notes,
        onChange: props.handleBatch
      }
    ];

    return (
      inputs.map((input,index) =>
        <TextField
            value={input.value}
            onChange={input.onChange}
            type= {input.type}
            name = {input.name}
            key ={index} 
            className={classes.textField} 
            variant="outlined" 
            label= {inputNames[index]}
            margin="normal"
            required = {input.required}
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
          }}  >
        </TextField>
      )
    )

}





  export default withStyles(styles)(BrewMetricsStyle);