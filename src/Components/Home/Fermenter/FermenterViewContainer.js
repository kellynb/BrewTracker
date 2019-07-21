import {connect} from 'react-redux';
import {setTank} from './FermenterActions';
import {withRouter} from 'react-router-dom';
import FermenterView from './FermenterView';


const mapStateToProps = (state) => {
    return {
      tanks: state.cTanks
    }
}

function mapDispatchToProps(dispatch,props){
  return {
   setTank: tank => dispatch(setTank(tank,props.history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FermenterView))