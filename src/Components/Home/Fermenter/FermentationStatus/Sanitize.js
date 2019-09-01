import React from 'react';

import '../../../../App.css';

const Sanitize = (props) => {

    return (
        <div className="fermenterData">
            <h4>Sanitized</h4>
            <h4>PPM: {props.fermenter.ppm ? props.fermenter.ppm : null}</h4>
        </div>
    )
}

export default Sanitize;