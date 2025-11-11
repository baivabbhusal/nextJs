import { configureStore } from '@reduxjs/toolkit';
import  authSlice  from './auth/authslice';
import userPreferencesSlice from './userPreferences/userPreferenceSlice';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
 

export const store = configureStore({
  reducer: {
    auth:authSlice,
    userPreferences:userPreferencesSlice,
  },
})
export {store}