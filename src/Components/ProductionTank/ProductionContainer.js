import {connect} from 'react-redux';
import ProductionTank from './ProductionTank';


const mapStateToProps = (state) => {
    return {
      status: state.selectTank.status,
      temp: state.selectTank.tankTemp,
      number: state.selectTank.number,
      tank: state.selectTank.tank
    }
}

export default connect(mapStateToProps)(ProductionTank);