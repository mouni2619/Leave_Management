/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Form, Input, Modal, Space } from 'antd';

// Actions
import { DashboardActions } from '../../../store/redux-slices/dashboardSlice';

// Components
import Button from '../../../components/button/Button';

// Page Components
function ModalFooter({
  handleReset = () => {},
  handleSubmit = () => {},
  btnText = '',
  btnLoading = false,
}) {
  return (
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
        {btnText}
      </Button>
    </Space>
  );
}

/**
 * Dashboard Upsert Modal Component
 * @param {*} openModal: Boolean
 * @param {*} setOpenModal: Function
 * @param {*} editDashboardData: Object
 * @param {*} setEditDashboardData: Function
 * @returns
 */
export default function DashboardUpsertModal({
  openModal = false,
  setOpenModal = () => {},
  editDashboardData = {},
  setEditDashboardData = () => {},
}) {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  // States
  const [validationError, setValidationError] = useState('');
  const [showError, setShowError] = useState(false);

  const {
    key: dashboardId = '',
    name = '',
    description = '',
  } = editDashboardData;

  const modalTitle = dashboardId ? 'Edit Dashboard' : 'Create New Dashboard';
  const modalBtnText = dashboardId ? 'Update' : 'Create';

  // Function to handle the form reset
  const handleReset = () => {
    setValidationError('');
    setShowError(false);
    if (dashboardId) {
      form.setFieldsValue({ name, description });
    } else {
      form.resetFields();
    }
  };

  // Function to handle modal close
  function handleCloseModal() {
    handleReset();
    setEditDashboardData({});
    setOpenModal(false);
  }

  function handleUpsert(values) {
    if (dashboardId) {
      dispatch(
        DashboardActions.updateDashboard({ dashboardId, dashboardObj: values }),
      );
    } else {
      dispatch(DashboardActions.createDashboard({ dashboardObj: values }));
    }
  }

  // Function to handle submit
  function handleSubmit() {
    form
      .validateFields()
      .then((values) => {
        handleCloseModal();
        setValidationError('');
        setShowError(false);
        handleUpsert(values);
      })
      .catch((info) => {
        setShowError(true);
        setValidationError(info.errorFields[0].errors[0]);
      });
  }

  useEffect(() => {
    form.setFieldsValue({ name, description });
  }, [dashboardId]);

  return (
    <Modal
      open={openModal}
      title={modalTitle}
      onCancel={handleCloseModal}
      width={600}
      forceRender
      footer={() => (
        <ModalFooter
          handleReset={handleReset}
          handleSubmit={handleSubmit}
          btnText={modalBtnText}
        />
      )}
    >
      {/** Error Alert */}
      {showError && <Alert message={validationError} type="error" />}

      <Form form={form} layout="vertical" className="my-4">
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
