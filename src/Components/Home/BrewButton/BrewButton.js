import React from 'react';
import {Link} from 'react-router-dom';
import '../../../App.css';

const BrewButton = () => {

    return (
        
        <Link to='/Brew' className='links'>
            <button className="allButtons">
                Brew Batch
            </button>
        </Link>
    )

}

export default BrewButton;