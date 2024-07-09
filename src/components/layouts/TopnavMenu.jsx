import { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useToggleMenu } from '../../hooks/useToggleMenu';

// Constants
import { TopnavData } from '../../constants/layoutConstants';

// profile menu constants
const profileMenuOptions = [
  {
    label: 'Profile',
    onClick: () => {},
    iconName: 'fa-user',
  },
  {
    label: 'Settings',
    onClick: () => {},
    iconName: 'fa-gear',
  },
  {
    label: 'Logout',
    onClick: () => {},
    iconName: 'fa-arrow-right-from-bracket',
  },
];

// User Profile
function UserProfile() {
  // custom hooks
  const [showMenu, toggleMenu, menuRef] = useToggleMenu();

  return (
    <div ref={menuRef} className="user-profile" onClick={toggleMenu}>
      {/* icon */}
      <i className="fa fa-user fa-xl" />

      {/* Menu items */}
      {showMenu && (
        <ul className="rounded-3 bg-white shadow-lg p-2">
          {profileMenuOptions.map((item, i) => {
            const { label, onClick, iconName } = item;
            return (
              <li
                key={i}
                title={label}
                className={`d-flex align-items-center py-2 px-4 cursor-pointer`}
                onClick={onClick}
              >
                <i className={`fa ${iconName} me-2`} />
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
  defaultSelectedId = 2,
}) {
  // state
  const [selectedItemId, setSelectedItemId] = useState(defaultSelectedId);

  // topnav menu items
  const menuItems = topnavItems.length > 0 ? topnavItems : TopnavData;

  return (
    <div className="page-header">
      {/* items */}
      <ul className="nav-links">
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
