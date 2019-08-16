import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import FermenterIcon from './FermenterIcon/FermenterIconContainer';
import AppBar from './AppComponents/AppBar/AppBarContainer';
import TemperatureList from './AppComponents/Temperature/TemparatureContainer';
import Spund from './AppComponents/Spund/Spund';
import Yeast from './AppComponents/Yeast/YeastContainer';
import Brix from './AppComponents/Brix/BrixContainer';
import Save from './AppComponents/Save/Save';
import CIP from './AppComponents/CIP/CIP';
import TransferBrite from './AppComponents/TransferBrite/TransferBrite';
import {updateFermentation, clearFermenter} from './ProductionFetch';
import '../../App.css';


class ProductionTank extends Component  {
    state = {
        status: "",
        tankTemp: "",
        fermentingBrix:"",
        spund: false,
        spundPressure: "",
        yeastDump1: "",
        yeastDump2: "",
        cip1: "",
        cip2: "",
        clean: false,
        select: false,
        selectBrix: false
    }

    userInput = (e) => {
        const selectName = e.target.name;
        this.setState({
            [selectName]: e.target.value
        })
    }

    spundInput = () => {
        this.setState({
            spund: !this.state.spund
        })
    }

    switchToggle = (e) => {
        const selectName = e.target.name
        this.setState({
            [selectName] : !this.state[selectName]
        })
        
    }

    statusUpdate = (value) => {
        this.setState({
            status: value
        })
    }

    changeSelect = () => {
        this.setState({
            select: !this.state.select
        })
    }

    changeBrix = () => {
        this.setState({
            selectBrix: !this.state.selectBrix
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
            } else if(value) {
                tankObj[key] = value;
            }
            
        }
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
        if(this.props.tank) {
            this.setState({
                spund: this.props.close,
                spundPressure: this.props.pressure
            })
        } else {
            // fetch current tank from url params and update store
            const getTankParams = this.props.match.params;
                this.props.setTank(getTankParams.tank)
                .then (() => {
                    this.setState({
                        spund: this.props.close,
                        spundPressure: this.props.pressure
                    })
                })
                .catch(err => {
                    console.error('Request failed', err)
                });
        }
        
        
    }
    
    
    render () {
        return (
            <main>
                {this.props.tank 
                    ?
                    <div>
                        <Nav />
                            <div id="fermentationBox">
                                <FermenterIcon/>
                                <section id = "fermentationForm">
                                    <div>
                                        <AppBar statusUpdate={this.statusUpdate}/>
                                        {this.props.status === 'fermenting' || this.props.status === 'conditioning'
                                            ?
                                            <div>
                                                <TemperatureList 
                                                    userInput={this.userInput} 
                                                    tankTemp={this.state.tankTemp}
                                                    changeSelect={this.changeSelect}
                                                    select={this.state.select} 
                                                />
                                                {this.props.status === 'fermenting' ? 
                                                    <Brix 
                                                        userInput={this.userInput} 
                                                        fermentingBrix={this.state.fermentingBrix}
                                                        changeBrix={this.changeBrix}
                                                        selectBrix={this.state.selectBrix} 
                                                    /> 
                                                    : 
                                                    <Yeast 
                                                        userInput={this.userInput} 
                                                        yeastDump2 = {this.state.yeastDump2} 
                                                        yeastDump1 = {this.state.yeastDump1}
                                                    />
                                                }
                                                <Spund 
                                                    toggle={this.switchToggle} 
                                                    spund={this.state.spund} 
                                                    spundPressure={this.state.spundPressure}
                                                    userInput={this.userInput}
                                                />
                                                <div className="fermentationData" id="fermentationSave">
                                                    <Save sendUpdate={this.sendUpdate}/>
                                                    {this.state.yeastDump2 || this.props.yeast2 
                                                        ?
                                                        <TransferBrite handleTransfer={this.handleTransfer} />
                                                        :
                                                        null
                                                    }
                                                </div>
                                            </div>
                                            :
                                            <div>
                                                {this.props.status === 'dirty'
                                                    ?
                                                    <CIP 
                                                        userInput={this.userInput} 
                                                        productionTankDateB = {this.state.cip2} 
                                                        productionTankDateA = {this.state.cip1}
                                                        clean = {this.state.clean}
                                                        toggle={this.switchToggle}
                                                    />
                                                    :
                                                    null
                                                }
                                            </div>
                                        }
                                    </div>
                                </section>
                            </div>
                        </div>
                    :
                <Nav/>                
            }
        </main>
        )      
    }
    
    
}

export default ProductionTank;