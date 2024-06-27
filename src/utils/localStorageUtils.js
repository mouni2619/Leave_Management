// Set/Add in LocalStorage
const set = (key, val) => {
  localStorage.setItem(key, val);
};

// Get from LocalStorage
const get = (key) => {
  return localStorage.getItem(key);
};

// Remove from LocalStorage
const remove = (key) => {
  localStorage.removeItem(key);
};

// Local Storage Keys
const Keys = {
  AUTH_USER: "AUTH_USER",
  AUTH_USER_PRIVILEGES: "AUTH_USER_PRIVILEGES",
  AUTH_ORG: "AUTH_ORG",
  AUTH_ORG_TYPE: "AUTH_ORG_TYPE",
};

const LocalStorage = {
  set,
  get,
  remove,
  Keys,
};

// Default Export
export default LocalStorage;
