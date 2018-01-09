import popups from './popups';
import user from './auth';
import currentGames from './currentGames';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({popups, user, currentGames, routing: routerReducer});

export default rootReducer;
