import React from 'react';
import '../../../App.css';

const FermenterView = (props) => {
    return (
        <section>
            {props.tanks.map( (fermenter,index) => {
                
                const styles = {
                    backgroundColor: "#5d9732",

                }
                
                if (!fermenter.runOff) {
                    styles.backgroundColor = "#d1d0bb"
                }

                return (
                    <div className = "cFermenter" key={index} style={styles}>
                        <button onClick={() =>{props.setTank(fermenter)}} className="TankNumber">
                            <h3 id="fermenterVal">{fermenter.tank}</h3>
                        </button>
                        {fermenter.runOff ? 
                            <div className="fermenterData">
                                <h4>Batch Number: {fermenter.number}</h4>
                                <h4>Beer Style: {fermenter.style}</h4>
                                <h4>Volume: {fermenter.bbls.reduce( (acc, bbl) => (acc +bbl), 0)} bbls</h4>
                                <h4>Temp: {fermenter.tankTemp} F</h4>
                                <h4>Starting Brix: {fermenter.brix.reduce((acc,brix,index) => acc+(brix-acc)/(index+1),0)} brix </h4>
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