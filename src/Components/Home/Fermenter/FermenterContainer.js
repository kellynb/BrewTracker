import {connect} from 'react-redux';
import {update} from './FermenterActions';
import Fermenter from './Fermenter';


const mapDispatchToProps = {
    tanks: update
}

const mapStateToProps = (state) => {
    return{
      clicks: state.clicks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fermenter);