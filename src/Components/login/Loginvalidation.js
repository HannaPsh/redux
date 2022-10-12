import React from 'react';

const LoginValidation = (user) => {
  let errors = {};
  let hasErrors = false;

  if (!user.userName) {
    errors['userName'] = 'Please enter valid username.';
    hasErrors = true;
  }

  console.log('Password', user.password);
  if (!user.password) {
    errors.password = 'Password is required';
    hasErrors = true;
  } else if (user.password.length < 5) {
    errors.password = 'Password must be more than five characters';
    hasErrors = true;
  }

  errors.hasErrors = hasErrors;
  console.log(errors);
  return errors;
};

export default LoginValidation;
