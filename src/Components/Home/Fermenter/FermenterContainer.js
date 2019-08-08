import {connect} from 'react-redux';
import {getTanks,setTank} from './FermenterActions';
import {withRouter} from 'react-router-dom';
import Fermenter from './Fermenter';


function mapDispatchToProps(dispatch, props){
      return {
      getTanks: () => dispatch(getTanks()),
      setTank: tank => dispatch(setTank(tank, props.history))
      }
   }


   const mapStateToProps = (state) => {
      return {
         tanks: state.cTanks
      }
   }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Fermenter));