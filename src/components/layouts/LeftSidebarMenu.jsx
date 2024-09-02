/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'antd';

// Constants
import { LeftSidebarDefaultData } from '../../constants/layoutConstants';

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
  const {
    id = '',
    icon = <></>,
    title = '',
    subItems = [],
    link = '',
  } = subItem;

  // is subItem selected
  const isSubItemSelected = selectedSubItemId === id;

  const isSubItemsPresent = subItems.length > 0;

  // handle selected subItem
  function handleSelectSubItem() {
    setSelectedSubItemId(id);
    if (isSubItemsPresent) {
      navigate(subItems[0].link);
      setLeftSidebarMenu(subItems);
      setIsLeftSidebarContentOpen(true);
      return;
    }
    setIsLeftSidebarContentOpen(false);
    setLeftSidebarMenu([]);
    navigate(link);
  }

  return (
    <li
      className={`sub-item-left d-flex ${isSidebarOpen ? '' : 'justify-content-center'} cursor-pointer ${isSubItemSelected ? 'selected' : ''}`}
      onClick={handleSelectSubItem}
    >
      {/* Show Tooltip only when only icon in collapsed sidebar */}
      {!isSidebarOpen && (
        <Tooltip placement="right" title={title}>
          {icon}
        </Tooltip>
      )}

      {isSidebarOpen && icon}
      {isSidebarOpen ? <h5 className="mx-2 mb-0">{title}</h5> : null}
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
  setLeftSidebarMenu = () => {},
  setIsLeftSidebarContentOpen = () => {},
}) {
  // menu List
  const [menuList, setMenuList] = useState([]);
  // State
  const [selectedSubItemId, setSelectedSubItemId] = useState();

  // useEffect to initial update of menu list
  useEffect(() => {
    const initialMenuList =
      sidebarMenuList.length > 0 ? sidebarMenuList : LeftSidebarDefaultData;

    // update state
    setMenuList(initialMenuList);
  }, []);

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
            isSidebarOpen={isSidebarOpen}
            setLeftSidebarMenu={setLeftSidebarMenu}
            setIsLeftSidebarContentOpen={setIsLeftSidebarContentOpen}
          />
        );
      })}
    </ul>
  );
}
