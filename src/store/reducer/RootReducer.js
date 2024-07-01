import { combineReducers } from 'redux';

// Auth Reducer
import { AuthReducer } from '../redux-slices/AuthSlice';

// Root Reducer definition
export const RootReducer = combineReducers({
  // App specific reducers go here..

  // Auth Reducer
  auth: AuthReducer,
});
