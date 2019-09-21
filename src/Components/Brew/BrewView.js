import React from 'react';
import Nav from '../Nav/Nav';
import '../../App.css';
import StartBatch from './StartBatch/StartBatch';
import BrewMetrics from './BrewMetrics/BrewMetrics';
import Transfer from './Transfer/Transfer';

const BrewView = (props) => {

    return (
        <main>
            <Nav />
            <section id="startBatch">
                <StartBatch {...props} />
                {props.brewBatch.batch.enter ? 
                    <section id="brewData">
                        <BrewMetrics {...props}/>
                        <div id="brewTransfer">
                            <Transfer {...props} /> 
                        </div>
                    </section>
                    : 
                    null
                }
            </section>
        </main>
    )
}

export default BrewView;