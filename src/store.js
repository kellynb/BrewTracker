import {createStore, applyMiddleware, compose} from 'redux';
import fermenterReducers from './Components/Home/Fermenter/FermenterReducers';
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store= createStore(fermenterReducers, storeEnhancers(applyMiddleware(thunk)));

export default store;

