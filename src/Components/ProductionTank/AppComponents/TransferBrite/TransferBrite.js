import '../../../../App.css';
import React from 'react';


const TransferBrite = (props) => {

    return (
        <button className="allButtons" id="transferButton" onClick={props.handleTransfer}>
           Tranfer to Brite 
        </button>
    )
}

export default TransferBrite;