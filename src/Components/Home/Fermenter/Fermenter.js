import React, { Component } from 'react';
import FermenterView from './FermenterView';

class Fermenter extends Component {

    componentDidMount () {
      this.props.getTanks()
    }

    
    orderTank = () => {
        for(let i=0, w=1; w<this.props.tanks.length; i++, w++) {
            let firstItem = this.props.tanks[i].tank;
            let secondItem = this.props.tanks[w].tank;
            

            if(firstItem > secondItem) {
                let switchObjA = this.props.tanks[i];
                let switchObjB = this.props.tanks[w]
                this.props.tanks[w] = switchObjA
                this.props.tanks[i] = switchObjB
                this.orderTank()
            }
        }
    }

    // use sort to change into one line

    render () {
        // Set tank order from database 
        this.orderTank();
        return (
            <FermenterView tanks={this.props.tanks} setTank={this.props.setTank}/>
        )
    }   
    
}

export default Fermenter;