import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Form, Modal } from 'antd';

// Constants
import {
  USER_CHANGE_PASSWORD_INPUT_DATA,
  USER_MODAL_TYPES,
} from '../../../constants/userConstants';

// Actions
import { UserActions } from '../../../store/redux-slices/userSlice';

// Components
import Button from '../../../components/button/Button';

function ModalFooter({
  handleReset = () => {},
  handleSubmit = () => {},
  btnLoading = false,
}) {
  return (
    <div className="d-flex justify-content-end gap-3">
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
        Submit
      </Button>
    </div>
  );
}

function FormItem({ data = {} }) {
  const { label = '', name = '', rules = [], help = '', input = <></> } = data;
  return (
    <Form.Item
      className="fw-semibold"
      label={label}
      name={name}
      rules={rules}
      help={help}
    >
      {input}
    </Form.Item>
  );
}

/**
 * User Password Change Modal
 * @param {*} userData: Object
 * @param {*} openModal: Function
 * @param {*} setOpenModal: Function
 * @param {*} setRows: Function
 * @returns
 */
export default function UserPasswordChangeModal({
  userData = {},
  openModal = { state: false, type: '' },
  setOpenModal = () => {},
}) {
  // Dispatch
  const dispatch = useDispatch();

  // Form
  const [form] = Form.useForm();

  const { key: userId } = userData;

  // States
  const [validationError, setValidationError] = useState('');
  const [showError, setShowError] = useState(false);

  const { state = false, type = '' } = openModal;
  const isModalOpen = state && type === USER_MODAL_TYPES.CHANGE_PASSWORD;

  const formInput = USER_CHANGE_PASSWORD_INPUT_DATA;

  function handleReset() {
    form.resetFields();
    setValidationError('');
    setShowError(false);
  }

  function handleCancel() {
    setOpenModal({ state: 'false', type: '' });
    setValidationError('');
    setShowError(false);
  }

  function handleChangePassword(value) {
    const { oldPassword = '', newPassword = '', confirmPassword = '' } = value;
    if (newPassword != confirmPassword) {
      setValidationError('Passwords do not match');
      setShowError(true);
      return;
    }

    if (userData.password !== oldPassword) {
      setValidationError('Old password does not match');
      setShowError(true);
      return;
    }

    dispatch(UserActions.updateUserPassword({ userId, newPassword }));
    setOpenModal({ state: false, type: '' });
    setValidationError('');
    setShowError(false);
  }

  function handleSubmit() {
    form
      .validateFields()
      .then((value) => handleChangePassword(value))
      .catch((info) => {
        setValidationError(info.errorFields[0].errors[0]);
        setShowError(true);
      });
  }

  return (
    <Modal
      open={isModalOpen}
      title="Change Password"
      onCancel={handleCancel}
      afterClose={handleReset}
      width={500}
      footer={() => (
        <ModalFooter handleReset={handleReset} handleSubmit={handleSubmit} />
      )}
    >
      {/* Error Alert */}
      {showError && <Alert message={validationError} type="error" />}

      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        className="my-4"
        form={form}
      >
        {formInput.map((data, index) => (
          <FormItem key={index} data={data} />
        ))}
      </Form>
    </Modal>
  );
}
