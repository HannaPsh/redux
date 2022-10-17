import projectsService from '../../helpers.js/projectsService';
import * as projectAction from './projectActions';

export const loadProjects = () => async (dispatch) => {
  dispatch(projectAction.projectLoadStart());
  let response = await projectsService.getAllProjects();
  try {
    dispatch(projectAction.projectLoadSuccess(response.data));
  } catch (error) {
    dispatch(projectAction.projectLoadError(error.message));
  }
};

export const getOneProject = (id) => async (dispatch) => {
  dispatch(projectAction.projectLoadStart());
  const response = await projectsService.getOneProject(id);
  console.log(response.data);
  try {
    dispatch(projectAction.OneProject(response.data[0]));
    console.log(id, response.data[0]);
  } catch (error) {
    dispatch(projectAction.projectLoadError(error.message));
  }
};

export const assign = (projectId, usersId) => async (dispatch) => {
  dispatch(projectAction.projectLoadStart());
  console.log(projectId, usersId);

  const response = await projectsService.send_user_id(projectId, usersId);
  console.log('response' + response);

  try {
    dispatch(projectAction.UserAssignedAction(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(projectAction.projectLoadError(error.message));
  }
};
