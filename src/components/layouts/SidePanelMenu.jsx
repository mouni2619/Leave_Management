import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Constants
import { SidePanelData } from '../../constants/layoutConstants';

/**
 * Side Panel Menu
 * @param {*} menuItems : side panel menu items array
 * below params default params for this function. ------------------
 * (if needed just import them as params to component)
 * that can be used for adding additional functionality in this menu component
 * @param {*} isSidebarOpen : sidebar state (open/close)
 * @param {*} setIsSidebarOpen : set function to change sidebar state
 */
export default function SidePanelMenu({
  menuItems = [],
  setIsSidebarOpen = () => {},
  setLeftSidebarMenu = () => {},
}) {
  const navigate = useNavigate();

  // state
  const [selected, setSelected] = useState('');

  // side panel menu items
  const sidePanelMenuItems = menuItems.length > 0 ? menuItems : SidePanelData;

  function handleSelect(id, link, subItems) {
    setSelected(id);

    const isSubItemsPresent = subItems.length > 0;
    if (isSubItemsPresent) {
      setLeftSidebarMenu(subItems);
      setIsSidebarOpen(true);
      navigate(subItems[0].link);
      return;
    }
    setIsSidebarOpen(false);
    navigate(link);
  }

  return (
    <div className="panel-menu">
      {sidePanelMenuItems.map((info) => {
        const { id = '', icon = <></>, link = '', subItems = [] } = info;
        const isSelectedOption = selected === id;
        const selectedCLassName = isSelectedOption ? 'selected' : '';

        return (
          <div
            key={id}
            className={`panel-item ${selectedCLassName}`}
            onClick={() => handleSelect(id, link, subItems)}
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
}
