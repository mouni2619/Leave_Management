import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Form, Modal, Select } from 'antd';

// Actions
import { UserActions } from '../../../store/redux-slices/userSlice';

// Constants
import { USER_MODAL_TYPES, USER_ROLES } from '../../../constants/userConstants';

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

/**
 * User Role Update Modal
 * @param {*} openModal: Boolean
 * @param {*} setOpenModal: Function
 * @param {*} userData: Object
 * @param {*} setRows: Function
 * @returns
 */
export default function UserRoleUpdateModal({
  openModal = { state: false, type: '' },
  userData = {},
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

  const { role = '' } = userData;

  const { state = false, type = '' } = openModal;
  const isModalOpen = state && type === USER_MODAL_TYPES.USER_ROLE;

  function handleReset() {
    form.resetFields();
    setValidationError('');
    setShowError(false);
  }

  function handleCancel() {
    setOpenModal({ state: false, type: '' });
    form.resetFields();
  }

  function handleUpdateUserRole(value) {
    const { role = '' } = value;
    dispatch(UserActions.updateUserRole({ userId, role }));
    setOpenModal({ state: false, type: '' });
    setValidationError('');
    setShowError(false);
  }

  function handleSubmit() {
    form
      .validateFields()
      .then((values) => handleUpdateUserRole(values))
      .catch((info) => {
        setValidationError(info.errorFields[0].errors[0]);
        setShowError(true);
      });
  }

  return (
    <Modal
      open={isModalOpen}
      title="Update User Role"
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
          span: 7,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout="horizontal"
        className="my-4"
        form={form}
      >
        <Form.Item
          label="Current Role : "
          className="fw-semibold align-items-center"
        >
          <strong className="p-0 m-0 mx-3">{role}</strong>
        </Form.Item>
        <Form.Item
          label="Select New Role : "
          className="fw-semibold"
          rules={[{ required: true, message: 'Select Role' }]}
          help=""
          name="role"
        >
          <Select className="ms-3">
            <Select.Option key={USER_ROLES.ADMIN} value={USER_ROLES.ADMIN}>
              {USER_ROLES.ADMIN}
            </Select.Option>
            <Select.Option key={USER_ROLES.EDITOR} value={USER_ROLES.EDITOR}>
              {USER_ROLES.EDITOR}
            </Select.Option>
            <Select.Option key={USER_ROLES.VIEWER} value={USER_ROLES.VIEWER}>
              {USER_ROLES.VIEWER}
            </Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
