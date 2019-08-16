import React from 'react';

import Toggle from '../SubComponents/toggle';
import Date from '../SubComponents/Date';

import '../../../../App.css';

const CIP = (props) => {
    // used for props in toggle component
    const cip = {
        name: "clean",
        label: "Clean"
    }
    // used for props in date component 
    const date = {
        date1name: "cip1",
        date2name: "cip2",
        date1Label: "CIP 1",
        date2Label: "CIP 2"
    }

    return (
        <div className="fermentationData">
            <p>CIP Date</p>
            <div className = "organizeFermentation">
                <Date 
                    productionTankDate={props.productionTankDateA} 
                    // reduxDate={props.somethingelse} 
                    name={date.date1name} 
                    label={date.date1Label}
                    onChange={props.userInput} 
                />
                <Date 
                    productionTankDate={props.productionTankDateB} 
                    // reduxDate={props.somethingelse} 
                    name={date.date2name} 
                    label={date.date2Label}
                    onChange={props.userInput} 
                />                
            </div>
                {props.cip1 || props.cipA 
                    ?
                    <div className = "organizeFermentation">
                        <Toggle 
                                checked={props.clean} 
                                onChange={props.toggle} 
                                value={props.clean} 
                                name={cip.name} 
                                label={cip.label}
                        />
                    </div>
                    :
                    null
                }
        </div>
    )
}

export default CIP;