import {connect} from 'react-redux';
import Brix from './Brix';


const mapStateToProps = (state) => {
    return {
      brix: state.selectTank.brix
    }
}

export default connect(mapStateToProps)(Brix);