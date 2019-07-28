import {connect} from 'react-redux';
import ProductionTank from './ProductionTank';


const mapStateToProps = (state) => {
    return {
      status: state.selectTank.status
    }
}

export default connect(mapStateToProps)(ProductionTank);