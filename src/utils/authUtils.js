/**
 * Authentication and Authorization related Utilities
 */
import jwt_decode from 'jwt-decode';

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

const AuthUtils = {
  isTokenExpired,
};

// default export
export default AuthUtils;
