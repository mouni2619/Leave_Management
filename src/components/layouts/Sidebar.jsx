import { cloneElement } from 'react';
import { Menu } from 'lucide-react';

// Components
import NavBranding from './NavBranding';

// Utils
import LayoutUtils from '../../utils/layoutUtils';

// Constants
import { SidebarPositions } from '../../constants/layoutConstants';

// Page Component
function SidebarBranding({ isSidebarOpen, sidebarConfig }) {
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
  isLeftPanelPresent = false,
  isTopbarPresent = false,
  leftSidebarMenu = [],
}) {
  const {
    menuComponent = <></>,
    isSidebarCollapsible = true,
    showHeaderCollapsibleButton = false,
    showFooterCollapsibleButton = false,
  } = sidebarConfig;

  // is sidebarPosition is "left"
  const isLeftSidebar = sidebarPosition === SidebarPositions.LEFT;

  // checking condition to show Sidebar Branding
  const isShowSidebarBranding =
    isLeftSidebar && (!isLeftPanelPresent || !isTopbarPresent);

  // sidebar ClassName
  const sidebarClassName = LayoutUtils.constructSidebarClassName(
    sidebarPosition,
    isSidebarOpen,
  );

  // iconName and Title
  const footerCollapsibleIconTitle = isSidebarOpen ? 'Collapse' : 'Expand';
  const footerCollapsibleIcon = LayoutUtils.getFooterCollapsibleIcon(
    isSidebarOpen,
    sidebarPosition,
  );

  return (
    <nav className={sidebarClassName}>
      {/* top hamburger to close/open sidebar */}
      {showHeaderCollapsibleButton && isSidebarCollapsible && (
        <button
          className="bg-black rounded-circle burger-style"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu color="white" />
        </button>
      )}

      {/* Sidebar Branding */}
      {isShowSidebarBranding && (
        <SidebarBranding
          isSidebarOpen={isSidebarOpen}
          sidebarConfig={sidebarConfig}
        />
      )}

      {/* Menu Component */}
      <div className="sidebar-content">
        {menuComponent &&
          cloneElement(menuComponent, { isSidebarOpen, leftSidebarMenu })}
      </div>

      {/* bottom close/open sidebar button */}
      {isSidebarCollapsible && showFooterCollapsibleButton && (
        <footer
          title={footerCollapsibleIconTitle}
          className="sidebar-footer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {footerCollapsibleIcon}
        </footer>
      )}
    </nav>
  );
}
