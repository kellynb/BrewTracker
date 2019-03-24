import '../../../App.css';
import React, {Component} from 'react';
import {updateBatch} from '../BrewFetch';

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
            <form id="brewMetrics">
                <div>
                    Strike Water Volume: 
                    <input type="number" name="strikeVolume" value={this.props.brewBatch.batch.strikeVolume} onChange={this.props.handleBatch}>
                    </input>
                </div>
                <div>
                    Mash Temp: 
                    <input type="number" name="mashTemp" value={this.props.brewBatch.batch.mashTemp} onChange={this.props.handleBatch}>
                    </input>
                </div>
                <div>
                    Sparge Volume: 
                    <input type="number" name="spargeVolume" value={this.props.brewBatch.batch.spargeVolume} onChange={this.props.handleBatch}>
                    </input>
                </div>
                <div>
                    Starting Brix: 
                    <input type="number" name="startingBrix" value={this.props.brewBatch.batch.startingBrix} onChange={this.props.handleBatch}>
                    </input>
                </div>
                <div>
                    Kettle Volume: 
                    <input type="number" name="kettleVolume" value={this.props.brewBatch.batch.kettleVolume}  onChange={this.props.handleBatch}>
                    </input>
                </div>
                <div>
                    WhirlPool Volume: 
                    <input type="number" name="whirlPoolVolume" value={this.props.brewBatch.batch.whirlPoolVolume}  onChange={this.props.handleBatch}>
                    </input>
                </div>
                <div>
                    FM Volume: 
                    <input type="number" name="fmVolume" value={this.props.brewBatch.batch.fmVolume}  onChange={this.props.handleBatch}>
                    </input>
                </div>
                <div>
                    Notes: 
                    <input type="text" name="notes" value={this.props.brewBatch.batch.notes}  onChange={this.props.handleBatch}>
                    </input>
                </div>
            </form>
        )
    }
}

export default BrewMetrics;