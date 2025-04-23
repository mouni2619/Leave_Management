import { Modal } from 'antd';
import dayjs from 'dayjs';

// Constants
import { LeaveTypeConfig } from '../../../constants/myAbsenceConstant';

/**
 * View Absence Data Modal
 */
export default function ViewAbsenceDataModal({
  selectedRow = {},
  isViewModalOpen = false,
  setIsViewModalOpen,
  setSelectedRow,
}) {
  const {
    startTimestamp = '',
    endTimestamp = '',
    leaveType = '',
    reason = '',
  } = selectedRow;

  const isSameDate = startTimestamp === endTimestamp;

  // Function
  function closeModal() {
    setIsViewModalOpen(false);
    setSelectedRow({})
  }

  return (
    <Modal
      title="View Absence Data"
      open={isViewModalOpen}
      onCancel={closeModal}
      footer={null}
    >
      <div className="row">
        <div className="col-6">
          {isSameDate && (
            <>
              <label>Date:</label>
              <p>{dayjs(startTimestamp).format('MMM D, YYYY')}</p>
            </>
          )}

          {!isSameDate && (
            <>
              <label>Date:</label>
              <p>
                {dayjs(startTimestamp).format('MMM D')} -{' '}
                {dayjs(endTimestamp).format('MMM D, YYYY')}
              </p>
            </>
          )}
        </div>

        <div className="col-6">
          <label>Leave Type</label>
          <p>{LeaveTypeConfig[leaveType]?.name || ''}</p>
        </div>
      </div>

      <div>
        <label>Reason</label>
        <p>{reason}</p>
      </div>
    </Modal>
  );
}
