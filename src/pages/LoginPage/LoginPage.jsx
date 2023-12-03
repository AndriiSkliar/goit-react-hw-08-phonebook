import { FormLogin } from 'components/FormLogin/FormLogin';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    const email = e.userEmail.toLowerCase().trim();
    const password = e.userPassword.toLowerCase().trim();

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };

  return (
    <FormLogin onSubmit={onSubmit} />
  );
};

export default LoginPage;
