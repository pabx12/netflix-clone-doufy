import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: {},
  loading:false,
  isLogin:false,
  error: '',
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginPending: (state) => {
     state.loading = true
    },
    loginSuccess: (state, action) => {
      return {...state, user:action.payload, isLogin:true, loading:false}
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    loginFail: (state, action) => {
      return {...state, error:action.payload, loading:false}
    },
    registerPending: (state) => {
      state.loading = true
     },
     registerSuccess: (state) => {
       return {...state, isLogin:true, loading:false}
     },
     // Use the PayloadAction type to declare the contents of `action.payload`
     registerFail: (state, action) => {
       return {...state, error:action.payload, loading:false}
     },
  },
});

export const { loginPending, loginSuccess, loginFail, registerPending, registerSuccess, registerFail } = authSlice.actions;

export const selectIsLogin = (state) => state.auth.isLogin;
export const selectUser = (state) => state.auth.user;


export default authSlice.reducer;
