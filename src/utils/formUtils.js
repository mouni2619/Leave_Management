/**
 * -------------------------------------------------------
 * Get all the input values from form as JSON
 */
function getFormDataAsJSON(event) {
  // if no event, just return null
  if (!event) {
    return null;
  }

  // getting the values of all inputs from entries() function
  const data = new FormData(event.target);
  const formDataJSON = Object.fromEntries(data.entries());

  // return
  return formDataJSON;
}

/**
 * -------------------------------------------------------------
 * Function to replace all empty strings to null
 * @params : data : information Object (simple and nested objects)
 */
function replaceEmptyStringsToNull(data = {}) {
  const clonedData = { ...data };
  const isDataPresent = Boolean(Object.keys(clonedData).length);

  // if no keys (no data), just return {}
  if (!isDataPresent) {
    return {};
  }

  // result to be returned
  const results = {};

  // nested objects
  for (const key in clonedData) {
    if (clonedData[key] === '') {
      // updating with "null"
      results[key] = null;
    } else if (
      typeof clonedData[key] === 'object' &&
      clonedData[key] !== null
    ) {
      // recursive for nested objects
      results[key] = replaceEmptyStringsToNull(clonedData[key]);
    } else {
      // return same
      results[key] = clonedData[key];
    }
  }

  // updated result
  return results;
}

// --------------------------------------------------------------------------
const FormUtils = {
  getFormDataAsJSON,
  replaceEmptyStringsToNull,
};

// export default
export default FormUtils;
