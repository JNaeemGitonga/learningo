import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import learnReducer from './reducers';
import twoReducer from './reducers/index2';
import {routerMiddleware,routerReducer} from 'react-router-redux'; 
import createHistory from 'history/createBrowserHistory';

const combinedReducer = combineReducers({learnReducer,twoReducer,router:routerReducer});
export const history =createHistory();
const middleWare= routerMiddleware(history);
const store = createStore(combinedReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk,middleWare)));
export default store
