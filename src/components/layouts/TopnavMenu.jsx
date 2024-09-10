import { Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CircleUserRound, LogOut, Settings, UserRound } from 'lucide-react';

// Actions
import { AuthActions } from '../../store/redux-slices/authSlice';

// Constants
import PageUrls from '../../constants/pageUrls';

// User Profile Menu
function ProfileMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(AuthActions.logout());
    navigate(PageUrls.LoginPage);
  };

  const profileMenuOptions = {
    items: [
      {
        key: '1',
        label: 'Profile',
        icon: <UserRound />,
        onClick: () => {},
        className: 'p-2 px-3',
      },
      {
        key: '2',
        label: 'Settings',
        icon: <Settings />,
        onClick: () => {},
        className: 'p-2 px-3',
      },
      {
        key: '3',
        label: 'Logout',
        icon: <LogOut />,
        onClick: logout,
        className: 'p-2 px-3',
      },
    ],
  };
  return (
    <Dropdown
      menu={profileMenuOptions}
      className="cursor-pointer py-2"
      placement="bottomRight"
      arrow
    >
      <a
        className="d-flex justify-content-center align-items-center text-decoration-none topbar-profile"
        onClick={(e) => e.preventDefault()}
      >
        {/* User Profile Icon */}
        <CircleUserRound size={32} />
      </a>
    </Dropdown>
  );
}

/**
 * Topnav Menu
 */
export default function TopnavMenu() {
  return (
    <div className="px-5 d-flex justify-content-end w-100 align-items-center">
      <ProfileMenu />
    </div>
  );
}
