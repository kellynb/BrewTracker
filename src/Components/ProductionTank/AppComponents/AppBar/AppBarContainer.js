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

function mapDispatchToProps(dispatch){
  return {
   changeStatus: () => dispatch(setStatus())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);