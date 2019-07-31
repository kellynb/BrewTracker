import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import FermenterIcon from './FermenterIcon/FermenterIconContainer';
import AppBar from './AppComponents/AppBar/AppBarContainer';
import TemperatureList from './AppComponents/Temperature/TemparatureContainer';
import Spund from './AppComponents/Spund/Spund';
import Yeast from './AppComponents/Yeast/Yeast';
import Brix from './AppComponents/Brix/BrixContainer';
import Save from './AppComponents/Save/Save';
import {updateFermentation} from './ProductionFetch';
import '../../App.css';


class ProductionTank extends Component  {
    state = {
        status: "",
        tankTemp: "",
        fermentingBrix:"",
        spund: false,
        spundPressure: "",
        yeastDump1: "",
        yeastDump2: ""
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

    statusUpdate = (value) => {
        this.setState({
            status: value
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
        
        updateFermentation(tankObj,this.props.tank,this.props.number) 
        
    }
    
    
    render () {
        return (
            <main>
            <Nav />
            <section className='fermentationBackground'>
                <div id="fermentationBox">
                    <section id="fermentationVisuals">
                        <FermenterIcon />
                    </section>
                    <section id = "fermentationForm">
                        <div>
                            <AppBar statusUpdate={this.statusUpdate}/>
                                <div>
                                    <TemperatureList 
                                        userInput={this.userInput} 
                                        tankTemp={this.state.tankTemp} 
                                    />
                                    {this.props.status === 'fermenting' ? 
                                        <Brix 
                                            userInput={this.userInput} 
                                            fermentingBrix={this.state.fermentingBrix}
                                        /> 
                                        : 
                                        <Yeast 
                                            userInput={this.userInput} 
                                            yeastDump2 = {this.state.yeastDump2} 
                                            yeastDump1 = {this.state.yeastDump1}
                                        />
                                    }
                                    <Spund 
                                        spundInput={this.spundInput} 
                                        spund={this.state.spund} 
                                        spundPressure={this.state.spundPressure}
                                        userInput={this.userInput}
                                    />
                                </div>
                                <Save sendUpdate={this.sendUpdate}/>
                        </div>
                    </section>
                </div>
            </section>
        </main>
        )      
    }
    
    
}

export default ProductionTank;