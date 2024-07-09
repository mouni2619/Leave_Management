import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Constants
import { SidebarDefaultData } from '../../constants/layoutConstants';

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
function MenuItem({
  index,
  menuGroup = {},
  isSidebarCollapsed,
  menuList = [],
  setMenuList,
}) {
  // State
  const [selectedSubItemId, setSelectedSubItemId] = useState('');

  // data
  const { title = '', iconName, isSelected, subItems = [] } = menuGroup || {};

  // checking any subItems present or not
  const isSubItemsPresent = subItems.length > 0;

  // handleSelectItem
  function handleSelectItem() {
    // cloned menuList and menuGroup
    const clonedMenuList = [...menuList];
    const clonedMenuGroup = { ...menuGroup };

    // if item not selected then changing key to :: isSelected = true
    if (!isSelected) {
      clonedMenuGroup.isSelected = true;

      // updating state
      clonedMenuList[index] = clonedMenuGroup;
      setMenuList(clonedMenuList);
      return;
    }

    // if already selected, then changing key :: isSelected = false
    clonedMenuGroup.isSelected = false;
    // updating state
    clonedMenuList[index] = clonedMenuGroup;
    setMenuList(clonedMenuList);
  }

  // toggle arrow style
  const toggleArrowName = isSelected ? 'fa-chevron-up' : 'fa-chevron-down';

  // checking to show subItems or not
  const isShowSubItems = isSubItemsPresent && isSelected && !isSidebarCollapsed;

  return (
    <div className={`nav-item ${isSelected ? 'selected' : ''}`}>
      {/* Menu Item Title */}
      {!isSidebarCollapsed && (
        <div
          className={`d-flex align-items-center justify-content-between ${isSelected ? 'text-primary mb-2' : ''}`}
          onClick={handleSelectItem}
        >
          <div className="d-flex align-items-center">
            <i className={`fa fa-lg nav-item-icon ${iconName}`} />
            <h6 className="mx-2 mb-0">{title}</h6>
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
 * Sidebar Menu
 * @param {*} isSidebarOpen : Boolean Value
 * @param {*} sidebarMenuList : Array of menus
 */
export default function SidebarMenu({
  isSidebarOpen = false,
  sidebarMenuList = [],
}) {
  // menu List
  const [menuList, setMenuList] = useState([]);

  // useEffect to initial update of menu list
  useEffect(() => {
    const initialMenuList =
      sidebarMenuList.length > 0 ? sidebarMenuList : SidebarDefaultData;

    // update state
    setMenuList(initialMenuList);
  }, []);

  return (
    <ul
      className={`nav-links ${isSidebarOpen ? '' : 'overflow-hidden text-center'}`}
    >
      {/* Iterate over Menu group list */}
      {menuList.map((menuGroup, index) => {
        return (
          <MenuItem
            key={menuGroup.id}
            index={index}
            menuGroup={menuGroup}
            isSidebarCollapsed={!isSidebarOpen}
            menuList={menuList}
            setMenuList={setMenuList}
          />
        );
      })}
    </ul>
  );
}
