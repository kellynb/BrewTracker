import {connect} from 'react-redux';
import Brix from './Brix';


const mapStateToProps = (state) => {
    return {
      brix: state.selectTank.brix,
      fBrix: state.selectTank.fermentingBrix
    }
}

export default connect(mapStateToProps)(Brix);