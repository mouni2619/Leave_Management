import { useState } from 'react';

// Layouts
import Layout from './Layout';

// Constants
import PageUrls from '../../constants/pageUrls';

// Images
import URL_IMG_LOGO from '../../assets/images/brand/logo.png';

// Sidebar Footer
// with "showSidebar" prop, footer content can be changed
function SidebarFooter({ showSideBar }) {
  const spanText = showSideBar ? 'Open' : 'Closed';

  return (
    <div className="cursor-pointer text-white">
      <span>{spanText}</span>
    </div>
  );
}

// Sidebar Content
function SidebarContent() {
  return (
    <div className="p-3 my-2 h-100">
      <h5 className="mb-0 p-1">{'one'}</h5>
      <h5 className="mb-0 p-1">{'two'}</h5>
      <h5 className="mb-0 p-1">{'three'}</h5>
      <h5 className="mb-0 p-1">{'four'}</h5>
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

  // Sidebar Config
  const sidebarConfig = {
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
      sidebarConfig={sidebarConfig}
      rightSidebarConfig={rightSidebarConfig}
      outletProps={[setPageHeader]}
    />
  );
}
