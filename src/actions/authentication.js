/* eslint-disable import/prefer-default-export */
import { NavigationActions } from 'react-navigation';

import fetchApi from './../api';

export const START_AUTH = () => ({
  type: 'START_AUTH'
});

export const AUTHENTICATE_SUCCESS = payload => ({
  type: 'AUTHENTICATE_SUCCESS',
  payload
});

export const AUTHENTICATE_FAILURE = payload => ({
  type: 'AUTHENTICATE_FAILURE',
  payload
});

export const AUTHENTICATE = payload => dispatch => {
  dispatch(START_AUTH());

  return fetchApi('/api/user/login', {
    username: payload.username,
    password: payload.password
  }, 'POST').then(response => {
    dispatch(AUTHENTICATE_SUCCESS(response));
    dispatch(
      NavigationActions.navigate({
        routeName: 'Main'
      })
    );
  }).catch(err => {
    dispatch(AUTHENTICATE_FAILURE(err));
  });
};
