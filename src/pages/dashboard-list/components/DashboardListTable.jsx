import { useDispatch, useSelector } from 'react-redux';
import { Eye, Pencil } from 'lucide-react';
import { Switch } from 'antd';

// Actions
import { DashboardActions } from '../../../store/redux-slices/dashboardSlice';

// Constants
import { DASHBOARD_TABLE_HEADER } from '../../../constants/dashboardConstants';

// Components
import StatusTag from '../../../components/antd/tag/StatusTag';
import DataTable from '../../../components/antd/table/DataTable';

// Page Components
function DashboardListTableActions({
  record = {},
  setOpenModal = () => {},
  setEditDashboardData = () => {},
}) {
  const dispatch = useDispatch();

  const { key = '', isActive = false } = record;

  const actionIconClassName = isActive
    ? 'cursor-pointer'
    : 'pe-none opacity-25';

  function handleEdit() {
    setOpenModal(true);
    setEditDashboardData(record);
  }

  function handleUpdateUserStatus(status = false, dashboardId = '') {
    dispatch(DashboardActions.updateDashboardStatus({ status, dashboardId }));
  }
  return (
    <div className="d-flex align-items-center gap-3">
      <Pencil className={actionIconClassName} size={16} onClick={handleEdit}>
        <title>Edit</title>
      </Pencil>

      <Eye
        size={16}
        className={actionIconClassName}
        // TODO: Uncomment while implementing dashboard view page
        // onClick={() => navigate(redirectViewPath)}
      >
        <title>View</title>
      </Eye>

      <Switch
        defaultChecked={isActive}
        onChange={(e) => handleUpdateUserStatus(e, key)}
        size="small"
      ></Switch>
    </div>
  );
}

/**
 * Dashboard List Table Component
 * @param {*} setOpenModal: Function
 * @param {*} setEditDashboardData: Function
 * @returns
 */
export default function DashboardListTable({
  setOpenModal = () => {},
  setEditDashboardData = () => {},
}) {
  // Selector States
  const dashboardsMap = useSelector((state) => state.dashboard.dashboardsMap);

  const dashboardList = Object.values(dashboardsMap);

  // Constructing Status Column
  const statusColumn = {
    title: 'Status',
    Key: 'status',
    width: 150,
    render: (record) => {
      const { isActive = false } = record;

      return <StatusTag isActive={isActive} />;
    },
  };

  // Constructing Actions Column
  const actionColumn = {
    title: 'Actions',
    Key: 'action',
    render: (record) => {
      return (
        <DashboardListTableActions
          record={record}
          setOpenModal={setOpenModal}
          setEditDashboardData={setEditDashboardData}
        />
      );
    },
  };

  // Constructing columns for dashboards table
  const columns = [...DASHBOARD_TABLE_HEADER, statusColumn, actionColumn];
  return (
    <DataTable
      rows={dashboardList}
      columns={columns}
      applyOnlyTableBorder={true}
      className="mt-4"
    />
  );
}
