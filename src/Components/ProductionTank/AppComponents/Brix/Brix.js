import React from 'react';

import Time from '../SubComponents/Time';
import Number from '../SubComponents/Number';

import '../../../../App.css';

const Brix = (props) => {
    const brixAvg = props.brix.reduce((acc,brix,index) => acc+(brix-acc)/(index+1),0);

    const displayBrix = () => {
        if (props.fermentingBrix) {
            return props.fermentingBrix
        } else if(props.selectBrix) {
            return props.fermentingBrix
        } else if (props.fBrix[props.fBrix.length-1]) {
            return props.fBrix[props.fBrix.length-1].fermentingBrix
        } else if(props.brix.length > 0) {
            return brixAvg
        } else {
            return 0
        }
    }

    return (
        <div className="fermentationData">
            <p>Brix</p>
            <div className = "organizeFermentation">
                <Number 
                    valueCalc={displayBrix()}
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