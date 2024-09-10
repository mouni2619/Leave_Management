/**
 * Authentication and Authorization related Utilities
 */
import jwt_decode from 'jwt-decode';
import LocalStorage from './localStorageUtils';

// Constants
import { LocalStorageKeys } from '../constants/generalConstants';

// Utilities
// ----------------------------------------------------------------------------

/**
 * Check if a token is expired
 * @param {*} authToken
 * @returns
 */
function isTokenExpired(authToken) {
  // Decode
  const decodedJwt = jwt_decode(authToken);

  // Compare Expiry timestamp with Now
  const isExpired = decodedJwt.exp * 1000 < Date.now();
  return isExpired;
}

function getToken() {
  const token = LocalStorage.get(LocalStorageKeys.TOKEN) || '';
  return token;
}

function isUserAuthenticated() {
  const token = LocalStorage.get(LocalStorageKeys.TOKEN);

  const isUserAuthenticated = token && !isTokenExpired(token);
  return isUserAuthenticated;
}

/**
 * Function to store the loggedIn user info in the Local Storage..
 * @param {*} loggedInData
 */
function storeUserInfoInLocalStorage(loggedInData) {
  const { userId, token, org, firstName, lastName } = loggedInData;

  //setting token in local storage
  LocalStorage.set(LocalStorageKeys.TOKEN, token);

  //set user details in local storage
  LocalStorage.set(LocalStorageKeys.FIRST_NAME, firstName);
  LocalStorage.set(LocalStorageKeys.LAST_NAME, lastName);
  LocalStorage.set(LocalStorageKeys.USER_ID, JSON.stringify(userId));

  // set org info
  LocalStorage.set(LocalStorageKeys.AUTH_ORG, JSON.stringify(org));
}

function getUserId() {
  // Fetch user Id from the local storage..
  const userId = LocalStorage.get(LocalStorageKeys.USER_ID) || '';
  return userId;
}

function getOrgId() {
  // Fetch Org Id from the local storage..
  const { id: orgId } = LocalStorage.get(LocalStorageKeys.AUTH_ORG) || '';
  return orgId;
}

const AuthUtils = {
  isTokenExpired,
  getToken,
  isUserAuthenticated,
  storeUserInfoInLocalStorage,
  getUserId,
  getOrgId,
};

// default export
export default AuthUtils;
