import { cloneElement } from 'react';
import { Menu } from 'lucide-react';

// Constants
import { SidePanelPositions } from '../../constants/layoutConstants';

// Page Constant
const primaryColor = '#3B71CA';

/**
 * Side Panel
 * @param {*} sidePanelConfig : Configuration
 * @param {*} isSidebarPresent : boolean
 * @param {*} isSidebarOpen : boolean
 * @param {*} setIsSidebarOpen : function to change state of open/close sidebar
 * @param {*} panelPosition : panel position (left/right) :: default :: "left"
 */
export default function SidePanel({
  sidePanelConfig = {},
  isSidebarPresent = false,
  isSidebarOpen,
  setIsSidebarOpen,
  panelPosition = SidePanelPositions.LEFT,
  setLeftSidebarMenu = () => {},
}) {
  // Panel configuration
  const { containerClassName = '', menuComponent = <></> } = sidePanelConfig;

  // title
  const collapseButtonTitle = isSidebarOpen ? 'Hide Menu' : 'Show Menu';

  // className
  const iconColor = isSidebarPresent && isSidebarOpen ? primaryColor : 'black';

  // function
  function handleToggle() {
    if (!isSidebarPresent) {
      return;
    }

    // do show/hide sidebar
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={`side-panel ${panelPosition} ${containerClassName} `}>
      {/* Collapse Button */}
      <div
        title={isSidebarPresent ? collapseButtonTitle : ''}
        className="burger-cont d-none"
        onClick={handleToggle}
      >
        <Menu color={iconColor} />
      </div>

      {/* Menu Component */}
      {menuComponent &&
        cloneElement(menuComponent, {
          isSidebarOpen,
          setIsSidebarOpen,
          setLeftSidebarMenu,
        })}
    </div>
  );
}
