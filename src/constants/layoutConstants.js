// URLs
import {
  Blocks,
  ChartColumn,
  Database,
  HandHeart,
  Map,
  ShoppingCart,
  TramFront,
  UsersRound,
} from 'lucide-react';
import PageUrls from './pageUrls';

/**
 * Page Layout ClassNames
 * ----------------------------------------------------------------------
 */
export const PageLayoutClassNames = {
  // Only Page --------------------------
  ONLY_PAGE: 'page',

  // Only Page with SidePanel --------------------------
  ONLY_PAGE_WITH_SIDE_PANEL: 'page with-panel',

  // Combination styles ----------------------
  // Only Topbar Layout
  ONLY_TOPBAR_LAYOUT: 'page layout-topbar',

  // Only Topbar with SidePanel Layout
  ONLY_TOPBAR_WITH_SIDE_PANEL_LAYOUT: 'page layout-topbar with-panel',

  // Top With Sidebar layout
  TOP_WITH_SIDEBAR_LAYOUT: 'page layout-sidebar',

  // Top With Sidebar and SidePanel layout
  TOP_WITH_SIDEBAR_AND_PANEL_LAYOUT: 'page layout-sidebar with-panel',
};

/**
 * Topnav ClassNames
 * ----------------------------------------------------------------------
 */
export const TopNavClassNames = {
  // Only Top Nav ---------------------------------
  ONLY_TOPNAV: 'topbar',

  // Combination styles --------------------------
  // Only Left Side Bar
  ONLY_LEFT_SIDE_BAR: 'topbar with-left-sidebar',
  ONLY_LEFT_SIDE_BAR_AND_COLLAPSED: 'topbar with-left-sidebar left-collapsed',

  // Only Right Side Bar
  ONLY_RIGHT_SIDE_BAR: 'topbar with-right-sidebar',
  ONLY_RIGHT_SIDE_BAR_AND_COLLAPSED:
    'topbar with-right-sidebar right-collapsed',

  // Both Left and Right Side Bars
  LEFT_AND_RIGHT_SIDE_BARS: 'topbar with-left-sidebar with-right-sidebar',
  LEFT_AND_RIGHT_SIDE_BARS_COLLAPSED:
    'topbar with-left-sidebar left-collapsed with-right-sidebar right-collapsed',

  // One Collapsed And Other Not
  LEFT_SIDE_BAR_COLLAPSED_AND_RIGHT_SIDE_BAR_NOT_COLLAPSED:
    'topbar with-left-sidebar left-collapsed with-right-sidebar',
  RIGHT_SIDE_BAR_COLLAPSED_AND_LEFT_SIDE_BAR_NOT_COLLAPSED:
    'topbar with-left-sidebar with-right-sidebar right-collapsed',
};

// Topnav Data
export const TopnavData = [
  {
    id: 1,
    title: 'Home',
    link: '',
  },
  {
    id: 2,
    title: 'Features',
    link: '',
  },
  {
    id: 3,
    title: 'Contacts',
    link: '',
  },
  {
    id: 4,
    title: 'Settings',
    link: '',
  },
];

/**
 * Main Content ClassNames
 * ----------------------------------------------------------------------
 */
export const MainContentClassNames = {
  // Only Main Content ------------------------
  ONLY_MAIN_CONTENT: 'main-cont',

  // Combination Styles -------------------------
  // Only Left Side Bar
  ONLY_LEFT_SIDE_BAR: 'main-cont left',
  ONLY_LEFT_SIDE_BAR_AND_COLLAPSED: 'main-cont left left-collapsed',

  // Only Right Side Bar
  ONLY_RIGHT_SIDE_BAR: 'main-cont right ',
  ONLY_RIGHT_SIDE_BAR_AND_COLLAPSED: 'main-cont right right-collapsed',

  // Both Left and Right Side Bars
  LEFT_AND_RIGHT_SIDE_BARS: 'main-cont left right',
  LEFT_AND_RIGHT_SIDE_BARS_COLLAPSED:
    'main-cont left left-collapsed right right-collapsed',

  // One Collapsed And Other Not
  LEFT_SIDE_BAR_COLLAPSED_AND_RIGHT_SIDE_BAR_NOT_COLLAPSED:
    'main-cont left left-collapsed right',
  RIGHT_SIDE_BAR_COLLAPSED_AND_LEFT_SIDE_BAR_NOT_COLLAPSED:
    'main-cont left right right-collapsed',
};

