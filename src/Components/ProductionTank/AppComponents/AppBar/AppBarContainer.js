import {connect} from 'react-redux';
import AppBar from './AppBar';
import {setStatus} from './AppBarActions';


const mapStateToProps = (state) => {
    return {
      tank: state.selectTank.tank,
      status: state.selectTank.status,
      number: state.selectTank.number
    }
}

export default connect(mapStateToProps, null)(AppBar);