import '../../../App.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    formControl: {
      margin: theme.spacing.unit,
    },
    
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        backgroundColor: '#d1d0bb',
      },
    
    input: {
        color: '#5c4925',
        fontSize: 15
    },

      cssLabel: {
        '&$cssFocused': {
          color: '#5c4925',
          fontWeight: 'bold',
          fontSize: 15
        },
      },
      cssFocused: {
      },
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
    const previousBatch = props.brewBatch.prevNum;
    const batchNum = props.brewBatch.number;
    const batchEnter = props.brewBatch.batch.enter;



    const userNumberOptions = () => {
      if (previousBatch && props.brewBatch.batch.prevId !== 'D') {
        const numOptions = [previousBatch, previousBatch+1];
        return numOptions
      } else if (previousBatch && props.brewBatch.batch.prevId === 'D') {
        return [previousBatch+1]
      } else if (!previousBatch && batchNum) {
        const num = [batchNum];
        return num
      } else {
        return [1];
      }
    }

    const userIdOptions = () => {
      if(previousBatch === batchNum) {
          const getLastId = props.brewBatch.batch.prevId;
          const toChar = getLastId.charCodeAt(0)
          const optionArr = [];

          for(let i=toChar+1; i<69; i++) {
              optionArr.push(i);
          }

          const letterOptions = optionArr.map ( num => {
              return String.fromCharCode(num)
          })

          return letterOptions;
      } else if (previousBatch !== batchNum && !batchEnter) {
         let optionB = [];
         return optionB=['A'];
      } else if(batchEnter) {
         let optionC = [];
        return optionC = [props.brewBatch.batch.id]
      } else {
        let optionD = [];
        return optionD=[batchNum];
      }
    }

    const styleOptions = () => {
      let style = ['Goat', 'BucketHead', 'Dillo', 'Pailhead', 'Specialty']
      const currentStyle = [props.brewBatch.style]
      if (previousBatch === batchNum) {
        style = [props.brewBatch.prevStyle];
        return style
      } else if (previousBatch !== batchNum && previousBatch === '') {
        return currentStyle
      } else {
        return style
      }
    }

    const tankOptions = () => {
      let tanks = props.emptyTanks;
      const currentTank = [props.brewBatch.tank];
      let tank = ["C2", "C3", "C4", "C5", "C6", "C7"]
      if (previousBatch === batchNum) {
        tank = [props.brewBatch.prevTank];
        return tank
      } else if (previousBatch !== batchNum && previousBatch !== '') {
        return tanks
      } else if (previousBatch !== batchNum && previousBatch === '') {
        return currentTank
      } else {
        return tank
      }
    }

    const inputNames = ['Brew Number', 'Brew Letter', 'Style', 'Tank'];

    const inputs = [
        {
          name:"number",
          value: batchNum,
          onChange: props.handleBrewNumber,
          options: userNumberOptions()
        },
        {
          name:"id",
          value: props.brewBatch.batch.id,
          onChange: props.handleBatch,
          options: userIdOptions()
        },
        {
          name:"style",
          value: props.brewBatch.style,
          onChange: props.handleBrewNumber,
          options: styleOptions()
        },
        {
          name:"tank",
          value: props.brewBatch.tank,
          onChange: props.handleBrewNumber,
          options: tankOptions()
        }
      ];

      

    return (
      inputs.map((input,index) =>
            <TextField
                select
                value={input.value}
                onChange={input.onChange}
                name = {input.name}
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
                      input: classes.input,
                    },
                    readOnly: batchEnter
                  }}  > 

                  {input.options 
                    ? 
                      input.options.map( (option, index) =>
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                        )
                  : null}
              </TextField>
              
          )
        )

  }

  export default withStyles(styles)(StyleBatch);

  