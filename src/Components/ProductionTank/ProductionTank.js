import React, { Component } from 'react';


import AppBar from './AppComponents/AppBar/AppBar';
import Button from './AppComponents/SubComponents/Button';
import Brix from './AppComponents/Brix/Brix';
import CIP from './AppComponents/CIP/CIP';     
import FermenterIcon from './FermenterIcon/FermenterIcon';
import Nav from '../Nav/Nav';
import Sanitize from './AppComponents/Sanitize/Sanitze';
import Spund from './AppComponents/Spund/Spund';
import TemperatureList from './AppComponents/Temperature/Temperature';
import Yeast from './AppComponents/Yeast/Yeast';

import {updateFermentation, clearFermenter} from './ProductionFetch';

import '../../App.css';

class ProductionTank extends Component  {
    state = this.props.currentState;

    userInput = (e) => {
        const selectName = e.target.name;
        this.setState({
            [selectName]: e.target.value
        })
    }

    switchToggle = (e) => {
        const selectName = e.target.name

        if (selectName === 'spund') {
          this.setState({
            [selectName] : !this.state[selectName]
          })
         } else {
          this.setState({
            [selectName] : !this.state[selectName]
          },
          () => {
            this.changeStatus(selectName);
          })
        }
    }             
    // For this to work, need previous status stored in the database
    changeStatus = (currentStatus) => {
      const previousStatus = this.state.status;

      if (this.state[currentStatus]) {
        this.setState({
          prevStatus: previousStatus,
          status: currentStatus
        })
      } else {
        this.setState({
          status: this.state.prevStatus
        })
      }
    }

    changeSelect = (e) => {
        const selectName = e.target.id;
        this.setState({
            [selectName]: !this.state[selectName]
        })
    }

    selectDate = (e) => {
      const selectName = e.target.id;
      this.setState({
          [selectName]: true
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
            prevStatus: "dirty",
            status: "dirty"
        }
        
        clearFermenter(getParams.tank, this.state.number, tankObj)
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
            } else if
              (value && (
               key !== 'fBrix' 
               && key !== 'temp' 
               && key !== 'tank'
               && key !== 'number'
               && key !== 'brix' 
              )) {
                tankObj[key] = value;
            }
        }
        
        // fetch to update fermentation tank then redirect to homepage
        updateFermentation(tankObj,this.state.tank,this.state.number)
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
                        tank={this.state.tank}
                      />
                      {this.state.status === "conditioning" ||
                      this.state.status === "fermenting" ? (
                        <div>
                          <TemperatureList
                            changeSelect={this.changeSelect}
                            conditioning={this.state.conditioning}
                            select={this.state.tankSelect}
                            tankTemp={this.state.tankTemp}
                            temp={this.state.temp}
                            toggle={this.switchToggle}
                            userInput={this.userInput}
                          />
                          {this.state.status === "fermenting" ? (
                            <Brix
                              changeBrix={this.changeSelect}
                              fBrix={this.state.fBrix}
                              runOffBrix={this.state.brix}
                              selectBrix={this.state.selectBrix}
                              fermentingBrix={this.state.fermentingBrix}
                              userInput={this.userInput}
                            />
                          ) : (
                            // Can't figure out why component goes from controlled to uncontrolled
                            // Might need to change where moment is called
                            <Yeast
                              changeSelect={this.selectDate}
                              select1={this.state.yeastSelect1}
                              select2={this.state.yeastSelect2}
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
                            {this.state.yeastDump2 ? (
                              <Button
                                words="Tranfer to Brite"
                                id="transferButton"
                                onClick={this.handleTransfer}
                              />
                            ) : null}
                          </div>
                        </div>
                      ) : (
                        <div>
                          {this.state.status === "dirty" ||
                          this.state.status === "clean" ||
                          this.state.status === "sanitize" ? (
                            <div>
                              <CIP
                                changeSelect={this.selectDate}
                                cipDate1={this.state.cip1}
                                cipDate2={this.state.cip2}
                                clean={this.state.clean}
                                select1={this.state.clean1}
                                select2={this.state.clean2}
                                status={this.state.status}
                                toggle={this.switchToggle}
                                userInput={this.userInput}
                              />
                              {this.state.clean ? (
                                <Sanitize
                                  ppm={this.state.ppm}
                                  sanitize={this.state.sanitize}
                                  toggle={this.switchToggle}
                                  userInput={this.userInput}
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