import React from 'react';
import {Link} from 'react-router-dom';
import '../../../App.css';

const BrewButton = () => {

    return (
        
        <Link to='/Brew' >
            <button className="allButtons">
                Brew Batch
            </button>
        </Link>
    )

}

export default BrewButton;