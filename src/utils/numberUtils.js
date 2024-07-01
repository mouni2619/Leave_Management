import StringUtils from './stringUtils';

/**
 * --------------------------------------------
 * roundUpNearestInteger
 * @param {*} number
 * @returns : rounded up nearest integer
 */
function roundUpNearestInteger(number) {
  return Math.round(number);
}

/**
 * ---------------------------------------------------------------
 * toLocaleStringWithRoundUp
 * @param {*} number
 * @returns : eg : 12756.78 ==> 12,757 (toLocaleString)
 */
function toLocaleStringWithRoundUp(number) {
  return StringUtils.toLocaleString(roundUpNearestInteger(number));
}

// ------------------------------------------------------------------
const NumberUtils = {
  roundUpNearestInteger,
  toLocaleStringWithRoundUp,
};

// export default
export default NumberUtils;
