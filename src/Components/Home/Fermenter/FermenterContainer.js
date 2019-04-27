import React, { Component } from 'react';
import FermenterView from './FermenterView';
import {getFermenters} from './FermenterFetch';

class FermenterContainer extends Component {
    state = {
        cTanks : [],
        briteTanks: []
    }

    componentDidMount () {
        getFermenters(this);
    }

    render () {
        return (
            <FermenterView state={this.state.cTanks}/>
        )
    }   
    
}

export default FermenterContainer;