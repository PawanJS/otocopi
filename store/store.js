import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import userInfo from './auth/authSlice';

const combinedReducer = combineReducers({
  userInfo,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      userInfo: {
        isLogin: action.payload.userInfo.isLogin,
        users: [...action.payload.userInfo.users, ...state.userInfo.users],
      },
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () => configureStore({ reducer: masterReducer });
export const wrapper = createWrapper(makeStore, { debug: true });
