/**
 * ----------------------------------------------------------
 * Concatenate first middle last name of the user
 * @param {*} userObject { firstName, middleName, lastName }
 * @returns Full Name
 */
export function getFullName(userObject) {
  const { firstName, middleName, lastName } = userObject || {};

  // if "middleName" is NOT present
  if (!middleName) {
    const fullName = `${firstName || ''} ${lastName || ''}`;
    return fullName;
  }

  // full name
  const fullName = `${firstName || ''} ${middleName} ${lastName || ''}`;

  // else return full name
  return fullName;
}

// -------------------------------------------------------------------
const UserUtils = {
  getFullName,
};

// export default
export default UserUtils;
