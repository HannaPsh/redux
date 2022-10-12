import * as action from './userActionTypes';

let inititalState = {
  isLoading: false,
  errorMessage: null,
  user: null,
  users: null,
};
const userReducer = (state = inititalState, actions) => {
  switch (actions.type) {
    case action.USERS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        user: null,
        users: null,
      };
    case action.USERS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: actions.payload,
        users: null,
      };
    case action.USERS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: actions.payload,
        users: null,
      };
    case action.A_USER_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: actions.payload,
        users: null,
      };

    default:
      return state;
  }
};

export default userReducer;
