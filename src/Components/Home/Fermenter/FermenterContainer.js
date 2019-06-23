import {connect} from 'react-redux';
import {getTanks} from './FermenterActions';
import Fermenter from './Fermenter';


function mapDispatchToProps(dispatch){
   return {
    getTanks: () => dispatch(getTanks())
   }
}

export default connect(null, mapDispatchToProps)(Fermenter);