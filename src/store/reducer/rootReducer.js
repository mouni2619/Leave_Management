import { combineReducers } from 'redux';

// Auth Reducer
import { AuthReducer } from '../redux-slices/authSlice';

// Error Reducer
import { ErrorReducer } from '../redux-slices/errorSlice';

// User Reducer
import { UserReducer } from '../redux-slices/userSlice';

// Dataset Reducer
import { DatasetReducer } from '../redux-slices/datasetSlice';

// Map Reducer
import { MapReducer } from '../redux-slices/mapSlice';

// Root Reducer definition
export const RootReducer = combineReducers({
  // App specific reducers go here..

  // Auth Reducer
  auth: AuthReducer,

  // Error Reducer
  error: ErrorReducer,

  // User Reducer
  users: UserReducer,

  // Dataset Reducer
  datasets: DatasetReducer,

  // Map Reducer
  maps: MapReducer,
});
