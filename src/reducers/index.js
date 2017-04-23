import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer
});

export default rootReducer;
