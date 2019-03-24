import React, {Component} from 'react';
import BrewView from './BrewView';
import {enterBatch} from './BrewFetch';

class BrewContainer extends Component {

    state = {
      number: undefined,
      style: '',
      tank: '',
      batch: 
          {id: "",
           strikeVolume: "",
           mashTemp: "",
           spargeVolume: "",
           startingBrix: "",
           kettleVolume: "",
           whirlPoolVolume: "",
           fmVolume: "",
           notes: ''
          },
      enter: false
    }
    
      
        handleBrewNumber = (e) => {
          const name =  e.target.name;
          const val = e.target.value;

          this.setState({[name]: val});
        }

        handleBatch = (e) => {
          const {batch} = {...this.state};
          const currentState = batch;
          const name =  e.target.name;
          currentState[name] = e.target.value

          this.setState({batch: currentState});
                
        }

        handleEnter = (e) => {
          e.preventDefault();
          const getData =  this.state;
          this.setState({enter: !this.state.enter});
          enterBatch(getData);
        }
      


    render () {
      return(
            <BrewView brewBatch={this.state} handleBrewNumber={this.handleBrewNumber} handleBatch={this.handleBatch} handleEnter={this.handleEnter}/>
        )
    }
}

export default BrewContainer;