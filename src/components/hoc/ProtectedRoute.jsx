import React from 'react';
import { Navigate } from 'react-router-dom';

// Utils
import AuthUtils from '../../utils/authUtils';

// Constants
import PageUrls from '../../constants/pageUrls';

/**
 * Routes which needs the USER Authenticated.
 */
function ProtectedRoute({ children, loginPageUrl = PageUrls.LoginPage }) {
  //If user is not authenticated
  if (!AuthUtils.isUserAuthenticated()) {
    localStorage.clear();
    return <Navigate to={loginPageUrl} />;
  }

  //TODO : Add theme support
  return <div>{children}</div>;
}

export default ProtectedRoute;
