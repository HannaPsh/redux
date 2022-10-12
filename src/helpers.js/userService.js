import axios from 'axios';

class UsersService {
  getAllUsers = () => axios.get('http://localhost:3000/api/users/');
  loginUser = (userData) =>
    axios.post('http://localhost:3000/api/users/login', userData);
}

export default new UsersService();
