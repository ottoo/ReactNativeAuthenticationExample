import AppNavigator from './../components/AppNavigatorWithState/AppNavigator';

const navigationReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
