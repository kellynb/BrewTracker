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
                        backgroundColor: "#5d9732",
                        component: <Fermenting fermenter={fermenter} />
                    },
                    conditioning: {
                        backgroundColor: "#3490db",
                        component: <Conditioning fermenter={fermenter} />
                    },
                    empty: {
                        backgroundColor: "#d1d0bb",
                        component: <Empty fermenter={fermenter} />
                    },
                    dirty: {
                        backgroundColor: "#d1d0bb",
                        component: <Dirty fermenter={fermenter} />
                    },
                    clean: {
                        backgroundColor: "#707070",
                        component: <Clean fermenter= {fermenter} />
                    },
                    sanitize: {
                        backgroundColor: "white",
                        component: <Sanitize fermenter={fermenter} />
                    }
                }

                return (
                    
                    <div className = "cFermenter" key={index} style={{backgroundColor : status[fermenter.status].backgroundColor}}>
                        <button onClick={() =>{props.setTank(fermenter)}} className="TankNumber">
                            <h3 id="fermenterVal">{fermenter.tank}</h3>
                        </button>
                        <div className="fermenterData">
                            {status[fermenter.status].component}
                        </div>
                        
                     </div>   
                )
            })}
        </section>
    )
    
}

export default FermenterView;