import React from 'react';

import Toggle from '../SubComponents/toggle';
import Number from '../SubComponents/Number';

const Sanitize = (props) => {
    
    return (
        <div className="fermentationData">
            <p>Tank Sanitation</p>
            <div className = "organizeFermentation">
                <Toggle
                    checked={props.sanitize} 
                    label="Sanitize"
                    name="sanitize" 
                    onChange={props.toggle} 
                    value={props.sanitize} 
                />
                {props.sanitize
                    ?
                    <Number 
                        valueCalc={props.ppm}
                        onChange = {props.userInput}
                        measurement = "ppm"
                        name= "ppm"
                        label= "Peracetic Acid"
                    />
                    :
                    null
                }                         
            </div>
        </div>
    )
}

export default Sanitize;