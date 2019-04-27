import Nav from '../Nav/Nav';
import BrewButton from '../Home/BrewButton/BrewButton';
import React from 'react';
import FermenterContainer from './Fermenter/FermenterContainer'; 
import '../../App.css';


const HomeView = () => {
    return (
        <main>
            <Nav />
            <section className='topTitle'>
                <BrewButton/>
            </section>
            <section id="brewFarm">
                <FermenterContainer/>
                {/* <BriteTank/> */}
            </section>
        </main>
    )
}

export default HomeView;