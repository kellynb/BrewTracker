import React from 'react';

import Date from '../SubComponents/Date';

import '../../../../App.css';

const YeastAction = (props) => {
     // used for props in date component    
    return (
        <div className="fermentationData">
            <p>Yeast Removal</p>
            <div className = "organizeFermentation">
                <Date 
                    onChange={props.userInput} 
                    label="Dump 1" 
                    name="yeastDump1"
                    reduxDate = {props.yeastDump1Redux}
                />
                <Date 
                    onChange={props.userInput}
                    label="Dump 2"
                    name="yeastDump2"
                    reduxDate = {props.yeastDump2Redux}
                />
            </div>
        </div>
    )
}

export default YeastAction;