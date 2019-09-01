import React from 'react';

import Toggle from '../SubComponents/toggle';
import Number from '../SubComponents/Number';

const Sanitize = (props) => {
    const reduxSanitize = props.reduxSanitize;
    const componentSanitize = props.sanitize;
    const select = props.selectSanitize;
    

    const displayToggle =(redux,component, select) => {
      if (select) {
        return component
      } else {
        return redux
      }
    }

    const ppmObj = {
        componentPPM: props.ppm,
        reduxPPM: props.reduxPPM,
        sanitizeSelect: props.sanitizeSelect
    }

    const displayTemp = (ppm) => {
        if (ppm.componentPPM) {
            return ppm.componentPPM
        } else if(ppm.sanitizeSelect) {
            return ppm.componentPPM
        } else if (ppm.reduxPPM) {
            return ppm.reduxPPM
        } else {
            return null
        }
    }
    
    return (
        <div className="fermentationData">
            <p>Tank Sanitation</p>
            <div className = "organizeFermentation">
                <Toggle
                    checked={displayToggle(reduxSanitize,componentSanitize,select)} 
                    onChange={props.toggle} 
                    value={displayToggle(reduxSanitize,componentSanitize,select)} 
                    name="sanitize" 
                    label="Sanitize"
                    id = "selectSanitize"
                />
                {componentSanitize || (reduxSanitize && !select)
                    ?
                    <Number 
                        valueCalc={displayTemp(ppmObj)}
                        onChange = {props.userInput}
                        measurement = "ppm"
                        changeSelect={props.changeSanitize}
                        name= "ppm"
                        id = "sanitizeSelect"
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