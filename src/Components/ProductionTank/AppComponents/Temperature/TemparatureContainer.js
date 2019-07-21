import {connect} from 'react-redux';
import TemperatureList from './Temperature';


const mapStateToProps = (state) => {
    return {
      temp: state.selectTank.tankTemp
    }
}

export default connect(mapStateToProps)(TemperatureList);