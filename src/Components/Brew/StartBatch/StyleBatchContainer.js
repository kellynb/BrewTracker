import {connect} from "react-redux";
import StyleBatch from './StyleBatch';

const mapStateToProps = (state) => {
    return {
      emptyTanks: state.emptyCTanks
    }
}

export default connect(mapStateToProps)(StyleBatch);