import * as action from './prjectActionTypes';

let inititalState = {
  isLoading: false,
  projects: null,
  errorMessage: null,
  project: null,
};
const projectReducer = (state = inititalState, actions) => {
  switch (actions.type) {
    case action.PROJECTS_LOAD_START:
      return {
        ...state,
        isLoading: true,
      };
    case action.PROJECTS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: actions.payload,
      };
    case action.PROJECTS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: actions.payload,
      };
    case action.A_PROJECT_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        project: actions.payload,
      };
    case action.A_PROJECT_ASSIGNED:
      return {
        ...state,
        isLoading: false,
        project: actions.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
