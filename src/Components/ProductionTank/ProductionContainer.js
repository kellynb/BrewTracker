import {connect} from 'react-redux';
import ProductionTank from './ProductionTank';
import {setTank} from './ProductionActions';


const mapStateToProps = (state) => {
   const currentTank = state.selectTank;
   const currentState = {
      prevStatus: currentTank.prevStatus, 
      status: currentTank.status,
      temp: currentTank.tankTemp,
      brix: currentTank.brix,
      fBrix: currentTank.fermentingBrix,
      number: currentTank.number,
      spundPressure: currentTank.spundPressure,
      yeastDump1: currentTank.yeastDump1,
      yeastDump2: currentTank.yeastDump2,
      cip1: currentTank.cip1,
      cip2: currentTank.cip2,
      clean: currentTank.clean,
      sanitize: currentTank.sanitize,
      spund: currentTank.spund,
      tank: currentTank.tank,
      ppm: currentTank.ppm,
      conditioning: currentTank.conditioning
   }
    return {currentState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTank: tank => dispatch(setTank(tank))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionTank);