import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Settings, User, UserRound } from 'lucide-react';

// Hooks
import { useToggleMenu } from '../../hooks/useToggleMenu';

// profile menu constants
const profileMenuOptions = [
  {
    label: 'Profile',
    onClick: () => {},
    iconName: <User />,
  },
  {
    label: 'Settings',
    onClick: () => {},
    iconName: <Settings />,
  },
  {
    label: 'Logout',
    onClick: () => {},
    iconName: <LogOut />,
  },
];

// User Profile
function UserProfile() {
  // custom hooks
  const [showMenu, toggleMenu, menuRef] = useToggleMenu();

  return (
    <div ref={menuRef} className="user-profile" onClick={toggleMenu}>
      {/* icon */}
      <UserRound />

      {/* Menu items */}
      {showMenu && (
        <ul className="rounded-3 bg-white shadow-lg p-2">
          {profileMenuOptions.map((item, i) => {
            const { label, onClick, iconName } = item;
            return (
              <li
                key={i}
                className={`d-flex align-items-center py-2 px-3 gap-2 cursor-pointer`}
                onClick={onClick}
              >
                {iconName}
                <span>{label}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// Topnav Menu Item
function TopnavMenuItem({
  menuItem = {},
  selectedItemId,
  setSelectedItemId = () => {},
}) {
  // data
  const { id, title, link } = menuItem;

  // checking is item selected
  const isItemSelected = selectedItemId === id;

  return (
    <li
      className={`nav-item ${isItemSelected ? 'selected' : ''}`}
      onClick={() => setSelectedItemId(id)}
    >
      <Link to={link}>
        <p className="mb-0">{title}</p>
      </Link>
    </li>
  );
}

/**
 * Topnav Menu
 */
export default function TopnavMenu({
  topnavItems = [],
  defaultSelectedId = 1,
}) {
  // state
  const [selectedItemId, setSelectedItemId] = useState(defaultSelectedId);

  // topnav menu items
  const menuItems = topnavItems;

  return (
    <div className="page-header">
      {/* items */}
      <ul className="nav-links invisible">
        {menuItems.map((item) => (
          <TopnavMenuItem
            key={item.id}
            menuItem={item}
            selectedItemId={selectedItemId}
            setSelectedItemId={setSelectedItemId}
          />
        ))}
      </ul>

      {/* user profile */}
      <UserProfile />
    </div>
  );
}
