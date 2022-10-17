import React from 'react';
import { useEffect, useState } from 'react';
import { loadUsers } from '../redux/users.js/userThunk';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/projects/store';
import { Link } from 'react-router-dom';
import { getOneProject } from '../redux/projects/projectsThunk';

export default function Profile() {
  const dispatch = useDispatch;
  const user = useSelector((state) => state.auth.user);
  /* const { userId } = useSelector((state) => state.projects.projects); */
  const [name, setName] = useState(user.userName);
  const [psw, setPsw] = useState(user.password);
  const [mail, setMail] = useState(user.email);

  const [filter, setFilter] = useState(true);

  const myProjects = store
    .getState()
    .projects.projects.filter((project) => project.userId.includes(user._id));
  console.log(myProjects);
  console.log(
    store
      .getState()
      .projects.projects.filter((project) => project.userId.includes(user._id))
  );
  /*  useEffect(() => {
    dispatch(loadUsers());
  }, []); */
  return (
    <div>
      {user && (
        <form id="form" className="form">
          <label for="name">Name: </label>
          <input id="name" type="text" value={user.userName}></input>
          <br />
          <label for="password">Password: </label>
          <input id="password" type="password" value={user.password}></input>
          <br />
          <label for="email"> Email: </label>
          <input id="email" type="text" value={user.email}></input>
        </form>
      )}
      <section>
        {' '}
        <h1>My Projects:</h1>
        <h5>{myProjects.length}</h5>
        {filter &&
          myProjects.map((project) => (
            <div>
              <Link
                to="/project"
                key={project._id}
                onClick={() => dispatch(getOneProject(project._id))}
              >
                {project.name}
              </Link>
            </div>
          ))}
      </section>
    </div>
  );
}
