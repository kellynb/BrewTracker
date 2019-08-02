import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {cTanks, emptyCTanks, selectTank} from './Reducers';
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({cTanks, emptyCTanks, selectTank})

let store= createStore(reducers, storeEnhancers(applyMiddleware(thunk)));

export default store;

