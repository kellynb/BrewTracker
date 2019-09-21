import React from 'react';

import FermenterCard from './FermenterCard/FermenterCard';
import Spinner from './Spinner/Spinner';

import '../../../App.css';

const FermenterView = props => {
  return (
    <section>
      <div>
        {props.tanks.length === 0 ? (
          <Spinner />
        ) : (
          <div id="brewCard">
            {props.tanks.map((fermenter, index) => {
              return (
                <FermenterCard
                  key={index}
                  fermenter={fermenter}
                  setTank={props.setTank}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FermenterView;