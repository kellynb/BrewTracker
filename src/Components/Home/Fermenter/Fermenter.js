import React, { Component } from 'react';

import FermenterView from './FermenterView';

class Fermenter extends Component {

    componentDidMount () {
      this.props.getTanks()
    }
    

    render () {
        return (
            <FermenterView tanks={this.props.tanks} setTank={this.props.setTank} />
        )
    }   
    
}

export default Fermenter;