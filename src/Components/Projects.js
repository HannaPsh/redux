import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import {
  loadProjects,
  getOneProject,
  assign,
} from '../redux/projects/projectsThunk';
import { OneUser } from '../redux/users.js/userActions';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import styled from 'styled-components';
import store from '../redux/projects/store';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: red;
`;

const Project = styled.h5`
  text-align: start;
  color: blue;
`;

const ChooseBtn = styled.button`
  background-color: green;
  color: white;
`;

export default function Projects() {
  const loaded = useSelector((state) => state.projects.isLoading);
  const error = useSelector((state) => state.projects.errorMessage);
  const projects = useSelector((state) => state.projects.projects);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const obj = useMemo(() => {
    return store.getState().projects.projects;
  }, []); /* gör inget */

  useEffect(() => {
    dispatch(loadProjects());
    dispatch(OneUser(jwtDecode(localStorage.getItem('token')).data));
  }, []);

  return (
    <div>
      <Title>List of Projects</Title>
      {loaded && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {projects &&
        projects.map((project) => (
          <Project key={project._id}>
            <Link
              to="/project"
              onClick={() => dispatch(getOneProject(project._id))}
            >
              {/* onClick={setTimeout(
              () => dispatch(getOneProject(project._id)),
              2000
            ) */}
              {project.name}
            </Link>
            <div>{project.userId}</div>
            <ChooseBtn
              onClick={() =>
                dispatch(assign(project._id, user._id)).then(() =>
                  dispatch(loadProjects())
                )
              }
            >
              Choose
            </ChooseBtn>
          </Project>
        ))}
    </div>
  );
}
