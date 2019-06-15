import Nav from '../Nav/Nav';
import BrewButton from '../Home/BrewButton/BrewButton';
import React from 'react';
import Fermenter from './Fermenter/Fermenter'; 
import '../../App.css';


const HomeView = () => {
    return (
        <main>
            <Nav />
            <section className='topTitle'>
                <BrewButton/>
            </section>
            <section id="brewFarm">
                <Fermenter/>
                {/* <BriteTank/> */}
            </section>
        </main>
    )
}

export default HomeView;