import { useState } from 'react';
import { Link } from 'react-router-dom';

// Page Constants
const sidebarData = [
  {
    id: 1,
    title: 'Item 1',
    iconName: 'fa-user',
    subItems: [
      { label: 'Sub Item 1', id: 'a', link: '' },
      { label: 'Sub Item 2', id: 'b', link: '' },
      { label: 'Sub Item 3', id: 'c', link: '' },
    ],
  },
  {
    id: 2,
    title: 'Item 2',
    iconName: 'fa-user-cog',
    subItems: [
      { label: 'Sub Item 1', id: 'd', link: '' },
      { label: 'Sub Item 2', id: 'e', link: '' },
      { label: 'Sub Item 3', id: 'f', link: '' },
    ],
  },
  {
    id: 3,
    title: 'Item 3',
    iconName: 'fa-user-check',
    subItems: [
      { label: 'Sub Item 1', id: 'g', link: '' },
      { label: 'Sub Item 2', id: 'h', link: '' },
      { label: 'Sub Item 3', id: 'i', link: '' },
    ],
  },
  {
    id: 4,
    title: 'Item 4',
    iconName: 'fa-user-group',
  },
];

// Sub item
function SubItem({ subItem = {}, selectedSubItemId, setSelectedSubItemId }) {
  // Data
  const { label, id, link } = subItem;

  // is subItem selected
  const isSubItemSelected = selectedSubItemId === id;

  // handle selected subItem
  function handleSelectSubItem() {
    setSelectedSubItemId(id);
  }

  return (
    <li
      className={`sub-item ${isSubItemSelected ? 'selected' : ''}`}
      onClick={handleSelectSubItem}
    >
      <Link to={link}>{label}</Link>
    </li>
  );
}

/**
 * {
 *   label: "Some text",
 *   id: "1",
 *   subItem: []
 * }
 */
export function MenuItem({
  menuGroup = {},
  isSidebarCollapsed,
  selectedItems,
  setSelectedItems,
}) {
  // State
  const [selectedSubItemId, setSelectedSubItemId] = useState('');

  // data
  const { title = '', id, iconName, subItems = [] } = menuGroup || {};

  // checking any subItems present or not
  const isSubItemsPresent = subItems.length > 0;

  // selected items
  const selectedItemsIds = selectedItems.map((item) => item.id);

  // checking item is selected
  const isItemSelected = selectedItemsIds.includes(id);

  // handleSelectItem
  function handleSelectItem() {
    // if item not selected then adding to selectedItems
    if (!isItemSelected) {
      setSelectedItems([...selectedItems, menuGroup]);
      return;
    }

    // if already selected then remove from selectedItems
    const filteredArray = selectedItems.filter((item) => item.id !== id);
    // update array
    setSelectedItems(filteredArray);
  }

  // toggle arrow style
  const toggleArrowName = isItemSelected ? 'fa-chevron-up' : 'fa-chevron-down';

  // checking to show subItems or not
  const isShowSubItems =
    isSubItemsPresent && isItemSelected && !isSidebarCollapsed;

  return (
    <div className={`nav-item ${isItemSelected ? 'selected' : ''}`}>
      {/* Menu Item Title */}
      {!isSidebarCollapsed && (
        <div
          className={`d-flex align-items-center justify-content-between ${isItemSelected ? 'text-primary mb-2' : ''}`}
          onClick={handleSelectItem}
        >
          <div className="d-flex align-items-center">
            <i className={`fa fa-xl nav-item-icon ${iconName}`} />
            <h5 className="mx-2 mb-0">{title}</h5>
          </div>

          {/* arrow : open / close menu */}
          {isSubItemsPresent && <i className={`fa ${toggleArrowName}`} />}
        </div>
      )}

      {/* only icon : collapsed state */}
      {isSidebarCollapsed && (
        <i
          className={`fa fa-xl ${iconName}`}
          title={title}
          onClick={handleSelectItem}
        />
      )}

      {/* Sub Items */}
      {isShowSubItems && (
        <ul className="menu-items">
          {subItems.map((subItem) => (
            <SubItem
              key={subItem.id}
              subItem={subItem}
              selectedSubItemId={selectedSubItemId}
              setSelectedSubItemId={setSelectedSubItemId}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Sidebar Menus
 * @param {*} sidebarMenuList : Array of menus
 * @param {*} backButtonConfig : Object
 * @param {*} defaultSelectedMenu : String
 * @param {*} showSideBar : Boolean Value
 */
export default function SidebarMenu({
  isSidebarOpen = false,
  sidebarMenuList = [],
  defaultSelectedItems = [],
}) {
  // State
  const [selectedItems, setSelectedItems] = useState(defaultSelectedItems);

  // menu List
  const menuList = sidebarMenuList.length > 0 ? sidebarMenuList : sidebarData;

  return (
    <ul
      className={`nav-links ${isSidebarOpen ? '' : 'overflow-hidden text-center'}`}
    >
      {/* Iterate over Menu group list */}
      {menuList.map((menuGroup) => {
        return (
          <MenuItem
            key={menuGroup.id}
            menuGroup={menuGroup}
            isSidebarCollapsed={!isSidebarOpen}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        );
      })}
    </ul>
  );
}
