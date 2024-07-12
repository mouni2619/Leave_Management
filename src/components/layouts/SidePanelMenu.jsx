import { useState } from 'react';

// Constants
import { SidePanelData } from '../../constants/layoutConstants';

/**
 * Side Panel Menu
 * @param {*} menuItems : side panel menu items array
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
        const isSelectedOption = selected === id;
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
