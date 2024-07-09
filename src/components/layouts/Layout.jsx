import { useState } from 'react';

// Constants
import { SidebarPositions } from '../../constants/layoutConstants';

// Utils
import LayoutUtils from '../../utils/layoutUtils';

// Components
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

/**
 * Layout Component
 * TODO :: Handle the case where we need Sidebar but no Topbar
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

  // construct className for topnav
  const topNavClassName = LayoutUtils.constructTopnavClassName(
    isLeftSideOpen,
    isRightSideOpen,
    isLeftSidebarPresent,
    isRightSidebarPresent,
  );

  // page Layout ClassName (with topbar and sidebar)
  const pageLayoutClassName = LayoutUtils.constructPageLayoutClassName(
    isTopbarPresent,
    isLeftSidebarPresent,
    isRightSidebarPresent,
  );

  // construct main container className
  const mainContentClassName = LayoutUtils.constructMainContentClassName(
    isLeftSideOpen,
    isRightSideOpen,
    isLeftSidebarPresent,
    isRightSidebarPresent,
  );

  return (
    <div data-theme={themeId} className={pageLayoutClassName}>
      {/* Topbar */}
      {isTopbarPresent && (
        <TopNav topbarConfig={topbarConfig} topNavClassName={topNavClassName} />
      )}

      {/* Left Sidebar */}
      {isLeftSidebarPresent && (
        <Sidebar
          sidebarConfig={leftSidebarConfig}
          isSidebarOpen={isLeftSideOpen}
          setIsSidebarOpen={setIsLeftSideOpen}
        />
      )}

      {/* Main Content */}
      <MainContent
        outletProps={outletProps}
        mainContentClassName={mainContentClassName}
      />

      {/* Right Sidebar */}
      {isRightSidebarPresent && (
        <Sidebar
          sidebarPosition={SidebarPositions.RIGHT}
          sidebarConfig={rightSidebarConfig}
          isSidebarOpen={isRightSideOpen}
          setIsSidebarOpen={setIsRightSideOpen}
        />
      )}
    </div>
  );
}
