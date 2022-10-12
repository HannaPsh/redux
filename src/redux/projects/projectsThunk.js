import projectsService from '../../helpers.js/projectsService';
import * as projectAction from './projectActions';

export const loadProjects = () => (dispatch) => {
  dispatch(projectAction.projectLoadStart()); /* () - will write an object */

  projectsService
    .getAllProjects()
    .then((response) => {
      dispatch(projectAction.projectLoadSuccess(response.data));
    })
    .catch((error) => dispatch(projectAction.projectLoadError(error.message)));
};
export const getOneProject = (id) => (dispatch) => {
  dispatch(projectAction.projectLoadStart());

  projectsService
    .getOneProject(id)
    .then((response) => {
      console.log(id, response.data);
      dispatch(projectAction.OneProject(response.data));
      console.log(id);
    })
    .catch((error, response) => {
      console.log(id, response);
      dispatch(projectAction.projectLoadError(error.message));
    });
};

export const assign = (projectId, userId) => (dispatch) => {
  dispatch(projectAction.projectLoadStart());

  projectsService
    .assigningUser(projectId, userId)
    .then(() => {
      console.log(projectId, userId);
      dispatch(projectAction.UserAssigned(projectId, userId));
    })
    .catch((error) => dispatch.projectLoadError(error.message));
};
