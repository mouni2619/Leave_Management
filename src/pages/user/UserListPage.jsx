/* eslint-disable no-unused-vars */
import { useState } from 'react';

// Constants
import { USER_MODAL_TYPES } from '../../constants/userConstants';

// Components
import Button from '../../components/button/Button';
import UsersTable from './components/UsersTable';

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

export default function UserListPage() {
  // States
  const [openModal, setOpenModal] = useState({ state: 'false', type: '' });
  return (
    <div className="page-content">
      <Header setOpenModal={setOpenModal} />
      <UsersTable setOpenModal={setOpenModal} />
    </div>
  );
}
