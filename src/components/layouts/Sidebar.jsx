import { cloneElement } from 'react';

// Components
import NavBranding from './NavBranding';

// Utils
import LayoutUtils from '../../utils/layoutUtils';

// Constants
import { SidebarPositions } from '../../constants/layoutConstants';

// Page Component
function SidebarHeader({ isSidebarOpen, sidebarConfig }) {
  // Sidebar Config
  const {
    redirectURL = '',
    headerLogo = {},
    collapsedHeaderLogo = {},
  } = sidebarConfig;

  // For sidebar
  const { height: headerLogoHeight = 35, logoURL: headerLogoURL = '' } =
    headerLogo;

  // For Collapsed sidebar
  const {
    height: collapsedHeaderLogoHeight = 30,
    logoURL: collapsedHeaderLogoURL = '',
  } = collapsedHeaderLogo;

  // If anyone of the Logo url is not present
  if (!headerLogoURL || !collapsedHeaderLogoURL) {
    return null;
  }

  // navBrand logo height and url
  const navBrandLogoHeight = isSidebarOpen
    ? headerLogoHeight
    : collapsedHeaderLogoHeight;
  const navBrandLogoUrl = isSidebarOpen
    ? headerLogoURL
    : collapsedHeaderLogoURL;

  return (
    <NavBranding
      height={navBrandLogoHeight}
      logoURL={navBrandLogoUrl}
      redirectURL={redirectURL}
    />
  );
}

/**
 * Sidebar
 * @param {*} sidebarConfig : Object
 * @param {*} isSidebarOpen : Boolean Value
 * @param {*} setShowSideBar : Boolean Value
 * @param {*} sidebarPosition : "left / right"
 */
export default function Sidebar({
  sidebarConfig = {},
  isSidebarOpen = false,
  setIsSidebarOpen = () => {},
  sidebarPosition = SidebarPositions.LEFT,
}) {
  const {
    menuComponent = <></>,
    isSidebarCollapsible = true,
    showHeaderCollapsibleButton = false,
    showFooterCollapsibleButton = false,
  } = sidebarConfig;

  // is sidebarPosition is "left"
  const isLeftSidebar = sidebarPosition === SidebarPositions.LEFT;

  // sidebar ClassName
  const sidebarClassName = LayoutUtils.constructSidebarClassName(
    sidebarPosition,
    isSidebarOpen,
  );

  // iconName and Title
  const footerCollapsibleIconTitle = isSidebarOpen ? 'Collapse' : 'Expand';
  const footerCollapsibleIconName = LayoutUtils.getFooterCollapsibleIconName(
    isSidebarOpen,
    sidebarPosition,
  );

  return (
    <nav className={sidebarClassName}>
      {/* Side bar Header :: only show for sidebarPosition === "left" */}
      {isLeftSidebar && (
        <header>
          <SidebarHeader
            isSidebarOpen={isSidebarOpen}
            sidebarConfig={sidebarConfig}
          />
        </header>
      )}

      {/* top hamburger to close/open sidebar */}
      {showHeaderCollapsibleButton && isSidebarCollapsible && (
        <button
          className="bg-black rounded-circle burger-style"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className="fa fa-fw fa-bars text-white" />
        </button>
      )}

      {/* Menu Component */}
      <div className="sidebar-content">
        {menuComponent && cloneElement(menuComponent, { isSidebarOpen })}
      </div>

      {/* bottom close/open sidebar button */}
      {isSidebarCollapsible && showFooterCollapsibleButton && (
        <footer
          title={footerCollapsibleIconTitle}
          className="sidebar-footer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className={`fa fa-lg ${footerCollapsibleIconName}`} />
        </footer>
      )}
    </nav>
  );
}
