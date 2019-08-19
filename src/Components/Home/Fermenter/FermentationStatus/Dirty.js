import moment from 'moment';
import React from 'react';

import '../../../../App.css';

const Dirty = (props) => {
    const ifNoCIPDate = "Needs CIP";

    const presentDate = (date) => {
        return moment(date).format("MMM Do")
    }
    return (
        <div className="fermenterData">
            <h4>Dirty</h4>
            <h4>CIP Date: {props.fermenter.cip1 ? presentDate(props.fermenter.cip1) : ifNoCIPDate}</h4>
            <h4>CIP Date: {props.fermenter.cip2 ? presentDate(props.fermenter.cip2) : ifNoCIPDate}</h4>
        </div>
    )
}

export default Dirty;