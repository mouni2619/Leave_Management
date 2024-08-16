/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Alert, Form, Modal } from 'antd';

// Constants
import {
  USER_FORM_INPUT_DATA,
  USER_MODAL_TYPES,
} from '../../../constants/userConstants';

// Components
import Button from '../../../components/button/Button';

const formInitalValues = {
  firstName: '',
  lastName: '',
  emailId: '',
  phoneNum: '',
  designation: '',
  password: '',
};

// Page Components
function ModalFooter({
  handleReset = () => {},
  handleSubmit = () => {},
  upsertBtnText = '',
  btnLoading = false,
}) {
  return (
    <div className="d-flex justify-content-end gap-3 mt-5">
      <Button
        onClick={handleReset}
        className="btn-outline-dark btn-outline-custom"
      >
        Reset
      </Button>
      <Button
        onClick={handleSubmit}
        className="btn btn-primary"
        loading={btnLoading}
      >
        {upsertBtnText}
      </Button>
    </div>
  );
}

function FormItem({ data = [], userId = '' }) {
  return (
    <div className="d-flex justify-content-between gap-4 mt-5">
      {data.map((item, i) => {
        const {
          label = '',
          name = '',
          rules = [],
          help = '',
          input = <></>,
        } = item;

        // Check it is edit and removing the password field
        const isEditForm = userId !== '' && name === 'password';

        return (
          !isEditForm && (
            <Form.Item
              key={i}
              className="flex-grow-1 fw-semibold"
              layout="vertical"
              label={label}
              name={name}
              rules={rules}
              help={help}
            >
              {input}
            </Form.Item>
          )
        );
      })}
    </div>
  );
}

/**
 *
 * @param {*} openModal: Object
 * @param {*} setOpenModal: Function
 * @param {*} setRows: Function
 * @param {*} userData: Object
 * @param {*} setUserData: Function
 * @returns
 */
export default function UserCreateEditModal({
  openModal = { state: false, type: '' },
  setOpenModal = () => {},
  setRows = () => {},
  userData = {},
  setUserData = () => {},
}) {
  // Form
  const [form] = Form.useForm();

  // States
  const [validationError, setValidationError] = useState('');
  const [showError, setShowError] = useState(false);

  const { key: userId = '', isActive = false, role = 'VIEWER' } = userData;
  const { state = false, type = '' } = openModal;
  const isModalOpen = state && type === USER_MODAL_TYPES.USER_DATA;
  const modalTitle = userId ? 'Edit User Details' : 'Create New User';
  const formInput = USER_FORM_INPUT_DATA;

  // Function to reset the form
  function handleReset() {
    setValidationError('');
    setShowError(false);
    if (userId) {
      form.setFieldsValue(userData);
      return;
    }
    form.resetFields();
  }

  // Function to handle the modal cancel
  function handleCancel() {
    setOpenModal({ state: 'false', type: '' });
    setUserData({});
    setValidationError('');
    setShowError(false);
  }

  // Function to handle create or update
  function handleUpsert(values = {}) {
    setValidationError('');
    setShowError(false);
    setOpenModal({ state: 'false', type: '' });
    setUserData({});

    if (userId) {
      setRows((rows) => {
        return rows.map((user) => {
          return user.key === userId
            ? { ...values, key: userId, isActive, role }
            : user;
        });
      });
      return;
    }

    setRows((rows) => [
      ...rows,
      { ...values, key: rows.length + 1, isActive: true, role: 'VIEWER' },
    ]);
    setOpenModal({ state: false, type: '' });
  }

  // Function to handle the form submission
  function handleSubmit() {
    form
      .validateFields()
      .then((values) => {
        handleUpsert(values);
      })
      .catch((info) => {
        setValidationError(info.errorFields[0].errors[0]);
        setShowError(true);
      });
  }

  // To update the form data for edit
  useEffect(() => {
    form.setFieldsValue(userData);
  }, [userId]);

  return (
    <Modal
      forceRender
      open={isModalOpen}
      title={modalTitle}
      onCancel={handleCancel}
      afterClose={handleReset}
      width={700}
      footer={() => (
        <ModalFooter
          handleReset={handleReset}
          handleSubmit={handleSubmit}
          upsertBtnText={userId ? 'Update User' : 'Create User'}
        />
      )}
    >
      {/* Error Alert */}
      {showError && <Alert message={validationError} type="error" />}

      <Form className="pb-4" form={form} initialValues={formInitalValues}>
        {formInput.map((data, index) => (
          <FormItem key={index} data={data} userId={userId} />
        ))}
      </Form>
    </Modal>
  );
}
