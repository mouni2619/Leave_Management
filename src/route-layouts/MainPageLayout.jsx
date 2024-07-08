import { useState } from 'react';

// Layouts
import Layout from '../components/layouts/Layout';

// Constants
import PageUrls from '../constants/pageUrls';

// Images
import URL_IMG_LOGO from '../assets/images/brand/logo.png';

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

// Sidebar Content
// "isSidebarOpen" : key use change sidebar content
function SidebarContent({ isSidebarOpen }) {
  // closed sidebar content
  if (!isSidebarOpen) {
    return (
      <div className="p-3 h-100">
        <h5>Closed</h5>
        <h5>Content</h5>
      </div>
    );
  }

  return (
    <div className="p-3 h-100">
      <h5>Opened</h5>
      <h5>Content</h5>
    </div>
  );
}

/**
 * Main Page Layout
 */
export default function MainPageLayout() {
  // State
  const [pageHeader, setPageHeader] = useState(<></>);

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
    menuComponent: <SidebarContent />,
    footerComponent: <SidebarFooter />,
    headerLogo: { height: 35, logoURL: URL_IMG_LOGO },
    collapsedHeaderLogo: { height: 35, logoURL: URL_IMG_LOGO },
    redirectURL: PageUrls.DashboardPage,
  };

  // Right Sidebar Config
  const rightSidebarConfig = {
    isSidebarCollapsible: true,
    menuComponent: <SidebarContent />,
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
