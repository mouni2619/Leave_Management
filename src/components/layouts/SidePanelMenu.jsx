import { useState } from 'react';

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
export default function SidePanelMenu({ menuItems = [] }) {
  // state
  const [selected, setSelected] = useState(1);

  // side panel menu items
  const sidePanelMenuItems = menuItems.length > 0 ? menuItems : SidePanelData;

  return (
    <div className="panel-menu">
      {sidePanelMenuItems.map((info) => {
        const { id, label, icon } = info;

        // checking selected or not
        const isSelectedOption = selected === id;

        // selected className
        const selectedCLassName = isSelectedOption ? 'selected' : '';

        return (
          <div
            key={id}
            className={`panel-item ${selectedCLassName}`}
            onClick={() => setSelected(id)}
          >
            <i title={label} className={`fa ${icon} fa-xl`} />
          </div>
        );
      })}
    </div>
  );
}
