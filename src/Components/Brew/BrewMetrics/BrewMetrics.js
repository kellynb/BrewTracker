import '../../../App.css';
import React, {Component} from 'react';
import {updateBatch} from '../BrewFetch';
import BrewMetricsStyle from './BrewMetricsStyle';

class BrewMetrics extends Component {
    
    componentDidMount () {
        const id = this.props.brewBatch.number;
        const batch = this.props.brewBatch.batch
        const batchObj = {
            number: id,
            batch: batch
        }
        updateBatch(id, batchObj)
    }

    render () {

        return (
            <section className="userInputs">
                <h2>Brew Data</h2>
                <form className="batchValue">
                    <BrewMetricsStyle {...this.props} />   
                </form>
            </section>
        )
    }
}



export default BrewMetrics;