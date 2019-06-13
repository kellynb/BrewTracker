
import {combineReducers} from 'redux';

const tanks = (state =[], action) =>{
  switch (action.type) {
    case "UPDATE":
      return [...state, action.value];
  }
}


let fermenterReducers = combineReducers({
    tanks
  })
  
export default fermenterReducers;