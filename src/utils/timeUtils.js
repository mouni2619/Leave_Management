/**
 * -------------------------------------------------
 * Convert Seconds To Minutes
 * @param {*} seconds : seconds count
 * @returns minutes count
 */
function convertSecondsToMinutes(seconds) {
  if (!seconds) {
    return '--';
  }

  // minutes
  const minutes = Math.ceil(seconds / 60);
  return minutes;
}

// ------------------------------------------------------------------
const TimeUtils = {
  convertSecondsToMinutes,
};

// export default
export default TimeUtils;
