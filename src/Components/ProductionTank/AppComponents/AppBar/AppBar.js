import React from 'react';

import '../../../../App.css'

const FormBar = props => {
  const colorChange = {
    fermenting: {
      backgroundColor: '#66bb6a'
    },
    conditioning: {
      backgroundColor: '#29b6f6'
    },
    empty: {
      backgroundColor: "#8d6e63"
    },
    dirty: {
      backgroundColor: "#8d6e63"
    },
    clean: {
      backgroundColor: "#0093c4"
    },
    sanitize: {
      backgroundColor: "#78909c"
    }
  };

  return (
    <div className="statusBar" style={{backgroundColor: colorChange[props.batchStatus].backgroundColor}}>
    </div>
  );
};
export default FormBar;