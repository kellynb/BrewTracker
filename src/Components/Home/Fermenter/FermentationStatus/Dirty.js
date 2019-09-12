import moment from 'moment';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import '../../../../App.css';


const Dirty = (props) => {
    const ifNoCIPDate = "Needs CIP";

    const presentDate = (date) => {
        return moment(date).format("MMM Do")
    }
    return (
        <div className="gridStats">
            <Typography component="p">CIP Date</Typography>
            <Typography component="p" className="stats">
            {props.fermenter.cip1 ? presentDate(props.fermenter.cip1) : ifNoCIPDate}
            </Typography>

            <Typography component="p">CIP Date</Typography>
            <Typography component="p" className="stats">
            {props.fermenter.cip2 ? presentDate(props.fermenter.cip2) : ifNoCIPDate}
            </Typography>
        </div>
    )
}

export default Dirty;