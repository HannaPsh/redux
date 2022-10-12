import React from 'react';
import LoginValidation from './Loginvalidation';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/users.js/userThunk';
import './login.css';

export default function Login() {
  const loaded = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.errorMessage);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*  const [validationError, setValidationError] = useState(null); */
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData);
  };

  function handleSubmit(event) {
    event.preventDefault();
    /* const validationErrors = LoginValidation(loginData);

    setValidationError(validationErrors);

    if (validationErrors.hasErrors) {
      return;
    } */

    dispatch(login(loginData));

    if (user) {
      navigate('/projects');
    }
  }

  return (
    <div className="content">
      <form id="login_form" className="login-form">
        <h1>Login</h1>
        {loaded && <div>Loading data...</div>}
        {error && <p className="error">{error}</p>}
        {/* {validationError && <p className="error">{validationError.password}</p>} */}
        <div className="form_div">
          <label>username:</label>
          <input
            className="input-text"
            name="userName"
            type="text"
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            id="pass"
            className="input-text"
            name="password"
            type="password"
            onChange={handleChange}
          />

          <button
            className="submit-btn"
            type="submit"
            form="login_form"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>

        <div className="register-text">
          <p>
            Not a user? Register <a href="signin">Here</a>
          </p>
        </div>
      </form>
    </div>
  );
}
