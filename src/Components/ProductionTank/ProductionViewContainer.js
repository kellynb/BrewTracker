import {connect} from 'react-redux';
import ProductionView from './ProductionView';


const mapStateToProps = (state) => {
    return {
      status: state.selectTank.status
    }
}

export default connect(mapStateToProps)(ProductionView);