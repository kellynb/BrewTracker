import React from 'react';
import '../../../../App.css';
import Typography from '@material-ui/core/Typography';

const Fermenting = (props) => {
   
    return (
      <div className="gridStats">
        <Typography component="p">Batch Number</Typography>
        <Typography component="p" className="stats">
          {props.fermenter.number}
        </Typography>

        <Typography component="p">Beer Style</Typography>
        <Typography component="p" className="stats">
          {props.fermenter.style}
        </Typography>

        <Typography component="p">Volume</Typography>
        <Typography component="p" className="stats">
          {props.fermenter.bbls.reduce( (acc, bbl) => (acc +bbl), 0)} bbls
        </Typography>

        <Typography component="p">Temp</Typography>
        <Typography component="p" className="stats">
          {props.fermenter.tankTemp[props.fermenter.tankTemp.length - 1]
            ? props.fermenter.tankTemp[props.fermenter.tankTemp.length - 1]
                .tankTemp
            : 0}
        </Typography>

        <Typography component="p">Starting Brix</Typography>
        <Typography component="p" className="stats">
          {props.fermenter.brix.reduce(
            (acc, brix, index) => acc + (brix - acc) / (index + 1),
            0
          )}
        </Typography>

        <Typography component="p">Fermenting Brix</Typography>
        <Typography component="p" className="stats">
          {props.fermenter.fermentingBrix[
            props.fermenter.fermentingBrix.length - 1
          ]
            ? props.fermenter.fermentingBrix[
                props.fermenter.fermentingBrix.length - 1
              ].fermentingBrix
            : "N/A"}
        </Typography>
      </div>
    );
}



export default Fermenting;