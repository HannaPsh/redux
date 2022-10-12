import axios from 'axios';

class ProjectsService {
  getAllProjects = () => axios.get('http://localhost:3000/api/projects/');
  getOneProject = (id) => axios.get(`http://localhost:3000/api/projects/${id}`);
  assigningUser = (projectId, userId) =>
    axios.patch(`http://localhost:3000/api/projects/assign_user/${projectId}`, {
      userId,
    });
}

export default new ProjectsService();
