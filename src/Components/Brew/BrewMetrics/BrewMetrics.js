import '../../../App.css';
import React from 'react';
import BrewMetricsStyle from './BrewMetricsStyle';

const BrewMetrics = (props) => {
    return (
        <section className="userInputs">
            <h2>Brew Data</h2>
            <form className="batchValue">
                <BrewMetricsStyle {...props} />
            </form>
        </section>
    )
    
}



export default BrewMetrics;