import { DatePicker, Form, Input, Modal, Select } from 'antd';
import { useDispatch } from 'react-redux';

// Actions
import { AbsenceActions } from '../../store/redux-slices/absenceSlice';

// Constants
import {
  LeaveStatusConfigMap,
  LeaveTypeOptions,
} from '../../constants/myAbsenceConstant';

// Components
import Button from '../button/Button';

// Antd
const { RangePicker } = DatePicker;
const { TextArea } = Input;

/**
 * Upsert Absence Modal
 */
export default function UpsertAbsenceModal({
  form,
  selectedRow = {},
  setSelectedRow = () => {},
  isModalOpen,
  setIsModalOpen = () => {},
  setShowToast = () => {},
}) {
  // Dispatch
  const dispatch = useDispatch();

  // Row Information
  const { id = '' } = selectedRow;

  // Functions
  function handleCancel() {
    form.resetFields();
    setSelectedRow({});
    setIsModalOpen(false);
  }

  function formSubmit(values) {
    const { date = [], leaveType = '', reason = '', name = '' } = values;

    const [startDate, endDate] = date;

    const absenceData = {
      name,
      leaveType,
      reason,
      startTimestamp: Date.parse(startDate),
      endTimestamp: Date.parse(endDate),
      status: LeaveStatusConfigMap.requested.key,
      paid: 'Yes',
    };

    if (id) {
      dispatch(AbsenceActions.editAbsence({ id, absenceData }));
    } else {
      dispatch(AbsenceActions.addAbsence({ absenceData }));
    }

    handleCancel();

    setShowToast(true);
  }

  return (
    <Modal
      title="Absence Request"
      open={isModalOpen}
      onCancel={handleCancel}
      destroyOnClose={true}
      onClose={() => form.resetFields()}
      footer={null}
    >
      <Form
        form={form}
        name="absenceForm"
        layout="vertical"
        onFinish={formSubmit}
      >
        <Form.Item
          label={'Name'}
          name="name"
          rules={[{ required: true, message: 'Select Name !!' }]}
        >
          <Input placeholder="Enter Name" />
        </Form.Item>

        <Form.Item
          label={'Date'}
          name="date"
          rules={[{ required: true, message: 'Select date !!' }]}
        >
          <RangePicker className="w-100" />
        </Form.Item>

        <Form.Item
          label={'Leave Type'}
          name="leaveType"
          rules={[{ required: true, message: 'Select leave type !!' }]}
        >
          <Select placeholder="Select leave type" options={LeaveTypeOptions} />
        </Form.Item>

        <Form.Item
          label={'Reason'}
          name="reason"
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
