// React Related Imports
import { all, put, takeLatest } from 'redux-saga/effects';

// Actions
import { AuthActions } from '../redux-slices/authSlice';

// Api
import AuthService from '../../services/auth/authService';

// Constants
import { LocalStorageKeys } from '../../constants/generalConstants';
import PageUrls from '../../constants/pageUrls';

// Utils
import HttpClientFactory from '../../utils/httpClientFactory';
import LocalStorage from '../../utils/localStorageUtils';

/**
 * Function to store the loggedIn user info in the Local Storage..
 * @param {*} loggedInData
 */
function storeUserInfoInLocalStorage(loggedInData) {
  const { org: orgDetails = {}, privileges = [], token } = loggedInData;

  //setting token in local storage
  LocalStorage.set(LocalStorageKeys.TOKEN, token);

  //store permissions in local storage
  LocalStorage.set(LocalStorageKeys.PERMISSIONS, privileges);

  //set user details in local storage
  LocalStorage.set(LocalStorageKeys.USER, JSON.stringify(loggedInData));

  // set org info
  LocalStorage.set(LocalStorageKeys.AUTH_ORG, JSON.stringify(orgDetails));
  LocalStorage.set(LocalStorageKeys.ORG_TYPE, orgDetails.type);
}

/**
 * Login
 */
function* login(action) {
  try {
    const { username, password, navigation } = action.payload;

    // Call API
    // ------------------------------------
    const loggedInData = yield AuthService.login(username, password);

    storeUserInfoInLocalStorage(loggedInData);

    // Reload HttpClientFactory
    HttpClientFactory.reload();

    // TODO: navigate to the respective Page
    //navigation.navigate(pageURL);

    // dispatching action
    yield put(AuthActions.loginSuccess({ authInfo: loggedInData }));
  } catch (error) {
    yield put(AuthActions.loginFailure({ error: 'Login Error' }));
  }
}

// Log Out
function* logOut(action) {
  try {
    const { navigate } = action.payload;

    // Clear LocalStorage
    yield LocalStorage.clear();

    // Reset HttpClientFactory
    yield HttpClientFactory.reset();

    // Redirect to login page
    navigate(PageUrls.LoginPage);
  } catch (error) {
    // TODO :: Handle error
    console.log(error);
  }
}

/**
 * Auth Sagas
 */
export default function* root() {
  yield all([
    takeLatest(AuthActions.login.type, login),
    takeLatest(AuthActions.logout.type, logOut),
  ]);
}
