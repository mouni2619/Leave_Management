// React Related Imports
import { all, put, takeLatest } from 'redux-saga/effects';

// Actions
import { AuthActions } from '../redux-slices/AuthSlice';

// Api
// import AuthAPI from '../api/AuthAPI';

/**
 * Login
 */
function* login() {
  try {
    // Call API
    // ------------------------------------

    // dummy auth info
    // todo:: remove when integrate with api
    const authInfo = {
      name: 'AdMavin',
      org: 'Admavin Pvt Ltd.',
    };

    // dispatching action
    yield put(AuthActions.loginSuccess({ authInfo }));
  } catch (error) {
    yield put(AuthActions.loginFailure({ error: 'Login Error' }));
  }
}

/**
 * Auth Sagas
 */
export default function* root() {
  yield all([takeLatest(AuthActions.login.type, login)]);
}
