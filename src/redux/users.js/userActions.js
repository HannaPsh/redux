import * as action from './userActionTypes';

export const usersLoadStart = () => ({
  type: action.USERS_LOAD_START,
});

export const usersLoadSuccess = (users) => ({
  type: action.USERS_LOAD_SUCCESS,
  payload: users,
});

export const usersLoadError = (errorMessage) => ({
  type: action.USERS_LOAD_ERROR,
  payload: errorMessage,
});

export const OneUser = (user) => ({
  type: action.A_USER_LOAD_SUCCESS,
  payload: user,
});
