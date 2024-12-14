import { useState } from 'react';

// Components
import Button from '../../components/button/Button';
import PageHeader from '../../components/layouts/PageHeader';

// Page Components
import DashboardListTable from './components/DashboardListTable';
import DashboardUpsertModal from './components/DashboardUpsertModal';

function HeaderActions({ setOpenModal = () => {} }) {
  return (
    <Button className="btn-primary" onClick={() => setOpenModal(true)}>
      Create
    </Button>
  );
}

/**
 * Dashboard Page
 */
export default function DashboardListPage() {
  // States
  const [openModal, setOpenModal] = useState(false);
  const [editDashboardData, setEditDashboardData] = useState('');
  return (
    <div className="page-content">
      <PageHeader
        title="List of Dashboards"
        actions={<HeaderActions setOpenModal={setOpenModal} />}
      />

      <DashboardListTable
        setOpenModal={setOpenModal}
        setEditDashboardData={setEditDashboardData}
      />

      <DashboardUpsertModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        editDashboardData={editDashboardData}
        setEditDashboardData={setEditDashboardData}
      />
    </div>
  );
}
