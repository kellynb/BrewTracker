import React, { Component } from 'react';
import FermenterView from './FermenterView';

class Fermenter extends Component {

    componentDidMount () {
      this.props.getTanks()
    }
    // use sort to change into one line

    render () {
        return (
            <FermenterView tanks={this.props.tanks} setTank={this.props.setTank}/>
        )
    }   
    
}

export default Fermenter;