import * as action from './prjectActionTypes';
import { createSelector } from 'reselect';

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

export const OneProject = (id) => ({
  type: action.A_PROJECT_LOAD_SUCCESS,
  payload: id,
});
export const UserAssignedAction = (response) => ({
  type: action.A_USER_ASSIGNED,
  /* payload: userId, */
});

/* export const getProjectssByUser = (state, userId) => {
  state.projects.projects.filter((project) => project.userId === userId);
}; */
/*   createSelector(
    (state) => state.projects.userId,
    (projects) => projects.filter((project) => project.userId === userId)
  );
 */
