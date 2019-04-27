import React from 'react';
import '../../../App.css';

const FermenterView = (props) => {
    return (
        <section>
            {props.state.map( fermenter => {
                
                const styles = {
                    backgroundColor: "#5d9732",

                }
                
                if (!fermenter.runOff) {
                    styles.backgroundColor = "#d1d0bb"
                }

                return (
                        <div className = "cFermenter" key={fermenter.tank} style={styles}>
                            <h3 className="TankNumber">{fermenter.tank}</h3>
                            {fermenter.runOff ? 
                                <div className="fermenterData">
                                    <h4>Batch Number: {fermenter.number}</h4>
                                    <h4>Beer Style: {fermenter.style}</h4>
                                    <h4>Volume: {fermenter.bbls.reduce( (acc, bbl) => (acc +bbl), 0)} bbls</h4>
                                </div>
                                :
                                null}
                        </div>
                )
            })}
        </section>
    )
    
}

export default FermenterView;