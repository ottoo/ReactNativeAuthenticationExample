import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  navigation: navigationReducer
});

export default rootReducer;
