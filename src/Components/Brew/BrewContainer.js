import React, {Component} from 'react';
import BrewView from './BrewView';
import {enterBatch, getBatch, updateBatch} from './BrewFetch';

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
      enter: false,
      submit: false,
    }

    // stores the setInterval value
    runInterval = 0;
    
      
    handleBrewNumber = (e) => {
      const name = e.target.name;
      const val = e.target.value;

      this.setState({ [name]: val });
    }

    handleBatch = (e) => {
      const { batch } = { ...this.state };
      const currentState = batch;
      const name = e.target.name;
      currentState[name] = e.target.value

      this.setState({ batch: currentState});

    }

    updateMetricData = () => {
      const id = this.state.number;
      const batch = this.state.batch;
      const turnOff = this.state.submit;
      const batchObj = {
        number: id,
        batch: batch,
        submit: turnOff
      }
      updateBatch(id, batchObj)
    }

    handleEnter = (e) => {
      e.preventDefault();
      const getData = this.state;
      enterBatch(getData);
      this.setState({ enter: !this.state.enter}, () => {
        this.runInterval = setInterval(() => this.updateMetricData(),30000)
      });   
      
    }

    handleTransfer = (e) => {
      this.setState({submit: !this.state.submit}, () => {
        clearInterval(this.runInterval);
        const id = this.state.number;
        const batch = this.state.batch;
        const turnOff = this.state.submit;
        const batchObj = {
            number: id,
            batch: batch,
            submit: turnOff
        }
        updateBatch(id, batchObj)
        this.renderRedirect();
        })      
    }

    // user get redirected to homepage after clicking on Runoff Button
    renderRedirect = () => {
        this.props.history.push('/')
    }
  
    // componentDidMount = () => {
    //   getBatch();
    // }

    render () {
      return(
        <div>
            <BrewView 
              brewBatch={this.state} 
              handleBrewNumber={this.handleBrewNumber} 
              handleBatch={this.handleBatch} 
              handleEnter={this.handleEnter}
              handleTransfer={this.handleTransfer}
            />
        </div>
        )
    }
}

export default BrewContainer;