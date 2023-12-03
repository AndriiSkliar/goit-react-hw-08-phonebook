import { FormRegister } from 'components/FormRegister/FormRegister';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    const name = e.userName.toLowerCase().trim();
    const email = e.userEmail.toLowerCase().trim();
    const password = e.userPassword.toLowerCase().trim();

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(formData));
  }

  return (
    <FormRegister onSubmit={onSubmit} />
  );
};

export default RegisterPage;
