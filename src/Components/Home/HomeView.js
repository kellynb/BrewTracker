import Nav from '../Nav/Nav';
import React from 'react';
import Fermenter from './Fermenter/FermenterContainer'; 
import '../../App.css';
import BrewButton from './BrewButton/BrewButton';


const HomeView = () => {
    return (
        <main>
            <Nav />
            <section id="brewFarm">
                <div id="mainBrewButton">
                    <BrewButton/>
                </div>
                <Fermenter/>
                {/* <BriteTank/> */}
            </section>
        </main>
    )
}

export default HomeView;