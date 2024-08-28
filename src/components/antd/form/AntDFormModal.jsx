import { useState } from 'react';
import { Alert, Form, Modal, Space } from 'antd';

// Components
import Button from '../../button/Button';

function FormItem({ data = {} }) {
  const { label, name, className, input, rules, help } = data;
  return (
    <Form.Item
      label={label}
      name={name}
      className={className}
      rules={rules}
      help={help}
    >
      {input}
    </Form.Item>
  );
}

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
  formLayout = 'vertical',
  formInput = [],
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
        // This values can be used for dispatching
        // Here we can dispatch action instead of console
        console.log(values);
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

      <Form layout={formLayout} className="my-4" form={form}>
        {formInput.map((data) => {
          const { id = '' } = data;
          return <FormItem key={id} data={data} />;
        })}
      </Form>
    </Modal>
  );
}
