import { cloneElement } from 'react';

// Components
import NavBranding from './NavBranding';

// Page Component
function SidebarHeader({ showSideBar, sidebarConfig }) {
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

  if (showSideBar) {
    return (
      <NavBranding
        height={headerLogoHeight}
        logoURL={headerLogoURL}
        redirectURL={redirectURL}
      />
    );
  }

  return (
    <NavBranding
      height={collapsedHeaderLogoHeight}
      logoURL={collapsedHeaderLogoURL}
      redirectURL={redirectURL}
    />
  );
}

/**
 * Sidebar
 * @param {*} sidebarConfig : Object
 * @param {*} showSideBar : Boolean Value
 * @param {*} setShowSideBar : Boolean Value
 * @param {*} sidebarCollapsible : Boolean Value
 */
export default function Sidebar({
  sidebarConfig = {},
  showSideBar = false,
  setShowSideBar,
  sidebarCollapsible = false,
  sidebarPosition = 'left',
}) {
  const { menuComponent = <></>, footerComponent = <></> } = sidebarConfig;

  return (
    <nav
      className={`sidebar ${sidebarPosition} ${showSideBar ? '' : 'collapsed'}`}
    >
      <header>
        {/* Side bar Header */}
        <SidebarHeader
          showSideBar={showSideBar}
          sidebarConfig={sidebarConfig}
          setShowSideBar={setShowSideBar}
          sidebarCollapsible={sidebarCollapsible}
        />
      </header>

      {sidebarCollapsible && (
        <button
          className="bg-black rounded-circle burger-style"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <i className="fa fa-fw fa-bars text-white" />
        </button>
      )}

      {/* Menu Component */}
      {menuComponent && cloneElement(menuComponent, { showSideBar })}

      <footer className="sidebar-footer ms-0">
        {/* Footer Component */}
        {footerComponent && cloneElement(footerComponent, { showSideBar })}
      </footer>
    </nav>
  );
}
