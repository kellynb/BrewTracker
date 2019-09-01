import {connect} from 'react-redux';

import CIP from './CIP';


const mapStateToProps = (state) => {
    return {
      reduxDate1: state.selectTank.cip1,
      reduxDate2: state.selectTank.cip2,
      reduxClean: state.selectTank.clean
    }
}

export default connect(mapStateToProps)(CIP);