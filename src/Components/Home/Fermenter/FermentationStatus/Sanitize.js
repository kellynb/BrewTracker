import React from 'react';
import Typography from '@material-ui/core/Typography';

import '../../../../App.css';

const Sanitize = (props) => {

    return (
        <div className="gridStats">
            <Typography component="p">PPM</Typography>
            <Typography component="p" className="stats">
            {props.fermenter.ppm ? props.fermenter.ppm : null}
            </Typography>
        </div>
    )
}

export default Sanitize;