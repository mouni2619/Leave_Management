import { Modal } from 'antd';
import dayjs from 'dayjs';

// Constants
import {
  LeaveStatusConfigMap,
  LeaveTypeConfig,
} from '../../constants/myAbsenceConstant';

/**
 * View Absence Data Modal
 */
export default function ViewAbsenceDataModal({
  selectedRow = {},
  isViewModalOpen = false,
  setIsViewModalOpen = () => {},
  setSelectedRow = () => {},
}) {
  const {
    name: personName = '',
    startTimestamp = '',
    endTimestamp = '',
    leaveType = '',
    reason = '',
    status = '',
    rejectReason = '',
  } = selectedRow;

  const isSameDate = startTimestamp === endTimestamp;

  const { name = '', color = '' } = LeaveStatusConfigMap[status] || {};

  // Function
  function closeModal() {
    setIsViewModalOpen(false);
    setSelectedRow({});
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
          <label className="fw-semibold">Name</label>
          <p>{personName || '--'}</p>
        </div>

        <div className="col-6">
          {isSameDate && (
            <>
              <label className="fw-semibold">Date</label>
              <p>{dayjs(startTimestamp).format('MMM D, YYYY')}</p>
            </>
          )}

          {!isSameDate && (
            <>
              <label className="fw-semibold">Date</label>
              <p>
                {dayjs(startTimestamp).format('MMM D')} -{' '}
                {dayjs(endTimestamp).format('MMM D, YYYY')}
              </p>
            </>
          )}
        </div>
      </div>
      
      <div className="row">
        <div className="col-6">
          <label className="fw-semibold">Leave Type</label>
          <p>{LeaveTypeConfig[leaveType]?.name || '--'}</p>
        </div>

        <div className="col-6">
          <label className="fw-semibold">Status</label>
          <p className={`text-${color}`}>{name}</p>
        </div>
      </div>

      <div>
        <label className="fw-semibold">Reason</label>
        <p>{reason || '--'}</p>
      </div>

      {status === LeaveStatusConfigMap.rejected.key && rejectReason && (
        <>
          <label className="fw-semibold">Rejected Reason</label>
          <p>{rejectReason || '--'}</p>
        </>
      )}
    </Modal>
  );
}
