import {connect} from 'react-redux';
import YeastAction from './Yeast';


const mapStateToProps = (state) => {
    return {
      yeastDump1Redux: state.selectTank.yeastDump1,
      yeastDump2Redux: state.selectTank.yeastDump2
    }
}

export default connect(mapStateToProps)(YeastAction);