import React from 'react';
import Fermenting from './FermentationStats/Fermenting';
import Conditioning from './FermentationStats/Conditioning';
import Empty from './FermentationStats/Empty';
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
                    }
                }
                
                const renderFermenter = () => {
                    if (fermenter.status === 'fermenting') {
                        return <Fermenting fermenter={fermenter} />
                    } else if (fermenter.status === 'conditioning') {
                        return <Conditioning fermenter={fermenter} />
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