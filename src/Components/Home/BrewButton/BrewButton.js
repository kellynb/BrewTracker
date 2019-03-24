import React from 'react';
import {Link} from 'react-router-dom';
import '../../../App.css';

const BrewButton = () => {

    return (
        
            <button className="allButtons">
                <Link to='/Brew' className='links'>Brew Batch</Link>
            </button>
    )

}

export default BrewButton;