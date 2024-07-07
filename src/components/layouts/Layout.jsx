import { useState } from 'react';

// Components
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

// CSS
import '../../assets/themes/_layout.scss';

/**
 * Layout Component
 *TODO :: Handle the case where we need Sidebar but no Topbar
 */
export default function Layout({
  topbarConfig = {},
  leftSidebarConfig = {},
  rightSidebarConfig = {},
  themeId = '',
  outletProps = [],
}) {
  // Sidebar States
  const [isLeftSideOpen, setIsLeftSideOpen] = useState(true);
  const [isRightSideOpen, setIsRightSideOpen] = useState(true);

  // Checking whether topbar and sidebar is present or not
  const isTopbarPresent = Object.keys(topbarConfig).length !== 0;
  const isLeftSidebarPresent = Object.keys(leftSidebarConfig).length !== 0;
  const isRightSidebarPresent = Object.keys(rightSidebarConfig).length !== 0;

  // page layout styles (with topbar and sidebar)
  const layoutTopbarClassName =
    isTopbarPresent && !isLeftSidebarPresent && !isRightSidebarPresent
      ? 'layout-topbar'
      : '';
  const layoutSidebarClassName =
    isLeftSidebarPresent || isRightSidebarPresent ? 'layout-sidebar' : '';

  // is sidebars collapsible
  const isSidebarCollapsible = leftSidebarConfig?.isSidebarCollapsible;
  const isRightSidebarCollapsible = rightSidebarConfig?.isSidebarCollapsible;

  return (
    <div
      data-theme={themeId}
      className={`page ${layoutTopbarClassName} ${layoutSidebarClassName}`}
    >
      {/* Topbar */}
      {isTopbarPresent && (
        <TopNav
          topbarConfig={topbarConfig}
          isLeftSidebarPresent={isLeftSidebarPresent}
          isRightSidebarPresent={isRightSidebarPresent}
          isLeftSideOpen={isLeftSideOpen}
          isRightSideOpen={isRightSideOpen}
        />
      )}

      {/* Left Sidebar */}
      {isLeftSidebarPresent && (
        <Sidebar
          sidebarConfig={leftSidebarConfig}
          isSidebarOpen={isLeftSideOpen}
          setIsSidebarOpen={setIsLeftSideOpen}
          sidebarCollapsible={isSidebarCollapsible}
        />
      )}

      {/* Main Content */}
      <MainContent
        outletProps={outletProps}
        isLeftSidebarPresent={isLeftSidebarPresent}
        isRightSidebarPresent={isRightSidebarPresent}
        isLeftSideOpen={isLeftSideOpen}
        isRightSideOpen={isRightSideOpen}
      />

      {/* Right Sidebar */}
      {isRightSidebarPresent && (
        <Sidebar
          sidebarPosition="right"
          sidebarConfig={rightSidebarConfig}
          isSidebarOpen={isRightSideOpen}
          setIsSidebarOpen={setIsRightSideOpen}
          sidebarCollapsible={isRightSidebarCollapsible}
        />
      )}
    </div>
  );
}
