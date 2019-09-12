import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../../../../App.css';

const Conditioning = (props) => {
    return (
        <div className="gridStats">
            <Typography component="p">Batch Number</Typography>
            <Typography component="p" className="stats">
            {props.fermenter.number}
            </Typography>
            
            <Typography component="p">Batch Style</Typography>
            <Typography component="p" className="stats">
            {props.fermenter.style}
            </Typography>
            
            <Typography component="p">Volume</Typography>
            <Typography component="p" className="stats">
            {props.fermenter.bbls.reduce( (acc, bbl) => (acc +bbl), 0)} bbls
            </Typography>

            <Typography component="p">Temp</Typography>
            <Typography component="p" className="stats">
            {props.fermenter.tankTemp[props.fermenter.tankTemp.length-1] ? props.fermenter.tankTemp[props.fermenter.tankTemp.length-1].tankTemp: "N/A"} F
            </Typography>
            
            <Typography component="p">Final Brix</Typography>
            <Typography component="p" className="stats">
            {props.fermenter.fermentingBrix[props.fermenter.fermentingBrix.length-1] ? props.fermenter.fermentingBrix[props.fermenter.fermentingBrix.length-1].fermentingBrix : null}
            </Typography>
            
        </div>
    )
}

export default Conditioning;