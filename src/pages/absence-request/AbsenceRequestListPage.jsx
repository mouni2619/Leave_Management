import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Modal } from 'antd';
import dayjs from 'dayjs';

// Actions
import { AbsenceActions } from '../../store/redux-slices/absenceSlice';

// Constants
import { AbsenceRequestMenuOptions } from '../../constants/myAbsenceConstant';

// Helpers
import AbsenceHelper from '../../helpers/absence/absenceHelper';

// Component
import UpcomingAbsenceTable from '../../components/absence/UpcomingAbsenceTable';
import UpsertAbsenceModal from '../../components/absence/UpsertAbsenceModal';
import ViewAbsenceDataModal from '../../components/absence/ViewAbsenceDataModal';
import Button from '../../components/button/Button';

const { TextArea } = Input;

// Page Components
function RejectModal({
  selectedRow = {},
  setSelectedRow = () => {},
  isRejectModalOpen = false,
  setIsRejectModalOpen = () => {},
}) {
  // Dispatch
  const dispatch = useDispatch();

  // Form
  const [form] = Form.useForm();

  const { id = '' } = selectedRow;

  // Function
  function formSubmit(values) {
    const { rejectReason = '' } = values;
    dispatch(AbsenceActions.rejectLeaveRequest({ id, rejectReason }));

    setIsRejectModalOpen(false);
  }

  function handleCancel() {
    setIsRejectModalOpen(false);
    setSelectedRow({});
  }

  return (
    <Modal
      title="Reject Approval"
      footer={null}
      open={isRejectModalOpen}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        name="absenceForm"
        layout="vertical"
        onFinish={formSubmit}
      >
        <Form.Item
          label={'Reason'}
          name="rejectReason"
          rules={[{ required: true, message: 'Enter reason !!' }]}
        >
          <TextArea placeholder="Enter reason" rows={4} />
        </Form.Item>

        <Form.Item className="d-flex flex-row-reverse">
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>

          <Button type="submit" className="btn-primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

/**
 * Absence Request List Page
 */
export default function AbsenceRequestListPage() {
  // Dispatch
  const dispatch = useDispatch();

  // State
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  // Form
  const [form] = Form.useForm();

  const title = 'Absence requested';

  // Functions
  function handleMenuClick(menuObj = {}, record = {}) {
    const { key = '' } = menuObj;
    const { id = '' } = record;

    if (key === '1') {
      dispatch(AbsenceActions.approveLeaveRequest({ id }));
    }

    if (key === '2') {
      setIsRejectModalOpen(true);
      setSelectedRow(record);
    }

    if (key === '3') {
      setIsViewModalOpen(true);
      setSelectedRow(record);
    }

    if (key === '4') {
      setIsEditModalOpen(true);
      setSelectedRow(record);
    }

    if (key === '5') {
      dispatch(AbsenceActions.deleteAbsence({ id }));
    }
  }

  // useEffect
  useEffect(() => {
    const { startTimestamp = '', endTimestamp = '' } = selectedRow;

    const initialValues = {
      ...selectedRow,
      date:
        startTimestamp && endTimestamp
          ? [dayjs(startTimestamp), dayjs(endTimestamp)]
          : [],
    };

    form.setFieldsValue(initialValues);
  }, [form, selectedRow]);

  return (
    <div className="page-content bg-secondary position-relative">
      <UpcomingAbsenceTable
        title={title}
        columns={AbsenceHelper.getAbsenceColumns(
          handleMenuClick,
          AbsenceRequestMenuOptions,
        )}
      />

      <UpsertAbsenceModal
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        form={form}
      />

      <ViewAbsenceDataModal
        selectedRow={selectedRow}
        setIsViewModalOpen={setIsViewModalOpen}
        isViewModalOpen={isViewModalOpen}
        setSelectedRow={setSelectedRow}
      />

      <RejectModal
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        isRejectModalOpen={isRejectModalOpen}
        setIsRejectModalOpen={setIsRejectModalOpen}
      />
    </div>
  );
}
