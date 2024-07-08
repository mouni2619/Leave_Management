import { useState } from 'react';

// Components
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

// Constants
import { PageLayoutClassNames } from '../../constants/layoutConstants';

// construct Page Layout ClassName
function constructPageLayoutClassName(
  isTopbarPresent,
  isLeftSidebarPresent,
  isRightSidebarPresent,
) {
  // Case 1: Only Topbar Layout
  if (isTopbarPresent && !isLeftSidebarPresent && !isRightSidebarPresent) {
    return PageLayoutClassNames.ONLY_TOPBAR_LAYOUT;
  }

  // Case 2: Top With Sidebar Layout
  if (isLeftSidebarPresent || isRightSidebarPresent) {
    return PageLayoutClassNames.TOP_WITH_SIDEBAR_LAYOUT;
  }

  // DEFAULT : Only Page
  return PageLayoutClassNames.ONLY_PAGE;
}

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

  // is sidebars collapsible
  const isSidebarCollapsible = leftSidebarConfig?.isSidebarCollapsible;
  const isRightSidebarCollapsible = rightSidebarConfig?.isSidebarCollapsible;

  // page Layout ClassName (with topbar and sidebar)
  const pageLayoutClassName = constructPageLayoutClassName(
    isTopbarPresent,
    isLeftSidebarPresent,
    isRightSidebarPresent,
  );

  return (
    <div data-theme={themeId} className={pageLayoutClassName}>
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
