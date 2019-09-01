import {connect} from 'react-redux';
import Spund from './Spund';


const mapStateToProps = (state) => {
    return {
      reduxSpund: state.selectTank.spund,
      reduxPressure: state.selectTank.spundPressure
    }
}

export default connect(mapStateToProps)(Spund);