/**
 * -------------------------------------------------------------------
 * saveExcelFile
 * @param {*} filename : save file
 * @param {*} data : file data
 */
function saveExcelFile(filename, data) {
  const link = document.createElement('a');
  link.target = '_blank';
  link.download = filename;
  link.href = URL.createObjectURL(
    new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }),
  );
  link.click();
}

/**
 * ---------------------------------------------------------------------
 * saveImageFile
 * @param {*} filename : saved file name
 * @param {*} data : image data
 * @param {*} imageType : image type
 */
function saveImageFile(filename, data, imageType) {
  const link = document.createElement('a');
  link.target = '_blank';
  link.download = filename;
  link.href = URL.createObjectURL(
    new Blob([data], {
      type: `image/${imageType}`,
    }),
  );
  link.click();
}

/**
 * ------------------------------------------------------------------------
 * selectFile
 * @param {*} isMultiSelect : boolean for single or multi select files
 * @param {*} fileExtensions : supported file extension
 * @returns
 */
function selectFile(isMultiSelect = false, fileExtensions = []) {
  return new Promise((resolve) => {
    // function for select file
    function handleFileSelect(e) {
      const file = e.target.files;
      resolve(file);
    }

    // creating file input
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = isMultiSelect;
    if (fileExtensions && fileExtensions.length) {
      input.accept = fileExtensions.join(',');
    }
    input.onchange = handleFileSelect;
    input.click();
  });
}

/**
 * ---------------------------------------------------------------------------
 * convert Binary To Base64 String
 * https://stackoverflow.com/questions/38705385/embed-pdf-byte-data-in-html/48086247#48086247
   Create a Uint8Array from ArrayBuffer
   Get binary string from UTF-16 code units
   binary string from UTF-16 code units
 */
function convertBinaryToBase64String(binaryString) {
  // if no binary string, return
  if (!binaryString) {
    return;
  }

  // construct base64 string
  const blob = new Blob([binaryString], { type: 'application/pdf' });
  const base64String = URL.createObjectURL(blob);

  // return
  return base64String;
}

// -------------------------------------------------------------------------
const FileUtils = {
  saveExcelFile,
  saveImageFile,
  selectFile,
  convertBinaryToBase64String,
};

// export default
export default FileUtils;