/**
 * Sidebar Positions
 * ----------------------------------------------------------------------
 */
export const SidebarPositions = {
  LEFT: 'left',
  RIGHT: 'right',
};

/**
 * Sidebar ClassNames
 * ----------------------------------------------------------------------
 */
export const SidebarClassNames = {
  // Combination Styles -------------------------
  // Left Side Bar
  ONLY_LEFT_SIDE_BAR: 'sidebar left',
  ONLY_LEFT_SIDE_BAR_AND_COLLAPSED: 'sidebar left left-collapsed',

  // Right Side Bar
  ONLY_RIGHT_SIDE_BAR: 'sidebar right',
  ONLY_RIGHT_SIDE_BAR_AND_COLLAPSED: 'sidebar right right-collapsed',
};

// Sidebar Data
export const SidebarDefaultData = [
  {
    id: 1,
    title: 'Charts',
    icon: <ChartColumn size={26} />,
    isSelected: false,
    subItems: [
      { label: 'Line', id: 'a', link: PageUrls.LineChartsPage },
      { label: 'Bar', id: 'b', link: PageUrls.BarChartsPage },
      { label: 'Box Plot', id: 'c', link: PageUrls.BoxplotChartsPage },
      { label: 'Pie', id: 'd', link: PageUrls.PieChartsPage },
      { label: 'Heat Map', id: 'e', link: PageUrls.HeatMapsPage },
    ],
  },
  {
    id: 2,
    title: 'AntD Components',
    icon: <Blocks size={26} />,
    isSelected: false,
    subItems: [
      { label: 'Table', id: 'f', link: PageUrls.TableComponentPage },
      { label: 'Upload File', id: 'g', link: PageUrls.UploadFileComponentPage },
      { label: 'Form Modal', id: 'h', link: PageUrls.FormModalComponentPage },
    ],
  },
  {
    id: 3,
    title: 'Maps',
    icon: <Map size={26} />,
    isSelected: false,
    subItems: [
      { label: 'Normal', id: 'i', link: PageUrls.NormalMapPage },
      {
        label: 'Multiple Points',
        id: 'j',
        link: PageUrls.MultiplePointsMapPage,
      },
      { label: 'Heat Map', id: 'k', link: PageUrls.HeatMapPage },
      { label: 'Boundaries', id: 'l', link: PageUrls.BoundaryMapPage },
      { label: 'Vector Layers', id: 'm', link: PageUrls.VectorMapPage },
    ],
  },
];

/**
 * Side Panel Positions
 * ----------------------------------------------------------------------
 */
export const SidePanelPositions = {
  LEFT: 'left',
  RIGHT: 'right',
};

// Side Panel Data
export const SidePanelData = [
  {
    id: 0,
    icon: (
      <UsersRound>
        <title>Users</title>
      </UsersRound>
    ),
    link: PageUrls.UserManagementPage,
  },
  {
    id: 1,
    icon: (
      <Database>
        <title>Database</title>
      </Database>
    ),
    link: PageUrls.DatasetManagementPage,
  },
  {
    id: 2,
    icon: (
      <ShoppingCart>
        <title>Shopping</title>
      </ShoppingCart>
    ),
  },
  {
    id: 3,
    icon: (
      <TramFront>
        <title>Travel</title>
      </TramFront>
    ),
  },
  {
    id: 4,
    icon: (
      <HandHeart>
        <title>Donate</title>
      </HandHeart>
    ),
  },
];
