import {connect} from 'react-redux';
import AppBar from './AppBar';


const mapStateToProps = (state) => {
    return {
      tanks: state.cTanks
    }
}

export default connect(mapStateToProps)(AppBar);