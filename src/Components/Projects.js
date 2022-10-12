import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  loadProjects,
  getOneProject,
  assign,
} from '../redux/projects/projectsThunk';
import * as actions from '../redux/projects/projectActions';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
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

  useEffect(() => {
    dispatch(loadProjects());
  }, []);
  const dispatch = useDispatch();
  return (
    <div>
      <Title>List of Projects</Title>
      {loaded && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {projects &&
        projects.map((project) => (
          <Project key={project._id}>
            <Link
              /* to="/user" */
              onClick={() => dispatch(getOneProject(project._id))}
            >
              {project.name}
            </Link>
            {/*   <ChooseBtn
              onClick={() =>
                dispatch(assign(project._id, { userId: user._id }))
              }
            >
              Choose
            </ChooseBtn> */}
          </Project>
        ))}
    </div>
  );
}
