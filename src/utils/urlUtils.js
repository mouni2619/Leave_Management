/**
 * Odd-ball URL Utilities
 */

//
// ----------------------------------------------------------------------------

/**
 * Format the Given URL with path/request parameters substitued with the passed values
 */

function format(inUrlStr = '', argVals = {}) {
  // Iterate over args and substitute values
  let url = inUrlStr;
  for (const [key, value] of Object.entries(argVals)) {
    const pathParam = ':' + key;
    url = url.replace(pathParam, value);
  }

  return url;
}

const UrlUtils = {
  format,
};

// Export
export default UrlUtils;
