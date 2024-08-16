import { useEffect, useState } from 'react';
import { Switch, Tag } from 'antd';
import { KeyRound, Pencil, UserPen } from 'lucide-react';

// Constants
import {
  USER_LIST_TABLE_HEADER,
  USER_LIST_TABLE_ROWS,
  USER_MODAL_TYPES,
  USER_ROLES,
  USER_STATUS,
  USER_TAG_COLOR,
} from '../../constants/userConstants';

// Components
import Button from '../../components/button/Button';
import UsersTable from './components/UsersTable';
import UserCreateEditModal from './components/UserCreateEditModal';
import UserPasswordChangeModal from './components/UserPasswordChangeModal';
import UserRoleUpdateModal from './components/UserRoleUpdateModal';

function Header({ setOpenModal = () => {} }) {
  return (
    <div className="w-100 d-flex justify-content-between my-4">
      <h2>{`Users List`}</h2>
      <Button
        className="btn-primary"
        onClick={() =>
          setOpenModal({ state: true, type: USER_MODAL_TYPES.USER_DATA })
        }
      >
        Add User
      </Button>
    </div>
  );
}

function UserListTableActions({
  record = {},
  setOpenModal = () => {},
  setUserData = () => {},
  setRows = () => {},
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
  function handleEditUserActive(status, userId) {
    setRows((rows) =>
      rows.map((user) => {
        if (user.key === userId) {
          return { ...user, isActive: status };
        }
        return user;
      }),
    );
  }

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

      {role !== USER_ROLES.SUPER_ADMIN && (
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

export default function UserListPage() {
  // States
  const [openModal, setOpenModal] = useState({ state: 'false', type: '' });
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [userData, setUserData] = useState({});

  // Constructing columns for users table
  const statusColumn = {
    title: 'Status',
    Key: 'status',
    render: (record) => {
      const { isActive = false } = record;

      const statusText = isActive ? USER_STATUS.ACTIVE : USER_STATUS.IN_ACTIVE;
      const tagColor = isActive ? USER_TAG_COLOR.GREEN : USER_TAG_COLOR.RED;
      return (
        <div className="d-flex justify-content-center w-75">
          <Tag
            className="d-flex justify-content-center align-items-center w-100"
            color={tagColor}
          >
            {statusText}
          </Tag>
        </div>
      );
    },
  };

  const actionColumn = {
    title: 'Action',
    Key: 'action',
    render: (record) => {
      return (
        <UserListTableActions
          record={record}
          setOpenModal={setOpenModal}
          setRows={setRows}
          setUserData={setUserData}
        />
      );
    },
  };

  useEffect(() => {
    setRows(USER_LIST_TABLE_ROWS);
    setColumns([...USER_LIST_TABLE_HEADER, statusColumn, actionColumn]);
  }, []);
  return (
    <div className="page-content">
      <Header setOpenModal={setOpenModal} />
      <UsersTable rows={rows} columns={columns} />

      <UserCreateEditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setRows={setRows}
        userData={userData}
        setUserData={setUserData}
      />

      <UserPasswordChangeModal
        userData={userData}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setRows={setRows}
      />

      <UserRoleUpdateModal
        userData={userData}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setRows={setRows}
      />
    </div>
  );
}
