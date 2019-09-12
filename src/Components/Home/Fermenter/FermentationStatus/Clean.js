import moment from 'moment';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../../../../App.css';


const Clean = (props) => {

    const presentDate = (date) => {
        return moment(date).format("MMM Do")
    }

    return (
      <div className="gridStats">
        <Typography component="p">CIP Date</Typography>
        <Typography component="p">
          {props.fermenter.cip1 ? presentDate(props.fermenter.cip1) : "N/A"}
        </Typography>
        <Typography component="p">CIP Date</Typography>
        <Typography component="p">
          {props.fermenter.cip2 ? presentDate(props.fermenter.cip2) : "N/A"}
        </Typography>
      </div>
    );
}

export default Clean;