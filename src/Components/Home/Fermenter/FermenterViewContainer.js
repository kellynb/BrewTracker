import {connect} from 'react-redux';
import {setTank} from './FermenterActions';
import FermenterView from './FermenterView';


const mapStateToProps = (state) => {
    return {
      tanks: state.cTanks
    }
}

function mapDispatchToProps(dispatch){
  return {
   setTank: tank => dispatch(setTank(tank))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FermenterView)