import React from 'react';

import Toggle from '../SubComponents/toggle';
import Date from '../SubComponents/Date';

const CIP = (props) => {
    
    return (
        <div className="fermentationData">
            <p>CIP Date</p>
            <div className = "organizeFermentation">
                <Date 
                    productionTankDate={props.productionTankDateA} 
                    // reduxDate={props.somethingelse} 
                    name="cip1" 
                    label="CIP 1"
                    onChange={props.userInput} 
                />
                <Date 
                    productionTankDate={props.productionTankDateB} 
                    // reduxDate={props.somethingelse} 
                    name="cip2"
                    label="CIP 2"
                    onChange={props.userInput} 
                />                
            </div>
                {props.productionTankDateA || props.productionTankDateB
                    ?
                    <div className = "organizeFermentation">
                        <Toggle 
                            checked={props.clean} 
                            onChange={props.toggle} 
                            value={props.clean} 
                            name="clean" 
                            label="Clean"
                        />
                    </div>
                    :
                    null
                }
        </div>
    )
}

export default CIP;