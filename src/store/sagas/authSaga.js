// React Related Imports
import { all, put, takeLatest } from 'redux-saga/effects';

// Actions
import { AuthActions } from '../redux-slices/authSlice';

// Api
import AuthService from '../../services/auth/authService';

// Utils
import HttpClientFactory from '../../utils/httpClientFactory';
import LocalStorage from '../../utils/localStorageUtils';
import AuthUtils from '../../utils/authUtils';

/**
 * Function to store the loggedIn user info in the Local Storage..
 * @param {*} loggedInData
 */

/**
 * Login
 */
function* login(action) {
  try {
    const { username, password } = action.payload;

    // Call API
    // ------------------------------------
    const loggedInData = yield AuthService.login(username, password);

    AuthUtils.storeUserInfoInLocalStorage(loggedInData);
    HttpClientFactory.reload();

    yield put(AuthActions.loginSuccess({ authInfo: loggedInData }));
  } catch (error) {
    console.log('Error :', error);
    yield put(AuthActions.loginFailure({ error: 'Login Error' }));
  }
}

// Log Out
function* logout() {
  try {
    // Clear LocalStorage
    yield LocalStorage.clear();

    // Reset HttpClientFactory
    yield HttpClientFactory.reset();
  } catch (error) {
    // TODO :: Handle error
    // console.log(error);
  }
}

/**
 * Auth Sagas
 */
export default function* root() {
  yield all([
    takeLatest(AuthActions.login.type, login),
    takeLatest(AuthActions.logout.type, logout),
  ]);
}
