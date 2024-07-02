/**
 * Table Serial Number Function
 * @param {*} pageNumber : Current page number
 * @param {*} pageSize : Current page size
 * @param {*} index : Index from map
 */
function tableSerialNumber({ pageNumber = 1, pageSize = 5, index = 0 }) {
  return (pageNumber - 1) * pageSize + (index + 1);
}

// --------------------------------------------------------------
const TableUtils = {
  tableSerialNumber,
};

// export default
export default TableUtils;
