import { Breadcrumb, Form } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

// Components
import Button from '../../../components/button/Button';

// Constants
import { MyAbsenceBreadcrumbItems } from '../../../constants/myAbsenceConstant';

// Section
import LeaveCards from './LeaveCards';
import UpcomingAbsenceTable from './UpcomingAbsenceTable';
import ViewAbsenceDataModal from './ViewAbsenceDataModal';
import UpsertAbsenceModal from './UpsertAbsenceModal';
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

      <Button className="btn-primary fs-4 rounded-3" onClick={openAbsenceModal}>
        Request Absence
      </Button>
    </div>
  );
}
/**
 * My Absence Tab Content
 */
export default function MyAbsenceTabContent() {
  // State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Form
  const [form] = Form.useForm();

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
        setIsModalOpen={setIsModalOpen}
        setIsViewModalOpen={setIsViewModalOpen}
        setSelectedRow={setSelectedRow}
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

      <Toaster showToast={showToast} setShowToast={setShowToast}/>
    </div>
  );
}
