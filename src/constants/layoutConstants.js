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
    title: 'Item 1',
    iconName: 'fa-user',
    isSelected: false,
    subItems: [
      { label: 'Sub Item 1', id: 'a', link: '' },
      { label: 'Sub Item 2', id: 'b', link: '' },
      { label: 'Sub Item 3', id: 'c', link: '' },
    ],
  },
  {
    id: 2,
    title: 'Item 2',
    iconName: 'fa-user-cog',
    isSelected: false,
    subItems: [
      { label: 'Sub Item 1', id: 'd', link: '' },
      { label: 'Sub Item 2', id: 'e', link: '' },
      { label: 'Sub Item 3', id: 'f', link: '' },
    ],
  },
  {
    id: 3,
    title: 'Item 3',
    iconName: 'fa-user-check',
    isSelected: false,
    subItems: [
      { label: 'Sub Item 1', id: 'g', link: '' },
      { label: 'Sub Item 2', id: 'h', link: '' },
      { label: 'Sub Item 3', id: 'i', link: '' },
    ],
  },
  {
    id: 4,
    title: 'Item 4',
    iconName: 'fa-user-group',
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
    icon: 'fa-envelope',
    label: 'Mail',
  },
  {
    id: 1,
    icon: 'fa-video',
    label: 'Video',
  },
  {
    id: 2,
    icon: 'fa-cart-shopping',
    label: 'Shopping',
  },
  {
    id: 3,
    icon: 'fa-train-subway',
    label: 'Travel',
  },
  {
    id: 4,
    icon: 'fa-hand-holding-heart',
    label: 'Donate',
  },
];
