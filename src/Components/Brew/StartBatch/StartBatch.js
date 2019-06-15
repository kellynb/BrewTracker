import '../../../App.css';
import React from 'react';
import StyleBatch from './StyleBatch';


const StartBatch = (props) => {
    return (
      <section className="userInputs">
          <h2>Brew Information</h2>
          <form className="batchValue">
              <StyleBatch {...props} />
          </form>
          <div id="batchEnter">
              {!props.brewBatch.batch.enter
                ? 
                <button onClick={props.handleEnter} className="allButtons">Enter Batch</button> 
                : 
                <button onClick={props.handleDelete} className="allButtons">Delete Batch</button>
              }
          </div>
      </section>
    )
}

export default StartBatch;