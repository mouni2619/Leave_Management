import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Tag } from 'antd';
import { KeyRound, Pencil, UserPen } from 'lucide-react';

// Actions
import { UserActions } from '../../store/redux-slices/userSlice';

// Constants
import {
  USER_LIST_TABLE_HEADER,
  USER_MODAL_TYPES,
  USER_ROLES,
  USER_STATUS,
  USER_TAG_COLOR,
} from '../../constants/userConstants';

// Components
import Button from '../../components/button/Button';
import UserCreateAndEditModal from './components/UserCreateAndEditModal';
import UserPasswordChangeModal from './components/UserPasswordChangeModal';
import UserRoleUpdateModal from './components/UserRoleUpdateModal';
import DataTable from '../../components/antd/table/DataTable';

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
}) {
  // Dispatch
  const dispatch = useDispatch();

  const { key = '', isActive = '', role = '' } = record;

  const actionIconClassName = isActive
    ? 'cursor-pointer'
    : 'pe-none opacity-25';

  // Function to handle edit
  function handleEdit() {
    setOpenModal({ state: true, type: USER_MODAL_TYPES.USER_DATA });
    setUserData(record);
  }

  function handleChangePassword() {
    setOpenModal({ state: true, type: USER_MODAL_TYPES.CHANGE_PASSWORD });
    setUserData(record);
  }

  function handleUpdateUser() {
    setOpenModal({ state: true, type: USER_MODAL_TYPES.USER_ROLE });
    setUserData(record);
  }

  // Function to handle user status enable/disable
  function handleUpdateUserStatus(status, userId) {
    dispatch(UserActions.updateUserStatus({ status, userId }));
  }

  return (
    <div className="d-flex align-items-center gap-3">
      <Pencil className={actionIconClassName} size={16} onClick={handleEdit}>
        <title>Edit</title>
      </Pencil>

      <KeyRound
        size={16}
        onClick={handleChangePassword}
        className={actionIconClassName}
        aria-disabled={true}
      >
        <title>Change Password</title>
      </KeyRound>

      {role !== USER_ROLES.SUPER_ADMIN && (
        <>
          <UserPen
            size={16}
            onClick={handleUpdateUser}
            className={actionIconClassName}
          >
            <title>Update Role</title>
          </UserPen>
          <Switch
            defaultChecked={isActive}
            onChange={(e) => handleUpdateUserStatus(e, key)}
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
  const [userData, setUserData] = useState({});

  // Selector State
  const userList = useSelector((state) => state.users.usersList);

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
          setUserData={setUserData}
        />
      );
    },
  };

  const columns = [...USER_LIST_TABLE_HEADER, statusColumn, actionColumn];
  return (
    <div className="page-content">
      <Header setOpenModal={setOpenModal} />
      <DataTable
        rows={userList}
        columns={columns}
        applyOnlyTableBorder={true}
      />

      <UserCreateAndEditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        userData={userData}
        setUserData={setUserData}
      />

      <UserPasswordChangeModal
        userData={userData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <UserRoleUpdateModal
        userData={userData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}
