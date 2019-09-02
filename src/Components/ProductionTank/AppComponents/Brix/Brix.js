import React from 'react';

import Time from '../SubComponents/Time';
import Number from '../SubComponents/Number';

import '../../../../App.css';

const Brix = (props) => {

    const brixAvg = props.runOffBrix.reduce((acc,brix,index) => acc+(brix-acc)/(index+1),0);
    
    const brixObj = {
        didUserSelect: props.selectBrix,
        fermentingBrix: props.fermentingBrix,
        runOffBrix: brixAvg,
        userInputBrix: props.userInputBrix
    }

    const displayBrix = (brix) => {
        if (brix.userInputBrix) {
            return brix.userInputBrix
        } else if(brix.didUserSelect) {
            return brix.userInputBrix
        } else if (brix.fermentingBrix.length) {
            return brix.fermentingBrix[brix.fermentingBrix.length-1].fermentingBrix
        } else if(brix.runOffBrix) {
            return brix.runOffBrix
        } else {
            return null
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
                    name= "userInputBrix"
                    id = "selectBrix"
                    label= "Brix"
                />
                <Time 
                    arrInput={props.fermentingBrix}
                    value="fermentingBrix"
                />
            </div>
        </div>
    )
}

export default Brix;