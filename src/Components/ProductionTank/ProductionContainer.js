import {connect} from 'react-redux';
import ProductionTank from './ProductionTank';
import {setTank} from './ProductionActions';


const mapStateToProps = (state) => {
   const currentTank = state.selectTank;
   const currentState = {
      status: currentTank.status,
      temp: currentTank.tankTemp,
      brix: currentTank.brix,
      fermentingBrix: currentTank.fermentingBrix,
      number: currentTank.number,
      tank: currentTank.tank,
      close: currentTank.spund,
      spundPressure: currentTank.spundPressure,
      yeastDump1: currentTank.yeastDump1,
      yeastDump2: currentTank.yeastDump2,
      cip1: currentTank.cip1,
      cip2: currentTank.cip2,
      clean: currentTank.clean,
      runOff: currentTank.runOff,
      sanitize: currentTank.sanitize,
      spund: currentTank.spund
   }
    return {currentState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTank: tank => dispatch(setTank(tank))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionTank);