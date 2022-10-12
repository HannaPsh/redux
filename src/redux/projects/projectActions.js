import * as action from './prjectActionTypes';

export const projectLoadStart = () => ({
  type: action.PROJECTS_LOAD_START,
});

export const projectLoadSuccess = (projects) => ({
  type: action.PROJECTS_LOAD_SUCCESS,
  payload: projects,
});

export const projectLoadError = (errorMessage) => ({
  type: action.PROJECTS_LOAD_ERROR,
  payload: errorMessage,
});

export const OneProject = (project) => ({
  type: action.A_PROJECT_LOAD_SUCCESS,
  payload: project,
});
export const UserAssigned = (userId) => ({
  type: action.A_PROJECT_ASSIGNED,
  payload: userId,
});
