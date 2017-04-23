const initialState = {
  token: null,
  userId: null,
  username: null,
  isLoading: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_AUTH':
      return {
        ...initialState,
        isLoading: true
      };
    case 'AUTHENTICATE_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'AUTHENTICATE_FAILURE':
      return initialState;
    default:
      return state;
  }
};

export default authenticationReducer;
