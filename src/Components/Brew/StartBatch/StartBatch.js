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
              {!props.brewBatch.enter ? <button onClick={props.handleEnter} className="allButtons">Enter Batch</button> : null}
          </div>
      </section>
    )
}

export default StartBatch;