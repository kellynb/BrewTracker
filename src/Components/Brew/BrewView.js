import React from 'react';
import Nav from '../Nav/Nav';
import '../../App.css';
import StartBatch from './StartBatch/StartBatch';
import BrewMetrics from './BrewMetrics/BrewMetrics';

const BrewView = (props) => {

    return (
        <main>
            <Nav />
            <section>
                <StartBatch {...props} />
                {props.brewBatch.enter ? <BrewMetrics {...props}/> : null}
            </section>
        </main>
    )
}

export default BrewView;