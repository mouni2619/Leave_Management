/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      className={`sub-item-left cursor-pointer ${isSubItemSelected ? 'selected' : ''}`}
      onClick={handleSelectSubItem}
    >
      <h5 className="mx-2 mb-0">{label}</h5>
    </li>
  );
}

/**
 * Sidebar Menu
 * @param {*} isSidebarOpen : Boolean Value
 * @param {*} sidebarMenuList : Array of menus
 */
export default function LeftSidebarMenu({
  isSidebarOpen = false,
  sidebarMenuList = [],
  leftSidebarMenu = [],
}) {
  // menu List
  const [menuList, setMenuList] = useState([]);
  // State
  const [selectedSubItemId, setSelectedSubItemId] = useState();

  // useEffect to initial update of menu list
  useEffect(() => {
    const initialSelectedMenuId = leftSidebarMenu[0]?.id || '';
    setSelectedSubItemId(initialSelectedMenuId);

    const initialMenuList =
      sidebarMenuList.length > 0 ? sidebarMenuList : leftSidebarMenu;

    // update state
    setMenuList(initialMenuList);
  }, [leftSidebarMenu]);

  return (
    <ul
      className={`nav-links ${isSidebarOpen ? '' : 'overflow-hidden text-center'}`}
    >
      {menuList.map((menu, index) => {
        return (
          <SubItem
            key={index}
            subItem={menu}
            selectedSubItemId={selectedSubItemId}
            setSelectedSubItemId={setSelectedSubItemId}
          />
        );
      })}
    </ul>
  );
}
