import moment from 'moment';
import React from 'react';

import '../../../../App.css';

const Clean = (props) => {

    const presentDate = (date) => {
        return moment(date).format("MMM Do")
    }

    return (
        <div className="fermenterData">
            <h4>Clean</h4>
            <h4>CIP Date: {props.fermenter.cip1 ? presentDate(props.fermenter.cip1) : null}</h4>
            <h4>CIP Date: {props.fermenter.cip2 ? presentDate(props.fermenter.cip2) : null}</h4>
        </div>
    )
}

export default Clean;