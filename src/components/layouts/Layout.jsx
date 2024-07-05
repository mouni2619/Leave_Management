import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import TopNav from './TopNav';
import Sidebar from './Sidebar';

// CSS
import '../../assets/themes/_layout.scss';

/**
 * Layout Component
 *TODO :: Handle the case where we need Sidebar but no Topbar
 */
export default function Layout({
  topbarConfig = {},
  sidebarConfig = {},
  rightSidebarConfig = {},
  themeId = '',
  outletProps = [],
}) {
  // Page State
  const [showSideBar, setShowSideBar] = useState(true);
  const [showRightSideBar, setShowRightSideBar] = useState(true);

  // Checking whether topbar and sidebar is present or not
  const isTopbarPresent = Object.keys(topbarConfig).length !== 0;
  const isSidebarPresent = Object.keys(sidebarConfig).length !== 0;
  const isRightSidebarPresent = Object.keys(rightSidebarConfig).length !== 0;

  // Data
  const layoutTopbarClassName =
    isTopbarPresent && !isSidebarPresent && !isRightSidebarPresent
      ? 'layout-topbar'
      : '';
  const layoutSidebarClassName =
    isSidebarPresent || isRightSidebarPresent ? 'layout-sidebar' : '';

  const isSidebarCollapsed = isSidebarPresent && !showSideBar;
  const isRightSidebarCollapsed = isRightSidebarPresent && !showRightSideBar;

  // main container collapsed style
  const leftSidebarCollapsedStyle = isSidebarCollapsed ? 'left-collapsed' : '';
  const rightSidebarCollapsedStyle = isRightSidebarCollapsed
    ? 'right-collapsed'
    : '';
  const combineCollapsedStyle = `${leftSidebarCollapsedStyle} ${rightSidebarCollapsedStyle}`;

  // main container sidebar keys
  const leftSidebarKey = isSidebarPresent ? 'left' : '';
  const rightSidebarKey = isRightSidebarPresent ? 'right' : '';
  const existingSidebarsKeys = `${leftSidebarKey} ${rightSidebarKey}`;

  // is sidebars collapsible
  const isSidebarCollapsible = sidebarConfig.isSidebarCollapsible || false;
  const isRightSidebarCollapsible =
    rightSidebarConfig.isSidebarCollapsible || false;

  return (
    <div
      data-theme={themeId}
      className={`page ${layoutTopbarClassName} ${layoutSidebarClassName}`}
    >
      {/* Topbar */}
      {isTopbarPresent && (
        <TopNav
          topbarConfig={topbarConfig}
          showSideBar={showSideBar}
          showRightSideBar={showRightSideBar}
          isSidebarPresent={isSidebarPresent}
          isRightSidebarPresent={isRightSidebarPresent}
        />
      )}

      {/* Left Sidebar */}
      {isSidebarPresent && (
        <Sidebar
          sidebarConfig={sidebarConfig}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          sidebarCollapsible={isSidebarCollapsible}
        />
      )}

      {/* Main Content */}
      <div
        className={`main-cont ${combineCollapsedStyle} ${existingSidebarsKeys}`}
      >
        <div className={'content-wrapper'}>
          <Outlet context={outletProps} />
        </div>
      </div>

      {/* Right Sidebar */}
      {isRightSidebarPresent && (
        <Sidebar
          sidebarConfig={rightSidebarConfig}
          showSideBar={showRightSideBar}
          setShowSideBar={setShowRightSideBar}
          sidebarCollapsible={isRightSidebarCollapsible}
          sidebarPosition="right"
        />
      )}
    </div>
  );
}
