import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLogin: false, users: [] };

export const authSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { login, addUser } = authSlice.actions;
export default authSlice.reducer;
