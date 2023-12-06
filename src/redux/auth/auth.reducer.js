import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, registerThunk, refreshThunk, logOutThunk } from "./auth.operations";

  const initialState = {
    isLoading: false,
    error: null,
    authenticated: false,
    token: null,
    userData: null,
    isRefresh: true,
  }

const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {
  },

  extraReducers: builder =>
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        state.isLoading = false;
        state.authenticated = true;
        state.token = token;
        state.userData = user;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        state.isLoading = false;
        state.authenticated = true;
        state.token = token;
        state.userData = user;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefresh = false;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          refreshThunk.pending,
          logOutThunk.pending
        ),
       state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          refreshThunk.rejected,
          logOutThunk.rejected
        ),
       (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
      })
});

export const authReducer = authSlice.reducer;
