import React from 'react';
import '../../../../App.css';

const Fermenting = (props) => {
   
    return (
        <div>
            <h4>Batch Number: {props.fermenter.number}</h4>
            <h4>Beer Style: {props.fermenter.style}</h4>
            <h4>Volume: {props.fermenter.bbls.reduce( (acc, bbl) => (acc +bbl), 0)} bbls</h4>
            <h4>Temp: {props.fermenter.tankTemp[props.fermenter.tankTemp.length-1] ? props.fermenter.tankTemp[props.fermenter.tankTemp.length-1].tankTemp: 0} F</h4>
            <h4>Starting Brix: {props.fermenter.brix.reduce((acc,brix,index) => acc+(brix-acc)/(index+1),0)} brix </h4>
            <h4>Fermenting Brix: {props.fermenter.fermentingBrix[props.fermenter.fermentingBrix.length-1] ? props.fermenter.fermentingBrix[props.fermenter.fermentingBrix.length-1].fermentingBrix : null}</h4>
        </div>
    )
}

export default Fermenting;