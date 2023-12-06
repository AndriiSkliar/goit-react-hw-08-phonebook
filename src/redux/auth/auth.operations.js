import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = "";
  },
};

const toastOptions = { position: "top-center", autoClose: 3000 };

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, {rejectWithValue}) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      token.set(data.token);
      toast.success(
        "Registration succesfull. Welcome to phone book",
        toastOptions
      );

      return data;
    } catch (error) {
      toast.error(
        "Something went wrong. Please try again or log in",
        toastOptions
      );
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, {rejectWithValue}) => {
    try {
      const { data } = await instance.post('/users/login', formData);
      token.set(data.token);

      toast.success(
        "Log in successfull. Welcome back to your phone book",
        toastOptions
      );

      return data;
    } catch (error) {
      toast.error(
        "Not valid email or password. Please, try again or register new account",
        toastOptions
      );
      return rejectWithValue("Not valid email or password. Please, try again");
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
 async (_, { getState, rejectWithValue }) => {
    const { token: currentToken } = getState().auth;

    if (currentToken === null) {
      return rejectWithValue("Without token");
    }

    token.set(currentToken);
    try {
      const { data } = await instance.get('/users/current');

      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(
        "Auth state is old. Please enter to your personal cabinet again"
      )
    }
  },
  // {
  //   condition: (_, thunkApi) => {
  //     const state = thunkApi.getState();
  //     const persistToken = state.auth.token;
  //     if (!persistToken) return false;
  //     return true;
  //   },
  // }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, {rejectWithValue}) => {
    try {
      await instance.post('/users/logout');
      token.unset();
      toast.success("Log out successfull. Come back sooner", toastOptions);

    } catch (err) {
      token.unset();
      return rejectWithValue(err.message);
    }
  }
);
