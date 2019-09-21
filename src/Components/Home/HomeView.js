import React from 'react';

import BrewButton from './BrewButton/BrewButton';
import Fermenter from './Fermenter/FermenterContainer'; 
import Nav from '../Nav/Nav';

import '../../App.css';

const HomeView = () => {
  return (
    <main>
      <Nav />
      <section id="brewFarm">
        <div id="mainBrewButton">
          <BrewButton />
        </div>
        <Fermenter />
        {/* <BriteTank/> */}
      </section>
    </main>
  );
};

export default HomeView;