import { configureStore } from '@reduxjs/toolkit';
import  authSlice  from './auth/authslice';
import userPreferencesSlice from './userPreferences/userPreferenceSlice';


export const store = configureStore({
  reducer: {
    auth:authSlice,
    userPreferences:userPreferencesSlice,
  },
})
export {store}