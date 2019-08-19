import React from 'react';

import Time from '../SubComponents/Time';
import Number from '../SubComponents/Number';

import '../../../../App.css';

const Brix = (props) => {
    const brixAvg = props.brix.reduce((acc,brix,index) => acc+(brix-acc)/(index+1),0);
    const brixObj = {
        reduxFermBrix: props.fBrix,
        reduxRunBrix: props.brix,
        runOffBrixAvg: brixAvg,
        userAddedBrix: props.selectBrix,
        componentFermBrix: props.fermentingBrix
    }

    const displayBrix = (brix) => {
        if (brix.componentFermBrix) {
            return brix.componentFermBrix
        } else if(brix.userAddedBrix) {
            return brix.componentFermBrix
        } else if (brix.reduxFermBrix[brix.reduxFermBrix.length-1]) {
            return brix.reduxFermBrix[brix.reduxFermBrix.length-1].fermentingBrix
        } else if(brix.reduxRunBrix.length > 0) {
            return brix.runOffBrixAvg
        } else {
            return 0
        }
    }

    return (
        <div className="fermentationData">
            <p>Brix</p>
            <div className = "organizeFermentation">
                <Number 
                    valueCalc={displayBrix(brixObj)}
                    onChange = {props.userInput}
                    measurement = ""
                    changeSelect={props.changeBrix}
                    name= "fermentingBrix"
                    id = "selectBrix"
                    label= "Brix"
                />
                <Time 
                    arrInput={props.fBrix}
                    value="fermentingBrix"
                />
            </div>
        </div>
    )
}

export default Brix;