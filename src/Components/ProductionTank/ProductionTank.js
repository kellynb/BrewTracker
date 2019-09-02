import React, { Component } from 'react';

import AppBar from './AppComponents/AppBar/AppBarContainer';
import Button from './AppComponents/SubComponents/Button';
import Brix from './AppComponents/Brix/Brix';
import CIP from './AppComponents/CIP/CIPContainer';
import FermenterIcon from './FermenterIcon/FermenterIcon';
import Nav from '../Nav/Nav';
import Sanitize from './AppComponents/Sanitize/SanitizeContaner';
import Spund from './AppComponents/Spund/SpundContainer';
import TemperatureList from './AppComponents/Temperature/Temperature';
import Yeast from './AppComponents/Yeast/YeastContainer';

import {updateFermentation, clearFermenter} from './ProductionFetch';

import '../../App.css';

class ProductionTank extends Component  {
    state = this.props.currentState
    // state = {
        
    //     // status: "",
    //     // tankTemp: "",
    //     // fermentingBrix:"",
    //     // spund: false,
    //     // spundPressure: "",
    //     // yeastDump1: "",
    //     // yeastDump2: "",
    //     // cip1: "",
    //     // cip2: "",
    //     // clean: false,
    //     // select: false,
    //     // selectBrix: false,
    //     // selectClean: 0,
    //     // selectSanitize: 0,
    //     // selectSpund: 0,
    //     // selectPSI: false,
    //     // sanitize: false,
    //     // sanitizeSelect: false,
    //     // ppm: ""
    // }


    userInput = (e) => {
        const selectName = e.target.name;
        this.setState({
            [selectName]: e.target.value
        })
    }

    switchToggle = (e) => {
        const selectName = e.target.name

        this.setState({
            [selectName] : !this.state[selectName]
        })
        // conditional rendering of spund toggle
        // if(selectName === 'spund' && this.props.reduxSpund && !this.state.spund && this.state.selectSpund === 0) {
        //     this.setState({spund: false})
        //     this.changeToggleSelect(e) 
        // } else if (selectName === 'clean' && this.props.reduxClean && !this.state.clean && this.state.selectClean === 0) {
        //     this.setState({clean: false}, () => {
        //         this.setState({
        //             status: "dirty"
        //         }) 
        //     })
        //     this.changeToggleSelect(e)
        // } else if(selectName === 'sanitize' && this.props.reduxSanitize && !this.state.sanitize && this.state.selectSanitize === 0) {
        //     this.setState({sanitize: false}, () => {
        //         this.setState({
        //             status: "clean"
        //         }) 
        //     })
        //     this.changeToggleSelect(e) 
        // } else {
        //     this.setState({
        //         [selectName] : !this.state[selectName]
        //     }, () => {
        //         this.changeStatus();  
        //     })
        //     this.changeToggleSelect(e) 
        // }              
    }

    changeStatus = () => {
        if (this.state.sanitize) {
            this.setState({
                status: "sanitize"
            })
        } else if (this.state.clean || (this.props.reduxClean && !this.state.selectClean) && !this.props.reduxRunOff) {
            this.setState({
                status: "clean"
            })
        } else if(!this.props.reduxRunOff) {
            this.setState({
                status: "dirty"
            })
        }
    }

    statusUpdate = (value) => {
        this.setState({
            status: value
        })
    }

    changeSelect = (e) => {
        const selectName = e.target.id;
        this.setState({
            [selectName]: !this.state[selectName]
        })
    }

    changeToggleSelect = (e) => {
        const selectName = e.target.id;
        this.setState({
            [selectName]: this.state[selectName] +1
        })
    }

    renderRedirect = () => {
        this.props.history.push('/')
    }

    // transfer beer to brite tank, then redirect to main page
    handleTransfer = () => {
        const getParams = this.props.match.params;
        const tankObj = {
            tank: getParams.tank,
            runOff: false,
            status: "dirty"
        }
        console.log(tankObj)
        clearFermenter(getParams.tank, this.props.number, tankObj)
            .then (() => {
                this.renderRedirect()
            })
            .catch(err => {
                console.error('Request failed', err)
            })
    }

