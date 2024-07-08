import { useState } from 'react';

// Layouts
import Layout from '../components/layouts/Layout';

// Constants
import PageUrls from '../constants/pageUrls';

// Images
import URL_IMG_LOGO from '../assets/images/brand/logo.png';

// Components
import SidebarMenu from '../components/layouts/SidebarMenu';
import TopnavMenu from '../components/layouts/TopnavMenu';

// Sidebar Footer
// "isSidebarOpen" : key use change sidebar content
function SidebarFooter({ isSidebarOpen }) {
  const spanText = isSidebarOpen ? 'Open' : 'Closed';

  return (
    <div className="cursor-pointer text-white">
      <span>{spanText}</span>
    </div>
  );
}

/**
 * Main Page Layout
 */
export default function MainPageLayout() {
  // State
  const [pageHeader, setPageHeader] = useState(<TopnavMenu />);

  // Top bar Config
  // default will be added here for all same RoutePages
  // custom header can be added from page itself using hook : useOutletContext
  const topbarConfig = {
    menuComponent: pageHeader,
    containerClassName: '',
  };

  // Left Sidebar Config
  const leftSidebarConfig = {
    isSidebarCollapsible: true,
    menuComponent: <SidebarMenu />,
    footerComponent: <SidebarFooter />,
    headerLogo: { height: 35, logoURL: URL_IMG_LOGO },
    collapsedHeaderLogo: { height: 35, logoURL: URL_IMG_LOGO },
    redirectURL: PageUrls.DashboardPage,
  };

  // Right Sidebar Config
  const rightSidebarConfig = {
    isSidebarCollapsible: true,
    menuComponent: <SidebarMenu />,
    footerComponent: <SidebarFooter />,
    headerLogo: { height: 35, logoURL: URL_IMG_LOGO },
    collapsedHeaderLogo: { height: 35, logoURL: URL_IMG_LOGO },
    redirectURL: PageUrls.DashboardPage,
  };

  return (
    <Layout
      topbarConfig={topbarConfig}
      leftSidebarConfig={leftSidebarConfig}
      rightSidebarConfig={rightSidebarConfig}
      outletProps={[setPageHeader]}
    />
  );
}
