// Constants
import { SidePanelPositions } from '../../constants/layoutConstants';

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
}) {
  // Panel configuration
  const { containerClassName = '', menuComponent = <></> } = sidePanelConfig;

  // title
  const collapseButtonTitle = isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar';

  // className
  const iconClassName = isSidebarPresent && isSidebarOpen ? 'text-primary' : '';

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
        className="burger-cont"
        onClick={handleToggle}
      >
        <i className={`fa fa-bars fa-xl ${iconClassName}`} />
      </div>

      {/* Menu Component */}
      {menuComponent}
    </div>
  );
}
