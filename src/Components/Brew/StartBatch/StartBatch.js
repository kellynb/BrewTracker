import '../../../App.css';
import React from 'react';

const StartBatchView = (props) => {
    
    return (
        <form id="startbatch" onSubmit={props.handleEnter}>
            <div>
                Batch Number: 
                <input type="number" name="number" value={props.brewBatch.number} onChange={props.handleBrewNumber}>
                </input>
            </div>
            <div>
                Batch Value: 
                <input type="text" name="id" value={props.brewBatch.batch.id}  onChange={props.handleBatch}>
                </input>
            </div>
            <div>
                Style: 
                <input type="text" name="style" value={props.brewBatch.style}  onChange={props.handleBrewNumber}>
                </input>
            </div>
            <div>
                Fermentation Tank: 
                <input type="text" name="tank" value={props.brewBatch.tank}  onChange={props.handleBrewNumber}>
                </input>
            </div>
            <div>
                {!props.brewBatch.enter ? <input type="submit" value="Enter Batch"></input> : null}
            </div>
        </form>
    )
}

export default StartBatchView;