import React from 'react';

import Date from '../SubComponents/Date';

import '../../../../App.css';

const YeastAction = (props) => {

    return (
        <div className="fermentationData">
            <p>Yeast Removal</p>
            <div className = "organizeFermentation">
                <Date 
                    changeSelect={props.changeSelect}
                    onChange={props.userInput} 
                    select={props.select1}
                    updateDate = {props.updateDate}
                    label="Dump 1" 
                    name="yeastDump1"
                    id = "yeastSelect1"
                    productionTankDate={props.yeastDump1}
                />
                <Date 
                    changeSelect={props.changeSelect}
                    onChange={props.userInput}
                    updateDate = {props.updateDate}
                    select={props.select2}
                    label="Dump 2"
                    name="yeastDump2"
                    id = "yeastSelect2"
                    productionTankDate={props.yeastDump2}
                />
            </div>
        </div>
    )
}

export default YeastAction;