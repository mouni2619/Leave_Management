/**
 * ---------------------------------------------------------------------
 * getErrorAndStatusCode
 * @param {*} error  : api error
 * @returns object of errorMessage and statusCode
 */
function getErrorAndStatusCode(error) {
  // default error object
  const defaultErrorObject = {
    errorMessage: '',
    statusCode: false,
  };

  // from Error.response
  if (error.response) {
    // status code
    const statusCode = error.response?.status;

    // error message
    const { message: errorMessage } = error.response?.data || {};

    // return
    return { errorMessage, statusCode };
  }

  // else return default
  return defaultErrorObject;
}

// --------------------------------------------------------------------
const ErrorUtils = {
  getErrorAndStatusCode,
};

// export default
export default ErrorUtils;
