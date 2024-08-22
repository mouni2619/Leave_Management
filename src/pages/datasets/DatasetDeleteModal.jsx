import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Modal, Space } from 'antd';

// Constants
import { DATASET_MODAL_TYPES } from '../../constants/datasetConstants';

// Actions
import { DatasetActions } from '../../store/redux-slices/datasetSlice';

// Components
import Button from '../../components/button/Button';

function FormActions({ handleSubmit = () => {}, btnLoading = false }) {
  return (
    <Form.Item className="d-flex flex-row justify-content-end align-items-center mb-0">
      <Space>
        <Button
          className="btn-primary"
          onClick={handleSubmit}
          loading={btnLoading}
        >
          Confirm
        </Button>
      </Space>
    </Form.Item>
  );
}

/**
 * Dataset Delete Modal
 * @param {*} openModal: Object
 * @param {*} setOpenModal: Function
 * @param {*} deleteDatasetData: Object
 * @param {*} setDeleteDatasetData: Function
 * @returns
 */
export default function DatasetDeleteModal({
  openModal = { type: '', state: false },
  setOpenModal = () => {},
  deleteDatasetData = {},
  setDeleteDatasetData = () => {},
}) {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const { type, state } = openModal;
  const isModalOpen = state && type === DATASET_MODAL_TYPES.DELETE;

  const { name = '', description = '', key = '' } = deleteDatasetData;

  function handleCancel() {
    setOpenModal({ type: '', state: false });
    setDeleteDatasetData({});
  }

  function handleSubmit() {
    dispatch(DatasetActions.deleteDataset({ datasetId: key }));
    setOpenModal({ type: '', state: false });
    setDeleteDatasetData({});
  }

  useEffect(() => {
    form.setFieldsValue({ name, description });
  }, [deleteDatasetData]);
  return (
    <Modal
      open={isModalOpen}
      title="Confirm Delete"
      onCancel={handleCancel}
      width={600}
      footer={() => <FormActions handleSubmit={handleSubmit} />}
      forceRender
    >
      <Form layout="vertical" className="my-4" form={form} disabled>
        <Form.Item label="Name :" name="name" className="fw-semibold">
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
