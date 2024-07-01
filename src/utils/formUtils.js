/**
 * -------------------------------------------------------
 * Get all the input values from form as JSON
 */
function getFormDataAsJSON(event) {
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

  // if no keys, return {}
  if (Object.keys(clonedData) === 0) {
    return {};
  }

  // result to be returned
  const results = {};

  // nested objects
  for (const key in clonedData) {
    if (clonedData[key] === '') {
      results[key] = null; // updating with "null"
    } else if (
      typeof clonedData[key] === 'object' &&
      clonedData[key] !== null
    ) {
      results[key] = replaceEmptyStringsToNull(clonedData[key]); // recursive for nested objects
    } else {
      results[key] = clonedData[key]; // return same
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
