import React, { Component } from 'react';
import FermenterView from './FermenterViewContainer';

class Fermenter extends Component {

    componentDidMount () {
      this.props.getTanks()
    }

    render () {        
        return (
            <FermenterView/>
        )
    }   
    
}

export default Fermenter;