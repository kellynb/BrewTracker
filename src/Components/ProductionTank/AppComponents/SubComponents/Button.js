import React from 'react';
import '../../../../App.css';

const ProductionTankButton = (props) => {

    return (
        <button className="allButtons" id={props.id} onClick={props.onClick}>
            {props.words}
        </button> 
    )

}

export default ProductionTankButton;