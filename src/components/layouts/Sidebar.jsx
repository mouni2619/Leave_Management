import { cloneElement } from 'react';

// Components
import NavBranding from './NavBranding';

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

  if (isSidebarOpen) {
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
 * @param {*} isSidebarOpen : Boolean Value
 * @param {*} setShowSideBar : Boolean Value
 * @param {*} sidebarCollapsible : Boolean Value
 */
export default function Sidebar({
  sidebarConfig = {},
  isSidebarOpen = false,
  setIsSidebarOpen = () => {},
  sidebarCollapsible = false,
  sidebarPosition = 'left',
}) {
  const { menuComponent = <></>, footerComponent = <></> } = sidebarConfig;

  // collapsed style
  const sidebarCollapsedStyle = isSidebarOpen ? '' : 'collapsed';

  return (
    <nav className={`sidebar ${sidebarPosition} ${sidebarCollapsedStyle}`}>
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
      {menuComponent && cloneElement(menuComponent, { isSidebarOpen })}

      <footer className="sidebar-footer">
        {/* Footer Component */}
        {footerComponent && cloneElement(footerComponent, { isSidebarOpen })}
      </footer>
    </nav>
  );
}
