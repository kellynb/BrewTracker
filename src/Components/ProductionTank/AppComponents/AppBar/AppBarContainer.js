import {connect} from 'react-redux';
import AppBar from './AppBar';


const mapStateToProps = (state) => {
    return {
      tank: state.selectTank.tank,
      number: state.selectTank.number
    }
}

export default connect(mapStateToProps, null)(AppBar);