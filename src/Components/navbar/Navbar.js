import React from 'react';
import { useEffect } from 'react';
import { loadUsers, loginUser } from '../../redux/users.js/userThunk';
import * as actions from '../../redux/users.js/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div id="nav">
      <h1>Navbar</h1>
      {!user ? (
        <button>
          <Link to="/login">Login</Link>
        </button>
      ) : (
        <h5>{user.userName}</h5>
      )}
    </div>
  );
}
