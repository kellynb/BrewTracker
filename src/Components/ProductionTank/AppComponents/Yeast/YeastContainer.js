import {connect} from 'react-redux';
import YeastAction from './Yeast';


const mapStateToProps = (state) => {
    return {
      yeastDumpA: state.selectTank.yeastDump1,
      yeastDumpB: state.selectTank.yeastDump2
    }
}

export default connect(mapStateToProps)(YeastAction);