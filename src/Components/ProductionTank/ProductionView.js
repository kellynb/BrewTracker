import React from 'react';
import Nav from '../Nav/Nav';
import FermenterIcon from './FermenterIcon/FermenterIcon';
import AppBar from './AppComponents/AppBar/AppBarContainer';
import TemperatureList from './AppComponents/Temperature';
import Spund from './AppComponents/Spund/Spund';
import Yeast from './AppComponents/Yeast/Yeast';
import Brix from './AppComponents/Brix/Brix';
import '../../App.css';


const ProductionView = () => {
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
                            <TemperatureList />
                            <Brix />
                            <Spund />
                            <Yeast />
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default ProductionView;