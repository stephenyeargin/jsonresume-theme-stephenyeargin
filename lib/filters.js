/**
 * Duration between two dates
 * @param {string} defaultOutput (optional) default output if startDate is not provided
 * @param {string} startDate YYYY-mm-dd format
 * @param {string} endDate (optional) YYYY-mm-dd format
 * @returns string
 */
const dateDiff = (defaultOutput, startDate, endDate) => {
  // Check if startDate is provided
  if (!startDate) {
    return defaultOutput || '';
  }

  // Parse the startDate and endDate strings into Date objects
  const start = new Date(startDate);
  let end;
  if (endDate) {
    end = new Date(endDate);
  } else {
    end = new Date(); // Current date
  }

  // Calculate the difference in years and months
  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;

  // Calculate years and remaining months
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  // Construct the result string
  let result = '';
  if (years > 0) {
    result += years + (years === 1 ? ' year' : ' years');
  }
  if (remainingMonths > 0) {
    result += (result ? ', ' : '') + remainingMonths + (remainingMonths === 1 ? ' month' : ' months');
  }

  return result;
};

module.exports = { dateDiff };
