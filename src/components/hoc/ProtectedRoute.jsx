import React from 'react';
import { Navigate } from 'react-router-dom';

// Utils
import AuthUtils from '../utils/authUtils';
import LocalStorage from '../utils/localStorageUtils';

// constants
import { LocalStorageKeys } from '../constants/generalConstants';
import PageUrls from '../constants/pageUrls';

// Private Methods
// --------------------------------------------------------------------------

function isUserAuthenticated() {
  const token = LocalStorage.get(LocalStorageKeys.TOKEN);
  const userPrivileges = LocalStorage.get(LocalStorageKeys.PERMISSIONS);

  // TODO : For Now userPrivileges.length >= 0 because its empty.
  const isUserAuthenticated =
    token && userPrivileges.length >= 0 && !AuthUtils.isTokenExpired(token);
  return isUserAuthenticated;
}

/**
 * Routes which needs the USER Authenticated.
 */
function ProtectedRoute({ children, loginPageUrl = PageUrls.LoginPage }) {
  //If user is not authenticated
  if (!isUserAuthenticated()) {
    localStorage.clear();
    return <Navigate to={loginPageUrl} />;
  }

  //TODO : Add theme support
  return <div>{children}</div>;
}

export default ProtectedRoute;
