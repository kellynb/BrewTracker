import '../../../App.css';
import React from 'react';

const Transfer = (props) => {

    return (
        <button className="allButtons" onClick = {props.handleTransfer}>
            Runoff To {props.brewBatch.tank}
        </button>
    )
}

export default Transfer;