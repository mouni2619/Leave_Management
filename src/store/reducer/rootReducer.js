import { combineReducers } from 'redux';

// Auth Reducer
import { AuthReducer } from '../redux-slices/authSlice';

// Error Reducer
import { ErrorReducer } from '../redux-slices/errorSlice';

// Absence Reducer
import { AbsenceReducer } from '../redux-slices/absenceSlice';

// Root Reducer definition
export const RootReducer = combineReducers({
  // App specific reducers go here..

  // Auth Reducer
  auth: AuthReducer,

  // Error Reducer
  error: ErrorReducer,

  // Absence Reducer
  absence: AbsenceReducer,
});
