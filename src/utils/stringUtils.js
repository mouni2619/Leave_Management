/**
 * -----------------------------------------------------------
 * CONVERT INTO LOCAL STRING (eg; 140000 --> 1,40,000)
 * @param {*} value : number
 */
function toLocaleString(value) {
  // if value is ZERO, show Zero Count
  if (Number(value) === 0) {
    return value;
  }

  // else
  return value ? value.toLocaleString('en-IN') : '';
}

/**
 * ------------------------------------------------------------------------
 * convert the string as first letter as capital and rest will be small letters
 * @param {*} string : any string like : admavin
 * @returns : Admavin
 */
function toPascalCaseString(string = '') {
  // return null if there is no input string
  if (!string) {
    return null;
  }

  // return converted string
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * -------------------------------------------------------
 * formatText
 * @param {*} value : any string, number or value
 * @param {*} formattedText : replaced text
 * @returns : formatted value if input value is not present
 */
function formatText(value, formattedText = '--') {
  return value ? value : formattedText;
}

/**
 * --------------------------------------------------------------
 * Concatenate Strings
 * @param {*} strings ["one","two"]
 * @param {*} symbol "-","*"
 * @returns one-two
 */
function concatenateStrings(strings, symbol = ' - ') {
  // if array doesn't have any string, return null
  if (!Array.isArray(strings)) {
    return null;
  }

  // return joined string
  return strings.join(symbol);
}

// -----------------------------------------------------------
// get Alphabet SNo
function getAlphabetSerialNo(value) {
  // alphabet for serial number
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  // alphabetic serial number
  const letter = alphabets[value % 26];
  const number = value > 25 && Math.floor(value / 26);
  const serialNo = number ? `${letter}${number}` : letter;

  // return serial number
  return serialNo;
}

/**
 * --------------------------------------------------------------
 * Function for masking the character
 * @param {*} value => number or string
 * @param {*} unMaskedCharCount = un-masked character count from Last (optional)
 * @param {*} maskCharacter : sign of mask
 * @returns => ****3765
 */
function maskCharacter(
  initialValue = '',
  unMaskedCharCount = 4,
  maskCharacter = '*',
) {
  // Converting value into string for processing
  const processValue =
    typeof value !== String ? initialValue?.toString() : initialValue;

  // length of "processValue"
  const processValueLength = processValue?.length;

  // if length is Zero || undefined then return "3 times star"
  if (!processValueLength || processValueLength === 0) {
    // default mask value
    const maskValue = `${maskCharacter}${maskCharacter}${maskCharacter}`;
    return maskValue;
  }

  // unMasked Char Count From Last
  const unMaskedCharCountFromLast = unMaskedCharCount
    ? unMaskedCharCount
    : Math.floor(processValueLength / 2);

  // Slice the value and replace with maskChar then add remaining string
  return (
    ('' + processValue)
      .slice(0, -unMaskedCharCountFromLast)
      .replace(/./g, '*') +
    ('' + processValue).slice(-unMaskedCharCountFromLast)
  );
}

// ---------------------------------------------------------------
const StringUtils = {
  toLocaleString,
  toPascalCaseString,
  formatText,
  concatenateStrings,
  getAlphabetSerialNo,
  maskCharacter,
};

// export default
export default StringUtils;
