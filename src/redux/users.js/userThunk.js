import userService from '../../helpers.js/userService';
import * as userAction from './userActions';

export const loadUsers = () => (dispatch) => {
  dispatch(userAction.usersLoadStart()); /* () - will write an object */

  userService
    .getAllUsers()
    .then((response) => {
      dispatch(userAction.usersLoadSuccess(response.data));
    })
    .catch((error) => dispatch(userAction.usersLoadError(error.message)));
};

export const login = (userData) => (dispatch) => {
  console.log(userData);
  dispatch(userAction.usersLoadStart());

  userService
    .loginUser(userData)
    .then((response) => {
      console.log(userData);
      console.log(response.data);
      dispatch(userAction.OneUser(response.data[0]));
      window.localStorage.setItem('user', JSON.stringify(response.data[0]));
    })
    .catch((error) => {
      console.log(error);
      if (error.code === 'ERR_BAD_REQUEST') {
        dispatch(userAction.usersLoadError('User not found'));
      }
    });
};
