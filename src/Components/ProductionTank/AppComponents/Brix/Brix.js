import React from 'react';

import Time from '../SubComponents/Time';
import Number from '../SubComponents/Number';

import '../../../../App.css';

const Brix = (props) => {

    const brixAvg = props.runOffBrix.reduce((acc,brix,index) => acc+(brix-acc)/(index+1),0);
    
    const brixObj = {
        didUserSelect: props.selectBrix,
        fBrix: props.fBrix,
        runOffBrix: brixAvg,
        fermentingBrix: props.fermentingBrix
    }

    const displayBrix = (brix) => {
        if (brix.fermentingBrix) {
            return brix.fermentingBrix
        } else if(brix.didUserSelect) {
            return brix.fermentingBrix
        } else if (brix.fBrix.length) {
            return brix.fBrix[brix.fBrix.length-1].fermentingBrix
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