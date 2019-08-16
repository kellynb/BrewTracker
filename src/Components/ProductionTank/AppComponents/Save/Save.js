import React from 'react';
import '../../../../App.css';

const Save = (props) => {

    return (
        <button className="allButtons" id="saveButton" onClick={props.sendUpdate}>
            Save Updates
        </button> 
    )

}

export default Save;