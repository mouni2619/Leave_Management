import moment from 'moment';

/**
 * ---------------------------------------------------------------------
 * getTimestampDifferenceInDays
 * @param {*} startDate ==> StartTimeStamp
 * @param {*} endDate ==> EndTimeStamp
 * @returns  difference in days
 */
function getTimestampDifferenceInDays(startTimestamp, endTimestamp) {
  // difference of timestamp
  const diff = endTimestamp - startTimestamp;

  // calculating base timestamp
  const baseTimestamp = 24 * 60 * 60 * 1000;

  // return difference in days
  return Math.ceil(diff / baseTimestamp) + 1;
}

/**
 * ------------------------------------------------------------------------------
 * getMomentDateDifferenceInDays
 * @param {*} startDate ==> Date in moment object
 * @param {*} endDate ==> Date in moment object
 * @returns  difference in days
 */
function getMomentDateDifferenceInDays(startDate, endDate) {
  // if any date is not present
  if (!startDate || !endDate) {
    return 0;
  }

  // difference
  const diff = endDate.diff(startDate);

  // returning days
  return moment.duration(diff).days();
}

// ----------------------------------------------------------------------------
// compare Dates
function compareDates(date1, date2) {
  // we are normalizing the time of both the dates to compare only the dates
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  // compare
  if (date1 > date2) {
    return 1;
  } else if (date1 < date2) {
    return -1;
  }

  // where both dates are equal..
  return 0;
}

/**
 * ---------------------------------------------------------------------------
 * isDate1GreaterThanDate2
 * @param {*} date1 : fist date
 * @param {*} date2 : second date
 * @returns
 */
function isDate1GreaterThanDate2(date1, date2) {
  // Check if date1 > date2
  return compareDates(date1, date2) === 1;
}

/**
 * ---------------------------------------------------------------------------
 * constructDateString :: Construct date-String in the given format...
 * @param {*} startDate
 * @param {*} endDate
 * @param {*} format
 * @returns "startDate - endDate"
 */
function constructDateString(startDate, endDate, format) {
  // moment startDate
  const startDateMoment = moment(startDate);

  // if no "endDate" is present, just return date string of startDate
  if (!endDate) {
    return `${startDateMoment.format(format)}`;
  }

  // moment endDate
  const endDateMoment = moment(endDate);

  // return date string
  return `${startDateMoment.format(format)} - ${endDateMoment.format(format)}`;
}

/**
 * ------------------------------------------------------
 * convertTimestampToDateFormat ==> Should be in milliseconds
 * @param {*} timestamp
 * @param {*} format : eg : 'YYYY-MM-DD HH:mm'
 * iso format : "YYYY-MM-DDTHH:mm:ss"
 * @returns timestamp converted date
 */
function convertTimestampToDateFormat(timestamp, format) {
  // Create a moment object directly from the timestamp
  const date = moment(timestamp);

  // return formatted date
  return date.format(format);
}

/**
 * ---------------------------------------------------------------------
 * getTimeInHoursAndMinutes
 * @param {*} timestamp
 * @returns the Time in "Hours:Minutes AM/PM"
 */
function getTimeInHoursAndMinutes(timestamp) {
  if (!timestamp) {
    return null;
  }

  // 12 Hr format (indian standard time, eg: 02:40 pm )
  return moment(timestamp).format('hh:mm a');
}

/**
 * -------------------------------------------------------------------------
 * formatTimestamp
 * @param {*} timestamp : timestamp
 * @returns date string : eg : "Dec 21, 2024"
 */
function formatTimestamp(timestamp) {
  // date object from timestamp
  const date = new Date(timestamp);

  // convert month and day to locale date string
  const monthAndDay = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  // convert "year" to locale date string
  const year = date.toLocaleDateString('en-US', { year: 'numeric' });

  // return date string from formatted timestamp
  return `${monthAndDay}, ${year}`;
}

/**
 * -------------------------------------------------------------------
 * get specific date values
 * @param {*} date : date string
 * @param {*} monthFormat : Count : ("M", "MM"), Text : ("MMM", "MMMM")
 */
function getDateValues(date, monthFormat) {
  if (!date) {
    return { day: '', month: '', year: '' };
  }

  // moment date
  const momentDate = moment(date);

  // values
  const day = momentDate.format('D');
  const month = momentDate.format(monthFormat ? monthFormat : 'MMM');
  const year = momentDate.format('YYYY');

  // return
  return { day, month, year };
}

// --------------------------------------------------------------------
const DateUtils = {
  getDateValues,
  formatTimestamp,
  getTimeInHoursAndMinutes,
  convertTimestampToDateFormat,
  constructDateString,
  isDate1GreaterThanDate2,
  compareDates,
  getMomentDateDifferenceInDays,
  getTimestampDifferenceInDays,
};

// export default
export default DateUtils;
