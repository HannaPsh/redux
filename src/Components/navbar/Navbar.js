import React from 'react';
import { useEffect } from 'react';
import { loadUsers, loginUser } from '../../redux/users.js/userThunk';
import * as actions from '../../redux/users.js/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const Nav = styled.div`
    font-size: 1.5em;
    display: flex;
    justify-content: end;
  `;
  const ProfileName = styled.div`
    display: flex;
    align-self: center;
  `;
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  /*  const token = localStorage.getItem('token'); */
  /*   const decoded = jwtDecode(token); */

  const logOut = () => {
    localStorage.removeItem('token');

    navigate('/login');
  };

  return (
    <div>
      <Nav>
        {!user ? (
          <button>
            <Link to="/login">Login</Link>
          </button>
        ) : (
          <ProfileName>
            <Link to="/profile">{user.userName}</Link>
            <button onClick={logOut}>Logout</button>
          </ProfileName>
        )}
      </Nav>
    </div>
  );
}
