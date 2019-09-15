import React from 'react';

import Number from '../SubComponents/Number';
import Time from '../SubComponents/Time';
import Toggle from '../SubComponents/toggle';

import '../../../../App.css';

const TemperatureList = props => {
  const tempObj = {
    componentTemp: props.tankTemp,
    userAddTemp: props.select,
    startTemp: props.temp
  };

  const displayTemp = temp => {
    if (temp.componentTemp) {
      return temp.componentTemp;
    } else if (temp.userAddTemp) {
      return temp.componentTemp;
    } else if (temp.startTemp.length) {
      return temp.startTemp[temp.startTemp.length - 1].tankTemp;
    } else {
      return null;
    }
  };

  return (
    <div className="fermentationData">
      <p>Temperature</p>
      <div className="organizeFermentation">
        <Number
          valueCalc={displayTemp(tempObj)}
          onChange={props.userInput}
          measurement="F"
          changeSelect={props.changeSelect}
          name="tankTemp"
          id="tankSelect"
          label="Temp"
        />
        <Time arrInput={props.temp} value="tankTemp" />
      </div>
        <div id="selectCondition">
            <Toggle
              checked={props.conditioning}
              onChange={props.toggle}
              value={props.condtioning}
              label="Condition"
              name="conditioning"
              id="selectCondition"
            />
        </div>
    </div>
  );
};

export default TemperatureList;