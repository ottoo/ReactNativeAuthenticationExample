import { connect } from 'react-redux';
import AppNavigator from './appnavigator';
import { push, pop } from './../../actions';

function mapStateToProps (state) {
  return {
    navigation: state.navigationReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigator);
