import React from 'react';

import Number from '../SubComponents/Number';
import Toggle from '../SubComponents/toggle';

import '../../../../App.css';

const Spund = (props) => {
      const reduxSpund = props.reduxSpund;
      const componentSpund = props.spund;
      const select = props.selectSpund;
      

      const displayToggle =(reduxSpund,componentSpund, select) => {
        if (select) {
          return componentSpund
        } else {
          return reduxSpund
        }
      }

      const componentPressure = props.spundPressure
      const reduxPressure = props. reduxPressure
      const userInteraction = props.selectPSI
      
      const displayPSI = (componentPressure,reduxPressure,userInteraction ) => {
        if (componentPressure) {
          return componentPressure
        } else if (userInteraction) {
          return componentPressure
        } else if (reduxPressure) {
          return reduxPressure
        } else {
          return null
        }
      }

      return(
        <div className="fermentationData">
            <p>Fermentation Pressure</p>
            <div className="organizeFermentation">
              <Toggle 
                checked={displayToggle(reduxSpund, componentSpund,select)} 
                onChange={props.toggle} 
                value={displayToggle(reduxSpund, componentSpund, select)} 
                label="Spund" 
                name="spund"
                id = "selectSpund"
              />
              {componentSpund || (reduxSpund && !select)
                ?
                <Number 
                  valueCalc={displayPSI(componentPressure,reduxPressure,userInteraction)}
                  onChange = {props.userInput}
                  measurement = "PSI"
                  changeSelect={props.changeSelect}
                  name= "spundPressure"
                  label= "Pressure"
                  id = "selectPSI"
                />
                : 
                null}
            </div>
        </div>
      ) 
    
}


export default Spund;