import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './ReduxSignUp/ReduxSignUp.jsx'; 

const store = configureStore({
  reducer: {
    signUp: signUpReducer, 
  },
});

export default store;
