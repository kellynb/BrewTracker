import React, { Component } from 'react';
import FermenterView from './FermenterView';
import {getFermenters} from './FermenterFetch';

class Fermenter extends Component {
    state = {
        cTanks : [],
        briteTanks: []
    }

    componentDidMount () {
        getFermenters(this)
            .then(response => response.json())
                .then(data => {
                    // this.props.tanks
                        this.setState({cTanks: [...data]});
        })
    }

    render () {
        return (
            <FermenterView state={this.state.cTanks}/>
        )
    }   
    
}

export default Fermenter;