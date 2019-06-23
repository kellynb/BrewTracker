
import {combineReducers} from 'redux';

const cTanks = (state = [], action) =>{
  switch (action.type) {
    case "GET_CTANKS":
      return action.value;
    default:
      return state;
  }
}


let fermenterReducers = combineReducers({
    cTanks
  })
  
export default fermenterReducers;