    sendUpdate = () => {
        const tankObj= {};
        const loopState = Object.entries(this.state);
        for (const [key, value] of loopState) {
            if (value && (key === 'tankTemp' || key === 'fermentingBrix')) {
                tankObj[key] = {
                    [key]: value,
                    date: new Date()
                }
            } else if (!value && 
                     ((key === 'clean' && this.state.selectClean) 
                     || (key === 'spund' && this.state.selectSpund)
                     || (key === 'sanitize' && this.state.selectSanitize))) 
            {
                  tankObj[key] = this.state[key]
            } else if(value && key !== 'selectSpund' && key !== 'selectClean' && key !== 'selectSanitize') {
                tankObj[key] = value;
            }
        }
        console.log(tankObj)
        // fetch to update fermentation tank then redirect to homepage
        updateFermentation(tankObj,this.props.tank,this.props.number)
            .then(() => {
                this.renderRedirect()
            })
            .catch(err => {
                console.error('Request failed', err)
            })
    }


    componentDidMount = () => {
                
        const getTankParams = this.props.match.params;
        
        if (!this.state.tank) {
          this.props.setTank(getTankParams.tank)
            .then(() => {
              this.setState(this.props.currentState);
            })
            .catch(err => {
              console.error("Request failed", err);
            });
        }
    }
    
    
    render () {
       
        return (
          <main>
            <div>
              <Nav />
              {this.state.tank ? (
                <div id="fermentationBox">
                  <FermenterIcon componentStatus={this.state.status} />
                  <section id="fermentationFormBox">
                    <div id="fermentationForm">
                      <AppBar
                        batchStatus={this.state.status}
                        statusUpdate={this.statusUpdate}
                      />
                      {this.state.status === "conditioning" ? (
                       this.state.status === "fermenting" ||
                        <div>
                          <TemperatureList
                            changeSelect={this.changeSelect}
                            select={this.state.tankSelect}
                            tankTemp={this.state.tankTemp}
                            temp={this.state.temp}
                            userInput={this.userInput}
                          />
                          {this.state.status === "fermenting" ? (
                            <Brix
                              changeBrix={this.changeSelect}
                              fermentingBrix={this.state.fermentingBrix}
                              runOffBrix={this.state.brix}
                              selectBrix={this.state.selectBrix}
                              userInputBrix={this.state.userInputBrix}
                              userInput={this.userInput}
                            />
                          ) : (
                            <Yeast
                              userInput={this.userInput}
                              yeastDump2={this.state.yeastDump2}
                              yeastDump1={this.state.yeastDump1}
                            />
                          )}
                          <Spund
                            spund={this.state.spund}
                            spundPressure={this.state.spundPressure}
                            toggle={this.switchToggle}
                            userInput={this.userInput}
                          />
                          <div
                            className="fermentationData"
                            id="fermentationSave"
                          >
                            <Button
                              words="Save Updates"
                              id="saveButton"
                              onClick={this.sendUpdate}
                            />
                            {/* {this.state.yeastDump2 || this.props.yeast2 
                                                        ?
                                                        <Button
                                                            words="Tranfer to Brite"
                                                            id="transferButton"
                                                            onClick = {this.handleTransfer}
                                                        />
                                                        :
                                                        null
                                                    } */}
                          </div>
                        </div>
                      ) : (
                        <div>
                          {this.props.status === "dirty" ||
                          this.props.status === "clean" ||
                          this.props.status === "sanitize" ? (
                            <div>
                              <CIP
                                userInput={this.userInput}
                                productionTankDateB={this.state.cip2}
                                productionTankDateA={this.state.cip1}
                                clean={this.state.clean}
                                toggle={this.switchToggle}
                                selectClean={this.state.selectClean}
                              />
                              {this.state.clean ||
                              (this.props.reduxClean &&
                                !this.state.selectClean) ? (
                                <Sanitize
                                  sanitize={this.state.sanitize}
                                  sanitizeDate={this.state.sanitizeDate}
                                  toggle={this.switchToggle}
                                  userInput={this.userInput}
                                  changeSanitize={this.changeSelect}
                                  selectSanitize={this.state.selectSanitize}
                                  sanitizeSelect={this.state.sanitizeSelect}
                                  ppm={this.state.ppm}
                                />
                              ) : null}
                              <div
                                className="fermentationData"
                                id="fermentationSave"
                              >
                                <Button
                                  words="Save Updates"
                                  id="saveButton"
                                  onClick={this.sendUpdate}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              ) : null}
            </div>
          </main>
        );      
    }
    
    
}

export default ProductionTank;