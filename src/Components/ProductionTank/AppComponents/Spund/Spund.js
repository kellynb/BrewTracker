import React from 'react';

import Number from '../SubComponents/Number';
import Toggle from '../SubComponents/toggle';

import '../../../../App.css';

const Spund = (props) => {

      return(
        <div className="fermentationData">
            <p>Fermentation Pressure</p>
            <div className="organizeFermentation">
              <Toggle 
                checked={props.spund} 
                onChange={props.toggle} 
                value={props.spund} 
                label="Spund" 
                name="spund"
                id = "selectSpund"
              />
              {props.spund
                ?
                <Number 
                  valueCalc={props.spundPressure}
                  onChange = {props.userInput}
                  measurement = "PSI"
                  name= "spundPressure"
                  label= "Pressure"
                />
                : 
                null}
            </div>
        </div>
      ) 
    
}


export default Spund;