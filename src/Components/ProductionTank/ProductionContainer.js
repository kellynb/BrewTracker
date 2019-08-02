import {connect} from 'react-redux';
import ProductionTank from './ProductionTank';


const mapStateToProps = (state) => {
    return {
      status: state.selectTank.status,
      temp: state.selectTank.tankTemp,
      number: state.selectTank.number,
      tank: state.selectTank.tank,
      close: state.selectTank.spund,
      pressure: state.selectTank.spundPressure
    }
}

export default connect(mapStateToProps)(ProductionTank);