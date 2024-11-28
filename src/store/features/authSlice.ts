import {createSlice} from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

export interface AuthState {
    userInfo: any,
    userToken: string | null,
    error: string | null,
    isAuth: boolean,
}

const initialState: AuthState = {
    userInfo: {},
    userToken: null,
    error: null,
    isAuth: false, 
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.userToken = action.payload.userToken;
      Cookies.set('main', action.payload.userToken);
      state.isAuth = true;
    },
    logout: (state) => {
      state.userInfo = {};
      state.userToken = null;
      state.isAuth = false;
    },
  },
});
export const { loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
