import { useState } from 'react';

// Constants
import { SidebarPositions } from '../../constants/layoutConstants';

// Utils
import LayoutUtils from '../../utils/layoutUtils';

// Components
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SidePanel from './SidePanel';

/**
 * Layout Component
 */
export default function Layout({
  leftPanelConfig = {},
  topbarConfig = {},
  leftSidebarConfig = {},
  rightSidebarConfig = {},
  themeId = '',
  outletProps = [],
}) {
  // Sidebar States for open/close
  const [isLeftSideOpen, setIsLeftSideOpen] = useState(true);
  const [isRightSideOpen, setIsRightSideOpen] = useState(true);

  // Checking whether topbar and sidebar is present or not
  const isTopbarPresent = Object.keys(topbarConfig).length !== 0;
  const isLeftSidebarPresent = Object.keys(leftSidebarConfig).length !== 0;
  const isRightSidebarPresent = Object.keys(rightSidebarConfig).length !== 0;
  const isLeftPanelPresent = Object.keys(leftPanelConfig).length !== 0;

  // condition to show "Topnav Branding Logo"
  const isShowTopnavBranding = isLeftPanelPresent || !isLeftSidebarPresent;

  // page Layout ClassName (with topbar and sidebar)
  const pageLayoutClassName = LayoutUtils.constructPageLayoutClassName(
    isTopbarPresent,
    isLeftSidebarPresent,
    isRightSidebarPresent,
    isLeftPanelPresent,
  );

  // construct className for topnav
  const topNavClassName = LayoutUtils.constructTopnavClassName(
    isLeftSideOpen,
    isRightSideOpen,
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
      {/* Left Panel */}
      {isLeftPanelPresent && (
        <SidePanel
          sidePanelConfig={leftPanelConfig}
          isSidebarPresent={isLeftSidebarPresent}
          isSidebarOpen={isLeftSideOpen}
          setIsSidebarOpen={setIsLeftSideOpen}
        />
      )}

      {/* Topbar */}
      {isTopbarPresent && (
        <TopNav
          topbarConfig={topbarConfig}
          topNavClassName={topNavClassName}
          isLeftPanelPresent={isLeftPanelPresent}
          isShowTopnavBranding={isShowTopnavBranding}
        />
      )}

      {/* Left Sidebar */}
      {isLeftSidebarPresent && (
        <Sidebar
          sidebarConfig={leftSidebarConfig}
          isSidebarOpen={isLeftSideOpen}
          setIsSidebarOpen={setIsLeftSideOpen}
          isLeftPanelPresent={isLeftPanelPresent}
          isTopbarPresent={isTopbarPresent}
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
          isLeftPanelPresent={isLeftPanelPresent}
        />
      )}
    </div>
  );
}
