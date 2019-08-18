import React from 'react';

import Number from '../SubComponents/Number';
import Time from '../SubComponents/Time';

import '../../../../App.css';

const TemperatureList = (props) => {

    const displayTemp = () => {
        if (props.tankTemp) {
            return props.tankTemp
        } else if(props.select) {
            return props.tankTemp
        } else if (props.temp[props.temp.length-1]) {
            return props.temp[props.temp.length-1].tankTemp
        } else {
            return null
        }
    }

    return (
        <div className="fermentationData">
            <p>Temperature</p>
            <div className = "organizeFermentation">
                <Number 
                    valueCalc={displayTemp()}
                    onChange = {props.userInput}
                    measurement = "F"
                    changeSelect={props.changeSelect}
                    name= "tankTemp"
                    id= "select"
                    label = "Temp"
                />
                <Time 
                    arrInput={props.temp}
                    value="tankTemp"
                />
            </div>
        </div>
    )
}

export default TemperatureList;