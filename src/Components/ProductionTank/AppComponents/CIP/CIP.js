import React from 'react';

import Toggle from '../SubComponents/toggle';
import Date from '../SubComponents/Date';

const CIP = (props) => {
    
    return (
      <div className="fermentationData">
        <p>CIP Date</p>
        <div className="organizeFermentation">
          <Date
            changeSelect={props.changeSelect}
            id="clean1"
            name="cip1"
            label="CIP 1"
            onChange={props.userInput}
            productionTankDate={props.cipDate1}
            select={props.select1}
            updateDate={props.updateDate}
          />
          <Date
            changeSelect={props.changeSelect}
            id="clean2"
            name="cip2"
            label="CIP 2"
            productionTankDate={props.cipDate2}
            onChange={props.userInput}
            select={props.select2}
            updateDate={props.updateDate}
          />
        </div>
        {(props.cipDate1 || props.cipDate2)  && props.status !== "sanitize" ? (
          <div className="organizeFermentation">
            <Toggle
              checked={props.clean}
              id="selectClean"
              name="clean"
              label="Clean"
              onChange={props.toggle}
              value={props.clean}
            />
          </div>
        ) : null}
      </div>
    );
}

export default CIP;