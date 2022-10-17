import userService from '../../helpers.js/userService';
import * as userAction from './userActions';
import jwtDecode from 'jwt-decode';

export const loadUsers = () => async (dispatch) => {
  dispatch(userAction.usersLoadStart());

  let response = await userService.getAllUsers();
  try {
    dispatch(userAction.usersLoadSuccess(response.data));
  } catch (error) {
    dispatch(userAction.usersLoadError(error.message));
  }
};

export const login = (userData) => async (dispatch) => {
  console.log(userData);
  dispatch(userAction.usersLoadStart());
  let response = await userService.loginUser(userData);
  try {
    const decoded = jwtDecode(response.data);
    console.log(
      response.data
    ); /* ********************************************* decoded token ********************************* */
    console.log(decoded.data);

    const toLS = () => {
      return Promise.resolve(
        window.localStorage.setItem('token', JSON.stringify(response.data))
      );
    };
    toLS().then(() =>
      dispatch(
        userAction.OneUser(jwtDecode(localStorage.getItem('token')).data)
      )
    );

    console.log(jwtDecode(localStorage.getItem('token')).data);
  } catch (error) {
    dispatch(userAction.usersLoadError(error.message));
  }
};

/* export const loadUsers = () => (dispatch) => {
  dispatch(userAction.usersLoadStart()); 

  userService
    .getAllUsers()
    .then((response) => {
      dispatch(userAction.usersLoadSuccess(response.data));
    })
    .catch((error) => dispatch(userAction.usersLoadError(error.message)));
}; */

/* export const login = (userData) => (dispatch) => {
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
}; */
