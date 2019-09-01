import React from 'react';

import Toggle from '../SubComponents/toggle';
import Date from '../SubComponents/Date';

const CIP = (props) => {
    const reduxClean = props.reduxClean;
    const componentClean = props.clean;
    const select = props.selectClean;
    

    const displayToggle =(redux,component, select) => {
      if (select) {
        return component
      } else {
        return redux
      }
    }
    
    return (
        <div className="fermentationData">
            <p>CIP Date</p>
            <div className = "organizeFermentation">
                <Date 
                    productionTankDate={props.productionTankDateA} 
                    reduxDate={props.reduxDate1} 
                    name="cip1" 
                    label="CIP 1"
                    onChange={props.userInput} 
                />
                <Date 
                    productionTankDate={props.productionTankDateB} 
                    reduxDate={props.reduxDate2} 
                    name="cip2"
                    label="CIP 2"
                    onChange={props.userInput} 
                />                
            </div>
                {props.reduxDate1 || props.reduxDate2 || props.productionTankDateA || props.productionTankDateB
                    ?
                    <div className = "organizeFermentation">
                        <Toggle 
                            checked={displayToggle(reduxClean, componentClean, select)} 
                            onChange={props.toggle} 
                            value={displayToggle(reduxClean, componentClean, select)} 
                            name="clean" 
                            label="Clean"
                            id = "selectClean"
                        />
                    </div>
                    :
                    null
                }
        </div>
    )
}

export default CIP;