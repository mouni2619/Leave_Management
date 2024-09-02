/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sub item
function SubItem({
  subItem = {},
  selectedSubItemId,
  setSelectedSubItemId,
  isSidebarOpen = false,
  setLeftSidebarMenu = () => {},
  setIsLeftSidebarContentOpen = () => {},
}) {
  const navigate = useNavigate();

  // Data
  const { id = '', label = '', link = '' } = subItem;

  // is subItem selected
  const isSubItemSelected = selectedSubItemId === id;

  // handle selected subItem
  function handleSelectSubItem() {
    setSelectedSubItemId(id);
    navigate(link);
  }

  return (
    <li
      className={`sub-item-left d-flex cursor-pointer ${isSubItemSelected ? 'selected' : ''}`}
      onClick={handleSelectSubItem}
    >
      <h5 className="mx-2 mb-0">{label}</h5>
    </li>
  );
}

export default function LeftSidebarContentMenu({
  leftSidebarMenu = [],
  sidebarMenuList = [],
}) {
  // menu List
  const [menuList, setMenuList] = useState([]);
  // State
  const [selectedSubItemId, setSelectedSubItemId] = useState();

  // useEffect to initial update of menu list
  useEffect(() => {
    const initialSelectedMenu = leftSidebarMenu[0]?.id;
    setSelectedSubItemId(initialSelectedMenu);

    const initialMenuList =
      sidebarMenuList.length > 0 ? sidebarMenuList : leftSidebarMenu;

    // update state
    setMenuList(initialMenuList);
  }, [leftSidebarMenu]);
  return (
    <ul className={`nav-links`}>
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
