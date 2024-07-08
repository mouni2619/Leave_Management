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

  // Top With Sidebar layout
  TOP_WITH_SIDEBAR_LAYOUT: 'page layout-sidebar',
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
  left: 'left',
  right: 'right',
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
