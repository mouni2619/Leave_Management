// Layouts
import Layout from '../layouts/Layout';

// Constants
import PageUrls from '../../constants/pageUrls';

// Images
import URL_IMG_LOGO from '../../assets/images/brand/admavin.png';
import URL_IMG_LOGO_SHORT from '../../assets/images/brand/admavin-short-logo.png';

// Components
import SidebarMenu from '../layouts/SidebarMenu';
import TopnavMenu from '../layouts/TopnavMenu';
import SidePanelMenu from '../layouts/SidePanelMenu';
import LeftSidebarMenu from '../layouts/LeftSidebarMenu';

/**
 * Main Page Layout
 */
export default function MainPageLayout() {
  // left panel config
  const leftPanelConfig = {
    menuComponent: <SidePanelMenu />,
    containerClassName: '',
  };

  // Top bar Config
  // default header component will be added here for all same RoutePages
  // custom header can be added from page itself using hook : useOutletContext
  const topbarConfig = {
    menuComponent: <TopnavMenu />,
    containerClassName: '',
    headerLogo: { height: 40, logoURL: URL_IMG_LOGO },
    redirectURL: PageUrls.DashboardPage,
  };

  // Left Sidebar Config
  const leftSidebarConfig = {
    isSidebarCollapsible: true,
    showHeaderCollapsibleButton: true,
    showFooterCollapsibleButton: true,
    menuComponent: <LeftSidebarMenu />,
    headerLogo: { height: 40, logoURL: URL_IMG_LOGO },
    collapsedHeaderLogo: { height: 40, logoURL: URL_IMG_LOGO_SHORT },
    redirectURL: PageUrls.DashboardPage,
  };

  // Right Sidebar Config
  const rightSidebarConfig = {
    isSidebarCollapsible: true,
    showHeaderCollapsibleButton: true,
    showFooterCollapsibleButton: true,
    menuComponent: <SidebarMenu />,
    headerLogo: { height: 40, logoURL: URL_IMG_LOGO },
    collapsedHeaderLogo: { height: 40, logoURL: URL_IMG_LOGO_SHORT },
    redirectURL: PageUrls.DashboardPage,
  };

  return (
    <Layout
      topbarConfig={topbarConfig}
      leftPanelConfig={leftPanelConfig}
      leftSidebarConfig={leftSidebarConfig}
      rightSidebarConfig={rightSidebarConfig}
    />
  );
}
