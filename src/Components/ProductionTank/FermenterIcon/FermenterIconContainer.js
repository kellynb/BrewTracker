import {connect} from 'react-redux';
import FermenterIcon from './FermenterIcon';


const mapStateToProps = (state) => {
    return {
      status: state.selectTank.status
    }
}

export default connect(mapStateToProps)(FermenterIcon);