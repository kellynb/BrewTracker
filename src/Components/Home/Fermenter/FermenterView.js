import React from 'react';

import Clean from './FermentationStatus/Clean';
import Conditioning from './FermentationStatus/Conditioning';
import Dirty from './FermentationStatus/Dirty';
import Empty from './FermentationStatus/Empty';
import Fermenting from './FermentationStatus/Fermenting';
import FermenterCard from './FermenterCard/FermenterCard'; 
import Sanitize from './FermentationStatus/Sanitize';


import '../../../App.css';

const FermenterView = (props) => {    
    return (
        <section id="brewCard">
            {props.tanks.map( (fermenter,index) => {
                const status = {
                    fermenting: {
                        backgroundColor: "#66bb6a",
                        component: <Fermenting fermenter={fermenter} />
                    },
                    conditioning: {
                        backgroundColor: "#29b6f6",
                        component: <Conditioning fermenter={fermenter} />
                    },
                    empty: {
                        backgroundColor: "#d1d0bb",
                        component: <Empty fermenter={fermenter} />
                    },
                    dirty: {
                        backgroundColor: "#8d6e63",
                        component: <Dirty fermenter={fermenter} />
                    },
                    clean: {
                        backgroundColor: "#0093c4",
                        component: <Clean fermenter= {fermenter} />
                    },
                    sanitize: {
                        backgroundColor: "#78909c",
                        component: <Sanitize fermenter={fermenter} />
                    }
                }

                return (
                    <FermenterCard key={index} status={status} fermenter={fermenter} setTank={props.setTank}/>
                    // <div className = "cFermenter" key={index} style={{backgroundColor : status[fermenter.status].backgroundColor}}>
                       
                       
                       
                        /* <button onClick={() =>{props.setTank(fermenter)}} className="TankNumber">
                    //         <h3 id="fermenterVal">{fermenter.tank}</h3>
                    //     </button>
                    //     <div className="fermenterData">
                    //         {status[fermenter.status].component}
                    //     </div> */
                        
                    // </div>   
                )
            })}
        </section>
    )
    
}

export default FermenterView;