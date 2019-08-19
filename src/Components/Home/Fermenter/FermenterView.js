import React from 'react';

import Clean from './FermentationStatus/Clean';
import Conditioning from './FermentationStatus/Conditioning';
import Dirty from './FermentationStatus/Dirty';
import Empty from './FermentationStatus/Empty';
import Fermenting from './FermentationStatus/Fermenting';
import Sanitize from './FermentationStatus/Sanitize';

import '../../../App.css';

const FermenterView = (props) => {    
    return (
        <section>
            {props.tanks.map( (fermenter,index) => {
                const status = {
                    fermenting: {
                        backgroundColor: "#5d9732"
                    },
                    conditioning: {
                        backgroundColor: "#3490db"
                    },
                    empty: {
                        backgroundColor: "#d1d0bb"
                    },
                    dirty: {
                        backgroundColor: "#d1d0bb"
                    },
                    clean: {
                        backgroundColor: "#707070"
                    },
                    sanitize: {
                        backgroundColor: "white"
                    }
                }
                
                const renderFermenter = () => {
                    if (fermenter.status === 'fermenting') {
                        return <Fermenting fermenter={fermenter} />
                    } else if (fermenter.status === 'conditioning') {
                        return <Conditioning fermenter={fermenter} />
                    } else if (fermenter.status === 'clean') {
                        return <Clean fermenter= {fermenter} />
                    } else if (fermenter.status === 'dirty') {
                        return <Dirty fermenter={fermenter} />
                    } else if (fermenter.status === 'sanitize') {
                        return <Sanitize fermenter={fermenter} />
                    } else {
                        return <Empty fermenter={fermenter} />
                    }
                }

                return (
                    
                    <div className = "cFermenter" key={index} style={{backgroundColor : status[fermenter.status].backgroundColor}}>
                        <button onClick={() =>{props.setTank(fermenter)}} className="TankNumber">
                            <h3 id="fermenterVal">{fermenter.tank}</h3>
                        </button>
                        <div className="fermenterData">
                            {renderFermenter()}
                        </div>
                        
                     </div>   
                )
            })}
        </section>
    )
    
}

export default FermenterView;