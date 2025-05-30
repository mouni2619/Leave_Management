import { all, fork } from 'redux-saga/effects';

// Auth Saga
import AuthSaga from './authSaga';

// Root Saga
export default function* RootSaga() {
  yield all([
    // App specific sagas go here..

    // Auth Saga
    fork(AuthSaga),
  ]);
}
