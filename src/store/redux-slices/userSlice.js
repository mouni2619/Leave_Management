import { createSlice } from '@reduxjs/toolkit';
import { USER_LIST_TABLE_ROWS } from '../../constants/userConstants';

const initialState = {
  usersList: USER_LIST_TABLE_ROWS,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.usersList.push({
        key: state.usersList.length + 1,
        ...action.payload,
        isActive: true,
        role: 'VIEWER',
      });
    },

    updateUser: (state, action) => {
      const { userId, data } = action.payload;
      const index = state.usersList.findIndex((user) => user.key === userId);
      if (index !== -1) {
        state.usersList[index] = { ...data, key: userId };
      }
    },

    updateUserStatus: (state, action) => {
      const { userId, status } = action.payload;
      const index = state.usersList.findIndex((user) => user.key === userId);
      if (index !== -1) {
        state.usersList[index] = {
          ...state.usersList[index],
          isActive: status,
        };
      }
    },

    updateUserPassword: (state, action) => {
      const { userId, newPassword } = action.payload;
      const index = state.usersList.findIndex((user) => user.key === userId);
      if (index !== -1) {
        state.usersList[index] = {
          ...state.usersList[index],
          password: newPassword,
        };
      }
    },

    updateUserRole: (state, action) => {
      const { userId, role } = action.payload;
      const index = state.usersList.findIndex((user) => user.key === userId);
      if (index !== -1) {
        state.usersList[index] = { ...state.usersList[index], role };
      }
    },
  },
});

export const UserReducer = userSlice.reducer;

export const UserActions = userSlice.actions;
