import { useState } from 'react';

// Constants
import { SidebarPositions } from '../../constants/layoutConstants';

// Utils
import LayoutUtils from '../../utils/layoutUtils';

// Components
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import LeftSidebar from './LeftSidebar';
import LeftSidebarContent from './LeftSidebarContent';

/**
 * Layout Component
 */
export default function Layout({
  topbarConfig = {},
  leftSidebarConfig = {},
  leftSidebarContentConfig = {},
  rightSidebarConfig = {},
  themeId = '',
  // array of props (can be used to set custom header for specific page under a Route)
  outletProps = [],
}) {
  // Sidebar States for open/close
  const [isLeftSideOpen, setIsLeftSideOpen] = useState(false);
  const [isLeftSidebarContentOpen, setIsLeftSidebarContentOpen] =
    useState(false);
  const [isRightSideOpen, setIsRightSideOpen] = useState(false);
  const [leftSidebarMenu, setLeftSidebarMenu] = useState([]);

  // Checking whether topbar and sidebar is present or not
  const isTopbarPresent = Object.keys(topbarConfig).length !== 0;
  const isLeftSidebarPresent = Object.keys(leftSidebarConfig).length !== 0;
  const isLeftSidebarContentPresent =
    Object.keys(leftSidebarContentConfig).length !== 0 && isLeftSidebarPresent;
  const isRightSidebarPresent = Object.keys(rightSidebarConfig).length !== 0;

  // condition to show "Topnav Branding Logo"
  const isShowTopnavBranding = !isLeftSidebarPresent;

  // page Layout ClassName (with topbar and sidebar)
  const pageLayoutClassName = LayoutUtils.constructPageLayoutClassName(
    isTopbarPresent,
    isLeftSidebarPresent,
    isLeftSidebarContentPresent,
    isLeftSidebarContentOpen,
    isRightSidebarPresent,
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
    isLeftSidebarContentPresent,
    isRightSidebarPresent,
  );

  return (
    <div data-theme={themeId} className={pageLayoutClassName}>
      {/* Topbar */}
      {isTopbarPresent && (
        <TopNav
          topbarConfig={topbarConfig}
          topNavClassName={topNavClassName}
          isShowTopnavBranding={isShowTopnavBranding}
        />
      )}

      {/* Left Sidebar */}
      {isLeftSidebarPresent && (
        <LeftSidebar
          sidebarConfig={leftSidebarConfig}
          isSidebarOpen={isLeftSideOpen}
          setIsSidebarOpen={setIsLeftSideOpen}
          isTopbarPresent={isTopbarPresent}
          setLeftSidebarMenu={setLeftSidebarMenu}
          isLeftSidebarContentPresent={isLeftSidebarContentPresent}
          setIsLeftSidebarContentOpen={setIsLeftSidebarContentOpen}
        />
      )}

      {isLeftSidebarContentPresent && (
        <LeftSidebarContent
          sidebarConfig={leftSidebarContentConfig}
          isTopbarPresent={isTopbarPresent}
          leftSidebarMenu={leftSidebarMenu}
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
