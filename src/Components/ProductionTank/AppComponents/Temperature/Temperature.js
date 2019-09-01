import React from 'react';

import Number from '../SubComponents/Number';
import Time from '../SubComponents/Time';

import '../../../../App.css';

const TemperatureList = (props) => {
    const tempObj = {
        componentTemp: props.tankTemp,
        userAddTemp: props.select,
        reduxTemp: props.temp
    }

    const displayTemp = (temp) => {
        if (temp.componentTemp) {
            return temp.componentTemp
        } else if(temp.userAddTemp) {
            return temp.componentTemp
        } else if (temp.reduxTemp[temp.reduxTemp.length-1]) {
            return temp.reduxTemp[temp.reduxTemp.length-1].tankTemp
        } else {
            return null
        }
    }

    return (
        <div className="fermentationData">
            <p>Temperature</p>
            <div className = "organizeFermentation">
                <Number 
                    valueCalc={displayTemp(tempObj)}
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