import dayjs from 'dayjs';
import { Breadcrumb, Form } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { AbsenceActions } from '../../../store/redux-slices/absenceSlice';

// Helpers
import AbsenceHelper from '../../../helpers/absence/absenceHelper';

// Constants
import {
  MenuOptionItems,
  MyAbsenceBreadcrumbItems,
} from '../../../constants/myAbsenceConstant';

// Components
import Button from '../../../components/button/Button';
import UpcomingAbsenceTable from '../../../components/absence/UpcomingAbsenceTable';
import UpsertAbsenceModal from '../../../components/absence/UpsertAbsenceModal';
import ViewAbsenceDataModal from '../../../components/absence/ViewAbsenceDataModal';

// Section
import LeaveCards from './LeaveCards';
import Toaster from './Toaster';

// Page Components
function PageHeader({ setIsModalOpen, setSelectedRow }) {
  function openAbsenceModal() {
    setIsModalOpen(true);
    setSelectedRow({});
  }

  return (
    <div className="d-flex justify-content-between align-items-stretch">
      <div>
        <h2 className="font-weight-bold">My Absence</h2>
        <Breadcrumb items={MyAbsenceBreadcrumbItems} />
      </div>

      <Button
        className="btn-primary fs-4 rounded-3 px-4"
        onClick={openAbsenceModal}
      >
        Request Absence
      </Button>
    </div>
  );
}

/**
 * My Absence Tab Content
 */
export default function MyAbsenceTabContent() {
  // Dispatch
  const dispatch = useDispatch();

  // State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Form
  const [form] = Form.useForm();

  const title = 'Upcoming Absence';

  // Functions
  function handleMenuClick({ key = '' }, record = {}) {
    const { id = '' } = record;

    if (key === '1') {
      setIsViewModalOpen(true);
      setSelectedRow(record);
    }

    if (key === '2') {
      setIsModalOpen(true);
      setSelectedRow(record);
    }

    if (key === '3') {
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
      <PageHeader
        setIsModalOpen={setIsModalOpen}
        setSelectedRow={setSelectedRow}
      />

      <LeaveCards />

      <UpcomingAbsenceTable
        title={title}
        columns={AbsenceHelper.getAbsenceColumns(
          handleMenuClick,
          MenuOptionItems,
        )}
      />

      <UpsertAbsenceModal
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setShowToast={setShowToast}
        form={form}
      />

      <ViewAbsenceDataModal
        selectedRow={selectedRow}
        setIsViewModalOpen={setIsViewModalOpen}
        isViewModalOpen={isViewModalOpen}
        setSelectedRow={setSelectedRow}
      />

      <Toaster showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
}
