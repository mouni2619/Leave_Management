import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  authUser: {},
  loginLoading: false,
  loginError: '',
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    //----Action to login-----//
    login: (state) => {
      state.loginLoading = true;
      state.loginError = '';
    },

    loginSuccess: (state, action) => {
      state.loginLoading = false;
      state.authUser = action.payload.authInfo;
    },

    loginFailure: (state, action) => {
      state.loginLoading = false;
      state.loginError = action.payload.error;
    },

    //---- clear Login Details -----//
    logout: () => initialState,
  },
});

// Reducer
export const AuthReducer = authSlice.reducer;

// Actions
export const AuthActions = authSlice.actions;
