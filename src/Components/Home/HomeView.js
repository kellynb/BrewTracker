import Nav from '../Nav/Nav';
import BrewButton from '../Home/BrewButton/BrewButton';
import React from 'react';
import '../../App.css';


const HomeView = (props) => {
    return (
        <main>
            <Nav />
            <section id='homePageBrew'>
                <BrewButton/>
            </section>
        </main>
    )
}

export default HomeView;