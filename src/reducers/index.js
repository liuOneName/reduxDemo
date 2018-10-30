import { combineReducers } from 'redux';
import colorReducer from './colorReducer';
import stringReducer from './stringReducer';

const allReducers = {
    color: colorReducer,
    string: stringReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;