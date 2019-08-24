import {connect} from 'react-redux';
import ProductionTank from './ProductionTank';
import {setTank} from './ProductionActions';


const mapStateToProps = (state) => {
    return {
      status: state.selectTank.status,
      temp: state.selectTank.tankTemp,
      number: state.selectTank.number,
      tank: state.selectTank.tank,
      close: state.selectTank.spund,
      pressure: state.selectTank.spundPressure,
      yeast2: state.selectTank.yeastDump2,
      reduxClean: state.selectTank.clean,
      reduxRunOff: state.selectTank.runOff,
      reduxSanitize: state.selectTank.sanitize,
      reduxSpund: state.selectTank.spund
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTank: tank => dispatch(setTank(tank))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionTank);