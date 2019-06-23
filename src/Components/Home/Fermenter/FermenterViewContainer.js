import {connect} from 'react-redux';
import FermenterView from './FermenterView';


const mapStateToProps = (state) => {
    return {
      tanks: state.cTanks
    }
}

export default connect(mapStateToProps)(FermenterView)