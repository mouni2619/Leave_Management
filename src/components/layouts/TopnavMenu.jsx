import { useState } from 'react';
import { Link } from 'react-router-dom';

// Page Constants
const topnavData = [
  { id: 1, title: 'Home', link: '' },
  { id: 2, title: 'Features', link: '' },
  { id: 3, title: 'Contacts', link: '' },
  { id: 4, title: 'Settings', link: '' },
];

// User Profile
function UserProfile() {
  return (
    <div className="user-profile">
      <i className="fa fa-user fa-xl" />
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
export default function TopnavMenu({ topnavItems = [], defaultSelected = '' }) {
  // state
  const [selectedItemId, setSelectedItemId] = useState(2);

  // topnav menu items
  const menuItems = topnavItems.length > 0 ? topnavItems : topnavData;

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
