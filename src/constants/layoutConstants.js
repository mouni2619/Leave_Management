// URLs
import {
  Blocks,
  ChartColumn,
  Database,
  Map,
  Settings,
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

  // Combination styles ----------------------
  // Only Topbar Layout
  ONLY_TOPBAR_LAYOUT: 'page layout-topbar',

  // Only Topbar with Sidebar Layout
  ONLY_TOPBAR_WITH_SIDEBARS: 'page layout-sidebar',

  // Topbar with Left Sidebar Layout with Left Content
  TOP_WITH_SIDEBARS_AND_LEFT_CONT: 'page layout-sidebar left-cont',
  TOP_WITH_SIDEBARS_AND_LEFT_CONT_COLLAPSED:
    'page layout-sidebar left-cont-collapsed',
};

/**
 * Topnav ClassNames
 * ----------------------------------------------------------------------
 */
export const TopNavClassNames = {
  // Only Top Nav ---------------------------------
  ONLY_TOPNAV: 'topbar',

  // Combination styles --------------------------
  // Only Left Sidebar
  ONLY_LEFT_SIDEBAR: 'topbar with-left-sidebar',
  ONLY_LEFT_SIDEBAR_AND_COLLAPSED: 'topbar with-left-sidebar left-collapsed',

  // Only Right Sidebar
  ONLY_RIGHT_SIDEBAR: 'topbar with-right-sidebar',
  ONLY_RIGHT_SIDEBAR_AND_COLLAPSED: 'topbar with-right-sidebar right-collapsed',

  // Both Left and Right Sidebars
  LEFT_AND_RIGHT_SIDEBARS: 'topbar with-left-sidebar with-right-sidebar',
  LEFT_AND_RIGHT_SIDEBARS_COLLAPSED:
    'topbar with-left-sidebar left-collapsed with-right-sidebar right-collapsed',

  // One Sidebar Collapsed And Other Not
  LEFT_SIDEBAR_COLLAPSED_AND_RIGHT_SIDEBAR_NOT_COLLAPSED:
    'topbar with-left-sidebar left-collapsed with-right-sidebar',
  RIGHT_SIDEBAR_COLLAPSED_AND_LEFT_SIDEBAR_NOT_COLLAPSED:
    'topbar with-left-sidebar with-right-sidebar right-collapsed',
};

/**
 * Main Content ClassNames
 * ----------------------------------------------------------------------
 */
export const MainContentClassNames = {
  // Only Main Content ------------------------
  ONLY_MAIN_CONTENT: 'main-cont',

  // Combination Styles -------------------------
  // Only Left Sidebar
  ONLY_LEFT_SIDEBAR: 'main-cont left',
  ONLY_LEFT_SIDEBAR_AND_COLLAPSED: 'main-cont left left-collapsed',

  // Only Right Sidebar
  ONLY_RIGHT_SIDEBAR: 'main-cont right',
  ONLY_RIGHT_SIDEBAR_AND_COLLAPSED: 'main-cont right right-collapsed',

  // Both Left and Right Sidebars
  LEFT_AND_RIGHT_SIDEBARS: 'main-cont left right',
  LEFT_AND_RIGHT_SIDEBARS_COLLAPSED:
    'main-cont left left-collapsed right right-collapsed',

  // One Collapsed and Other Not
  LEFT_SIDEBAR_COLLAPSED_AND_RIGHT_SIDEBAR_NOT_COLLAPSED:
    'main-cont left left-collapsed right',
  RIGHT_SIDEBAR_COLLAPSED_AND_LEFT_SIDEBAR_NOT_COLLAPSED:
    'main-cont left right right-collapsed',

  // Left Sidebar with Left Content
  LEFT_SIDEBAR_COLLAPSED_WITH_LEFT_CONT:
    'main-cont left left-collapsed with-left-cont',

  // Both Sidebars with Left Content
  LEFT_SIDEBAR_COLLAPSED_WITH_LEFT_CONT_AND_RIGHT_SIDEBAR_NOT_COLLAPSED:
    'main-cont left left-collapsed with-left-cont right',
  LEFT_SIDEBAR_COLLAPSED_WITH_LEFT_CONT_AND_RIGHT_SIDEBAR_COLLAPSED:
    'main-cont left left-collapsed with-left-cont right right-collapsed',
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
  // Left Sidebar
  ONLY_LEFT_SIDEBAR: 'sidebar left',
  ONLY_LEFT_SIDEBAR_AND_COLLAPSED: 'sidebar left left-collapsed',

  // Right Sidebar
  ONLY_RIGHT_SIDEBAR: 'sidebar right',
  ONLY_RIGHT_SIDEBAR_AND_COLLAPSED: 'sidebar right right-collapsed',

  // Only Left Content
  ONLY_LEFT_CONT: 'sidebar left-cont',
};

// Right Sidebar Data
export const RightSidebarDefaultData = [
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

// Left Sidebar Data
export const LeftSidebarDefaultData = [
  {
    id: 0,
    icon: <UsersRound />,
    title: 'Users',
    link: PageUrls.UserManagementPage,
  },
  {
    id: 1,
    icon: <Database />,
    title: 'Datasets',
    link: PageUrls.DatasetManagementPage,
  },
  {
    id: 2,
    icon: <ChartColumn />,
    title: 'Charts',
    subItems: [
      { label: 'Line', id: 1, link: PageUrls.LineChartsPage },
      { label: 'Bar', id: 2, link: PageUrls.BarChartsPage },
      { label: 'Box Plot', id: 3, link: PageUrls.BoxplotChartsPage },
      { label: 'Pie', id: 4, link: PageUrls.PieChartsPage },
      { label: 'Heat Map', id: 5, link: PageUrls.HeatMapsPage },
    ],
  },
  {
    id: 3,
    icon: <Blocks />,
    title: 'AntD Components',
    subItems: [
      { label: 'Table', id: 1, link: PageUrls.TableComponentPage },
      { label: 'Upload File', id: 2, link: PageUrls.UploadFileComponentPage },
      { label: 'Form Modal', id: 3, link: PageUrls.FormModalComponentPage },
    ],
  },
  {
    id: 4,
    icon: <Map />,
    title: 'Maps',
    subItems: [
      { label: 'Normal', id: 1, link: PageUrls.NormalMapPage },
      {
        label: 'Multiple Points',
        id: 2,
        link: PageUrls.MultiplePointsMapPage,
      },
      { label: 'Heat Map', id: 3, link: PageUrls.HeatMapPage },
      { label: 'Boundaries', id: 4, link: PageUrls.BoundaryMapPage },
      { label: 'Vector Layers', id: 5, link: PageUrls.VectorMapPage },
    ],
  },
  {
    id: 5,
    icon: <Settings />,
    title: 'Settings',
  },
];
