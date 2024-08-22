import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Form, Input, Modal, Space } from 'antd';

// Constants
import { DATASET_MODAL_TYPES } from '../../constants/datasetConstants';

// Actions
import { DatasetActions } from '../../store/redux-slices/datasetSlice';

// Components
import Button from '../../components/button/Button';

function FormActions({
  handleReset = () => {},
  handleSubmit = () => {},
  btnLoading = false,
}) {
  return (
    <Form.Item className="d-flex flex-row justify-content-end align-items-center">
      <Space>
        <Button
          className="btn-outline-dark btn-outline-custom"
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          className="btn-primary"
          onClick={handleSubmit}
          loading={btnLoading}
        >
          Submit
        </Button>
      </Space>
    </Form.Item>
  );
}

/**
 * Dataset Create / Edit Modal
 * @param {*} openModal: Object
 * @param {*} editDatasetData: Object
 * @param {*} setEditDatasetData: Function
 * @param {*} setOpenModal: Function
 * @returns
 */
export default function DatasetCreateEditModal({
  openModal = { type: '', state: false },
  editDatasetData = {},
  setEditDatasetData = () => {},
  setOpenModal = () => {},
}) {
  const dispatch = useDispatch();

  // Form
  const [form] = Form.useForm();

  const { type, state } = openModal;
  const isModalOpen = state && type === DATASET_MODAL_TYPES.DATA;

  // States
  const [validationError, setValidationError] = useState('');
  const [showError, setShowError] = useState(false);

  const { key: datasetId = '', name = '', description = '' } = editDatasetData;
  const modalTitle = datasetId ? 'Edit Dataset' : 'Create New Dataset';

  function handleUpsert(values = {}) {
    setValidationError('');
    setShowError(false);
    setOpenModal({ type: '', state: false });
    setEditDatasetData({});
    if (datasetId) {
      dispatch(
        DatasetActions.updateDataset({ datasetId, data: { ...values } }),
      );
      return;
    }

    dispatch(DatasetActions.createDataset(values));
  }

  // Function to handle the form submission
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        handleUpsert(values);
      })
      .catch((info) => {
        setValidationError(info.errorFields[0].errors[0]);
        setShowError(true);
      });
  };

  // Function to handle the form reset
  const handleReset = () => {
    setValidationError('');
    setShowError(false);
    form.setFieldsValue({ name, description });
  };

  // Function to handle modal cancel
  function handleCancel() {
    setOpenModal({ type: '', state: false });
    setEditDatasetData({});
    setValidationError('');
    setShowError(false);
    form.resetFields();
  }

  useEffect(() => {
    form.setFieldsValue({ name, description });
  }, [datasetId]);
  return (
    <Modal
      open={isModalOpen}
      title={modalTitle}
      onCancel={handleCancel}
      width={600}
      footer={() => (
        <FormActions handleReset={handleReset} handleSubmit={handleSubmit} />
      )}
      afterClose={handleReset}
      forceRender
    >
      {/** Error Alert */}
      {showError && <Alert message={validationError} type="error" />}

      <Form layout="vertical" className="my-4" form={form}>
        <Form.Item
          label="Name :"
          name="name"
          className="fw-semibold"
          rules={[
            {
              required: true,
              message: 'Please enter Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description :"
          name="description"
          className="fw-semibold"
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
