import { useState } from 'react';
import { Alert, Upload } from 'antd';
import { UploadIcon } from 'lucide-react';

// Constants
import { FileTypes } from '../../../constants/generalConstants';

// Components
import Button from '../../../components/button/Button';

// Images
import XLSXIcon from '../../../assets/images/icons/excel.png';

// CSS
import './UploadFilePage.scss';

function UploadActions({ handleReset = () => {}, handleUpload = () => {} }) {
  return (
    <div className="d-flex justify-content-end gap-3">
      <Button
        onClick={handleReset}
        className="btn-outline-dark btn-outline-custom"
      >
        Reset
      </Button>
      <Button onClick={handleUpload} className="btn btn-primary">
        Import
      </Button>
    </div>
  );
}

function UploadSelectBody() {
  return (
    <>
      <UploadIcon />
      <p className="ant-upload-text fs-5 fw-semibold my-2 opacity-75">
        Drag & Drop or <span className="text-primary">Choose file</span> to
        upload
      </p>
      <p className="ant-upload-hint m-0">File Type : XLSX, CSV</p>
    </>
  );
}

function UploadDraggerBody({ isFileSelected = false, file = {} }) {
  const { name } = file;

  if (!isFileSelected) {
    return <UploadSelectBody />;
  }
  return (
    <>
      <img src={XLSXIcon} alt="XLSX Image" className="xlsx-icon" />
      <p className="mt-3">{name}</p>
    </>
  );
}

export default function UploadFilePage() {
  // States
  const [file, setFile] = useState({});
  const [isFileSelected, setIsFileSelected] = useState(false);

  const [validationError, setValidationError] = useState('');
  const [showError, setShowError] = useState(false);

  // Function to check the selected file is xlsx or not
  function onBeforeUpload(file) {
    const isValidFileType =
      file.type === FileTypes.XLSX || file.type === FileTypes.CSV;

    if (!isValidFileType) {
      setValidationError('Invalid file type');
      setShowError(true);
      setIsFileSelected(false);
      return;
    }

    setFile(file);
    setIsFileSelected(true);
  }

  function handleReset() {
    setFile({});
    setIsFileSelected(false);
    setValidationError('');
    setShowError(false);
  }

  function handleUpload() {
    if (Object.keys(file).length === 0) {
      setValidationError('File not selected');
      setShowError(true);
      return;
    }
    setValidationError('');
    setShowError(false);
    // Dispatch the action
  }
  return (
    <div className="page-content w-100">
      {/** Error Alert */}
      {showError && <Alert message={validationError} type="error" />}

      <div className="mb-4">
        <Upload.Dragger
          disabled={isFileSelected}
          showUploadList={false}
          beforeUpload={onBeforeUpload}
          multiple={false}
          height={200}
        >
          <UploadDraggerBody isFileSelected={isFileSelected} file={file} />
        </Upload.Dragger>
      </div>
      <UploadActions handleReset={handleReset} handleUpload={handleUpload} />
    </div>
  );
}
