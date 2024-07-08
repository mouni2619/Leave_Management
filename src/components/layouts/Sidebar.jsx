import { cloneElement } from 'react';

// Components
import NavBranding from './NavBranding';

// Constants
import {
  SidebarClassNames,
  SidebarPositions,
} from '../../constants/layoutConstants';

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

// construct Sidebar ClassName
function constructSidebarClassName(sidebarPosition, isSidebarOpen) {
  // Case 1: Position = "right"
  if (sidebarPosition === SidebarPositions.right) {
    // with collapsed
    if (!isSidebarOpen) {
      return SidebarClassNames.ONLY_RIGHT_SIDE_BAR_AND_COLLAPSED;
    }

    // without collapsed
    return SidebarClassNames.ONLY_RIGHT_SIDE_BAR;
  }

  // DEFAULT :: Position = "left"
  // with collapsed
  if (!isSidebarOpen) {
    return SidebarClassNames.ONLY_LEFT_SIDE_BAR_AND_COLLAPSED;
  }

  // without collapsed
  return SidebarClassNames.ONLY_LEFT_SIDE_BAR;
}

/**
 * Sidebar
 * @param {*} sidebarConfig : Object
 * @param {*} isSidebarOpen : Boolean Value
 * @param {*} setShowSideBar : Boolean Value
 * @param {*} sidebarCollapsible : Boolean Value
 */
export default function Sidebar({
  sidebarConfig = {},
  isSidebarOpen = false,
  setIsSidebarOpen = () => {},
  sidebarCollapsible = false,
  sidebarPosition = SidebarPositions.left,
}) {
  const { menuComponent = <></>, footerComponent = <></> } = sidebarConfig;

  // sidebar ClassName
  const sidebarClassName = constructSidebarClassName(
    sidebarPosition,
    isSidebarOpen,
  );

  return (
    <nav className={sidebarClassName}>
      <header>
        {/* Side bar Header */}
        <SidebarHeader
          isSidebarOpen={isSidebarOpen}
          sidebarConfig={sidebarConfig}
        />
      </header>

      {sidebarCollapsible && (
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

      <footer className="sidebar-footer">
        {/* Footer Component */}
        {footerComponent && cloneElement(footerComponent, { isSidebarOpen })}
      </footer>
    </nav>
  );
}
