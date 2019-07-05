import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {cTanks, emptyCTanks} from './Components/Home/Fermenter/FermenterReducers';
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({cTanks, emptyCTanks})

let store= createStore(reducers, storeEnhancers(applyMiddleware(thunk)));

export default store;

