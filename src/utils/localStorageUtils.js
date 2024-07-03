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

//clear LocalStorage
const clear = () => {
  localStorage.clear();
};

// --------------------------------------------------------
const LocalStorage = {
  set,
  get,
  remove,
  clear,
};

// Default Export
export default LocalStorage;
