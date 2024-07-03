// React Related Imports
import { all, put, takeLatest } from 'redux-saga/effects';

// Actions
import { AuthActions } from '../redux-slices/authSlice';

// Api
import LoginService from '../../services/auth/loginService';

// Constants
import { LocalStorageKeys } from '../../constants/generalConstants';
import PageURL from '../../urls/pageUrls';

// Utils
import HttpClientFactory from '../../utils/httpClientFactory';
import LocalStorage from '../../utils/localStorageUtils';

/**
 * Login
 */
function* login(action) {
  try {
    const { username, password, navigation } = action.payload;

    // Call API
    // ------------------------------------
    const loggedInData = LoginService.login(username, password);

    const { org: orgDetails = {}, privileges = [], token } = loggedInData;

    //setting token in localstorage
    LocalStorage.set(LocalStorageKeys.TOKEN, token);

    //store permissions in local storage
    LocalStorage.set(LocalStorageKeys.PERMISSIONS, privileges);

    //set user details in local storage
    LocalStorage.set(LocalStorageKeys.USER, JSON.stringify(loggedInData));

    // set org info
    LocalStorage.set(LocalStorageKeys.AUTH_ORG, JSON.stringify(orgDetails));
    LocalStorage.set(LocalStorageKeys.ORG_TYPE, orgDetails.type);

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
    yield localStorage.clear();

    // Reset HttpClientFactory
    yield HttpClientFactory.reset();

    // Redirect to login page
    navigate(PageURL.LoginPage);
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
    takeLatest(AuthActions.resetLogin.type, logOut),
  ]);
}
