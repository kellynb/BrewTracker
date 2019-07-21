import React from 'react';
import Nav from '../Nav/Nav';
import FermenterIcon from './FermenterIcon/FermenterIconContainer';
import AppBar from './AppComponents/AppBar/AppBarContainer';
import TemperatureList from './AppComponents/Temperature/TemparatureContainer';
import Spund from './AppComponents/Spund/Spund';
import Yeast from './AppComponents/Yeast/Yeast';
import Brix from './AppComponents/Brix/BrixContainer';
import '../../App.css';



const ProductionView = (props) => {
    console.log(props.status)
    return (
        <main>
            <Nav />
            <section className='fermentationBackground'>
                <div id="fermentationBox">
                    <section id="fermentationVisuals">
                        <FermenterIcon />
                    </section>
                    <section id = "fermentationForm">
                        <div>
                            <AppBar />
                                <div>
                                    <TemperatureList />
                                    {props.status === 'fermenting' ? <Brix /> : null}
                                    <Spund />
                                    {props.status === 'conditioning' ? <Yeast /> : null}
                                </div>
                                <div>
                                </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default ProductionView;