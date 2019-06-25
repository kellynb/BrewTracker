import React, {Component} from 'react';
import BrewView from './BrewView';
import {createNewBatch, addNewBrew, getBatch, updateBatch, fillFermenters, getLastSubmit, deleteBrew, deleteBatch} from './BrewFetch';

class BrewContainer extends Component {

    state = {
      number: '',
      prevNum: '',
      style: '',
      prevStyle: '',
      tank: '',
      prevTank: '',
      batch: 
          {id: "",
           prevId: "",
           strikeVolume: "",
           mashTemp: "",
           spargeVolume: "",
           startingBrix: "",
           kettleVolume: "",
           whirlPoolVolume: "",
           fmVolume: "",
           notes: '',
           enter: false,
           submit: false,
          }      
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
      const number = this.state.number;
      const batch = this.state.batch;
      const batchObj = {
        number: number,
        batch: batch,
      }
      updateBatch(batchObj)
      .catch(err => {
        console.error('Request failed', err)
      })
    }

    handleEnter = (e) => {
      e.preventDefault();
      this.setState({ 
        batch: {
            ...this.state.batch,
            enter: !this.state.enter
          }}, () => {
            const getData = this.state;
            if (this.state.prevNum === this.state.number) {
              // fetch call to update a brew with a new batch. There a multiple batches to a brew
              addNewBrew(getData);
            } else {
              // fetch call to create a new batch into a new brew
              createNewBatch(getData);
            }
            this.runInterval = setInterval(() => this.updateMetricData(),30000)
          });   
    }

    handleDelete = () => {
      const number = this.state.number;
      const id = this.state.batch.id;

      if(id === 'A') {
        clearInterval(this.runInterval);
        deleteBrew(number)
        this.setState({
          batch: {
            ...this.state.batch,
            strikeVolume: "",
            mashTemp: "",
            spargeVolume: "",
            startingBrix: "",
            kettleVolume: "",
            whirlPoolVolume: "",
            fmVolume: "",
            notes: '',
            enter: !this.state.batch.enter
          }
        })      
      } else {
        clearInterval(this.runInterval);
        deleteBatch(number,id);
        this.setState({
          number: "",
          style: "",
          tank: "",
          batch : {
            ...this.state.batch,
            strikeVolume: "",
            mashTemp: "",
            spargeVolume: "",
            startingBrix: "",
            kettleVolume: "",
            whirlPoolVolume: "",
            fmVolume: "",
            notes: '',
            id: "",
            enter: !this.state.batch.enter
          }
        })
      }
    }

    handleTransfer = () => {
      this.setState({
        batch: {
        ...this.state.batch,
        submit: !this.state.submit
        }}, () => {
        const id = this.state.number;
        const tank = this.state.tank;
        const style = this.state.style;
        const runOff = this.state.batch.submit
        const batch = this.state.batch;
        const batchObj = {
            number: id,
            batch: batch
        }
        const tankObj = {
            number: id,
            tank: tank,
            style: style,
            batch: batch.fmVolume,
            runOff: runOff
        }
        updateBatch(batchObj)
          .then(() => {
            fillFermenters(id, tankObj, batch.id)
              .then(() => {
                this.renderRedirect();
              });
          })
          .catch(err => {
            console.error('Request failed', err)
          })
        })      
    }

    componentWillUnmount = () => {
      clearInterval(this.runInterval);
    }

    // user get redirected to homepage after clicking on Runoff Button
    renderRedirect = () => {
        this.props.history.push('/')
    }

    // change data from componentdidmount fetch to "" instead of null
    changeNull = (data) => {
        const batchVal = data.batch[data.batch.length-1];
        
        for (let val in batchVal) {
          const values = batchVal[val]
          if (typeof values === 'object') {
            batchVal[val] = '';
          }
        }
        return data
    }
    // set state after fetch call with data from a batch where brewer is still entering information
    updateStateBatchBrewing = (data) => {
      const lastBatch = data.batch[data.batch.length-1];
      this.setState(
        {
          number: data.number,
          style: data.style,
          tank: data.tank,
          batch: {
            id: lastBatch.id,
            strikeVolume: lastBatch.strikeVolume,
            mashTemp: lastBatch.mashTemp,
            spargeVolume: lastBatch.spargeVolume,
            startingBrix: lastBatch.startingBrix,
            kettleVolume: lastBatch.kettleVolume,
            whirlPoolVolume: lastBatch.whirlPoolVolume,
            fmVolume: lastBatch.fmVolume,
            notes: lastBatch.notes,
            enter: lastBatch.enter,
            submit: lastBatch.submit
          }
        })
    }

    // set state after fetch call with data from a batch that has been finished a placed into a fermenter
    updateStateLastCompletedBrew = (data) => {
      const findLastSubmit = data;
      const batchArr = findLastSubmit.batch
      for(let i=batchArr.length-1; i >= 0; i--) {
        if (batchArr[i].submit === true) {
          return this.setState({
            prevNum: data.number,
            prevStyle: data.style,
            prevTank: data.tank,
            batch: {
              ...this.state.batch,
              prevId: batchArr[i].id
            }
          })
        } 
      }
    }

    inputBatchSequence = () => {
      getBatch()
          .then(data => {
            const brewIsEnterObj = data[0];      
            if (brewIsEnterObj !== undefined) {
                this.changeNull(brewIsEnterObj)
                this.updateStateBatchBrewing(brewIsEnterObj)
                getLastSubmit()
                  .then(lastBrewEnter => {
                    this.updateStateLastCompletedBrew(lastBrewEnter);
                  })
                  .then(() =>{
                    this.runInterval = setInterval(() => this.updateMetricData(),30000)
                  }).catch(err => {
                    console.error('Request failed', err)
                  })                          
              } else {
                // if last batch has runOff to fermenter get information from this batch for input options
                getLastSubmit()
                    .then(data => {
                        this.updateStateLastCompletedBrew(data);
                      })
                      .catch(err => {
                        console.error('Request failed', err)
                      });
              }
        })
        .catch(err => {
          console.error('Request failed', err)
        })
    }
  
    componentDidMount = () => {
       this.inputBatchSequence();
    }

    render () {
      return(
        <div>
            <BrewView 
              brewBatch={this.state} 
              handleBrewNumber={this.handleBrewNumber} 
              handleBatch={this.handleBatch} 
              handleEnter={this.handleEnter}
              handleTransfer={this.handleTransfer}
              handleDelete={this.handleDelete}
            />
        </div>
        )
    }
}

export default BrewContainer;