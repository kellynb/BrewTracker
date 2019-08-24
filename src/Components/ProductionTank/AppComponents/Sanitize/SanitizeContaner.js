import {connect} from 'react-redux';

import Sanitize from './Sanitze';


const mapStateToProps = (state) => {
    return {
      reduxSanitize: state.selectTank.sanitize,
      reduxPPM: state.selectTank.ppm
    }
}

export default connect(mapStateToProps)(Sanitize);