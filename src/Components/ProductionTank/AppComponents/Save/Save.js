import React from 'react';
import '../../../../App.css';

const Save = (props) => {

    return (
            <div className="fermentationData" id="fermentationSave">
                <button className="allButtons" id="saveButton" onClick={props.sendUpdate}>
                    Save Updates
                </button>
            </div>   
    )

}

export default Save;