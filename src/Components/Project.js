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

export default function Project({ id }) {
  /* useEffect(() => dispatch(getOneProject(id)), []);  const dispatch = useDispatch();*/

  const project = useSelector((state) => state.projects.project);

  console.log(project);
  return (
    <div>
      {project && (
        <div>
          <h1>{project.name}</h1>
          <h2>{project.description}</h2>
          <h3>{project.userId}</h3>
        </div>
      )}
    </div>
  );
}
