import React from 'react';
import Nav from '../Nav/Nav';
import '../../App.css';
import StartBatch from './StartBatch/StartBatch';
import BrewMetrics from './BrewMetrics/BrewMetrics';
import Transfer from './Transfer/Transfer';

const BrewView = (props) => {

    return (
        <main id="brewMain">
            <Nav />
            <section id="startBatch">
                <StartBatch {...props} />
                {props.brewBatch.batch.enter ? 
                    <section>
                        <BrewMetrics {...props}/>
                        <Transfer {...props} /> 
                    </section>
                    : 
                    null
                }
            </section>
        </main>
    )
}

export default BrewView;