import { useEffect, useState } from 'react';
import { Switch } from 'antd';
import { KeyRound, Pencil, UserPen } from 'lucide-react';

// Constants
import {
  USER_LIST_TABLE_HEADER,
  USER_LIST_TABLE_ROWS,
  USER_MODAL_TYPES,
} from '../../../constants/userConstants';

// Components
import DataTable from '../../../components/antd/table/DataTable';

function UserListTableActions({
  record = {},
  setUserData = () => {},
  setOpenModal = () => {},
}) {
  const { key = '', isActive = '', role = '' } = record;

  const actionIconClassName = isActive
    ? 'cursor-pointer'
    : 'pe-none opacity-25';

  // Function to handle edit
  function handleEditUserBtn() {
    setOpenModal({ state: true, type: USER_MODAL_TYPES.USER_DATA });
    setUserData(record);
  }

  function handleChangePasswordBtn() {
    setOpenModal({ state: true, type: USER_MODAL_TYPES.CHANGE_PASSWORD });
    setUserData(record);
  }

  function handleUpdateUserBtn() {
    setOpenModal({ state: true, type: USER_MODAL_TYPES.USER_ROLE });
    setUserData(record);
  }

  // Function to handle user status enable/disable
  function handleEditUserActive() {}

  return (
    <div className="d-flex align-items-center gap-3">
      <Pencil
        className={actionIconClassName}
        size={16}
        onClick={handleEditUserBtn}
      >
        <title>Edit</title>
      </Pencil>

      <KeyRound
        size={16}
        onClick={handleChangePasswordBtn}
        className={actionIconClassName}
        aria-disabled={true}
      >
        <title>Change Password</title>
      </KeyRound>

      {role !== 'SUPER_ADMIN' && (
        <>
          <UserPen
            size={16}
            onClick={handleUpdateUserBtn}
            className={actionIconClassName}
          >
            <title>Update Role</title>
          </UserPen>
          <Switch
            defaultChecked={isActive}
            onChange={(e) => handleEditUserActive(e, key)}
            size="small"
          ></Switch>
        </>
      )}
    </div>
  );
}

export default function UsersTable() {
  // States
  const [columns, setColumns] = useState([]);
  const rows = USER_LIST_TABLE_ROWS;

  // Constructing columns for users table
  const actionColumn = {
    title: 'Action',
    Key: 'action',
    render: (record) => {
      return <UserListTableActions record={record} />;
    },
  };

  useEffect(() => {
    setColumns([...USER_LIST_TABLE_HEADER, actionColumn]);
  }, []);
  return <DataTable rows={rows} columns={columns} applyTableBorder={true} />;
}
