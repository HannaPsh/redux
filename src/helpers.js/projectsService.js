import axios from 'axios';

class ProjectsService {
  getAllProjects = () => axios.get('http://localhost:3000/api/projects/');
  getOneProject = (id) => axios.get(`http://localhost:3000/api/projects/${id}`);
  send_user_id = (projectId, usersId) =>
    axios.patch(`http://localhost:3000/api/projects/assign_user/${projectId}`, {
      userId: usersId,
    });
}

export default new ProjectsService();
