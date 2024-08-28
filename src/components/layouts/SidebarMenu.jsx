/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Constants
import { SidebarDefaultData } from '../../constants/layoutConstants';

// Sub item
function SubItem({ subItem = {}, selectedSubItemId, setSelectedSubItemId }) {
  const navigate = useNavigate();

  // Data
  const { label, id, link } = subItem;

  // is subItem selected
  const isSubItemSelected = selectedSubItemId === id;

  // handle selected subItem
  function handleSelectSubItem() {
    setSelectedSubItemId(id);
    navigate(link);
  }

  return (
    <li
      className={`sub-item ${isSubItemSelected ? 'selected' : ''}`}
      onClick={handleSelectSubItem}
    >
      {label}
    </li>
  );
}

/**
 * {
 *   title: "Some text",
 *   id: "1",
 *   icon: <></>,
 *   isSelected: false,
 *   subItems: []
 * }
 */
function MenuItem({
  index,
  menuGroup = {},
  isSidebarCollapsed,
  menuList = [],
  setMenuList,
  selectedSubItemId = '',
  setSelectedSubItemId = () => {},
}) {
  // data
  const {
    title = '',
    icon = <></>,
    isSelected = false,
    subItems = [],
  } = menuGroup || {};

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
  const toggleArrowName = isSelected ? <ChevronUp /> : <ChevronDown />;

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
            {icon}
            <h5 className="mx-2 mb-0">{title}</h5>
          </div>

          {/* arrow : open / close menu */}
          {isSubItemsPresent && toggleArrowName}
        </div>
      )}

      {/* only icon : collapsed state */}
      {isSidebarCollapsed && icon}

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
  // State
  const [selectedSubItemId, setSelectedSubItemId] = useState('');

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
            selectedSubItemId={selectedSubItemId}
            setSelectedSubItemId={setSelectedSubItemId}
          />
        );
      })}
    </ul>
  );
}
