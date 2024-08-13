import { useState } from 'react';
import { Alert, Form, Input, Modal, Space } from 'antd';

// Components
import Button from '../../../components/button/Button';

// Form Action Function
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

export default function AntDFormModal({
  openModal = false,
  setOpenModal = () => {},
}) {
  // Form
  const [form] = Form.useForm();

  // States
  const [validationError, setValidationError] = useState('');
  const [showError, setShowError] = useState(false);

  function handleCancel() {
    setOpenModal(false);
    setValidationError('');
    setShowError(false);
  }

  // Function to handle the form reset
  function handleReset() {
    setValidationError('');
    setShowError(false);
    form.resetFields();
  }

  // Function to handle the form submission
  function handleSubmit() {
    form
      .validateFields()
      .then((values) => {
        setValidationError('');
        setShowError(false);
        console.log(values);
        // dispatch action
      })
      .catch((info) => {
        setValidationError(info.errorFields[0].errors[0]);
        setShowError(true);
      });
  }
  return (
    <Modal
      open={openModal}
      title="Create Dataset"
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
