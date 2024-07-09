// Constants
import {
  MainContentClassNames,
  PageLayoutClassNames,
  SidebarClassNames,
  SidebarPositions,
  TopNavClassNames,
} from '../constants/layoutConstants';

// construct style for topnav
// ------------------------------------------------------------------------
function constructTopnavClassName(
  isLeftSideOpen,
  isRightSideOpen,
  isLeftSidebarPresent,
  isRightSidebarPresent,
) {
  // Conditions
  const onlyLeftSidebarPresent = isLeftSidebarPresent && !isRightSidebarPresent;
  const onlyRightSidebarPresent =
    isRightSidebarPresent && !isLeftSidebarPresent;
  const bothSidebarsPresent = isLeftSidebarPresent && isRightSidebarPresent;
  const bothSidebarsCollapsed = !isLeftSideOpen && !isRightSideOpen;
  const bothSidebarsOpen = isLeftSideOpen && isRightSideOpen;
  const leftCollapsedAndRightOpen = !isLeftSideOpen && isRightSideOpen;
  const rightCollapsedAndLeftOpen = !isRightSideOpen && isLeftSideOpen;

  // Case 1: "Only Left Sidebar" Present (with or without collapsed)
  if (onlyLeftSidebarPresent) {
    // with collapsed
    if (!isLeftSideOpen) {
      return TopNavClassNames.ONLY_LEFT_SIDE_BAR_AND_COLLAPSED;
    }

    // without collapsed
    return TopNavClassNames.ONLY_LEFT_SIDE_BAR;
  }

  // Case 2: "Only Right Sidebar" Present (with or without collapsed)
  if (onlyRightSidebarPresent) {
    // with collapsed
    if (!isRightSideOpen) {
      return TopNavClassNames.ONLY_RIGHT_SIDE_BAR_AND_COLLAPSED;
    }

    // without collapsed
    return TopNavClassNames.ONLY_RIGHT_SIDE_BAR;
  }

  // Case 3: Both Left and Right Side Bars Present
  if (bothSidebarsPresent) {
    // with both collapsed
    if (bothSidebarsCollapsed) {
      return TopNavClassNames.LEFT_AND_RIGHT_SIDE_BARS_COLLAPSED;
    }

    // without both collapsed
    if (bothSidebarsOpen) {
      return TopNavClassNames.LEFT_AND_RIGHT_SIDE_BARS;
    }
  }

  // Case 4: Both Present But One Collapsed And Other Not
  if (bothSidebarsPresent) {
    // if Left Collapsed and Not Right
    if (leftCollapsedAndRightOpen) {
      return TopNavClassNames.LEFT_SIDE_BAR_COLLAPSED_AND_RIGHT_SIDE_BAR_NOT_COLLAPSED;
    }

    // if Right Collapsed And Left Not
    if (rightCollapsedAndLeftOpen) {
      return TopNavClassNames.RIGHT_SIDE_BAR_COLLAPSED_AND_LEFT_SIDE_BAR_NOT_COLLAPSED;
    }
  }

  // default "only topnav" : No Side Bars
  return TopNavClassNames.ONLY_TOPNAV;
}

// construct Page Layout ClassName
// ------------------------------------------------------------------------
function constructPageLayoutClassName(
  isTopbarPresent,
  isLeftSidebarPresent,
  isRightSidebarPresent,
) {
  // Conditions
  const onlyTopbarLayout =
    isTopbarPresent && !isLeftSidebarPresent && !isRightSidebarPresent;
  const topWithSidebarLayout = isLeftSidebarPresent || isRightSidebarPresent;

  // Case 1: Only Topbar Layout
  if (onlyTopbarLayout) {
    return PageLayoutClassNames.ONLY_TOPBAR_LAYOUT;
  }

  // Case 2: Top with Sidebar Layout
  if (topWithSidebarLayout) {
    return PageLayoutClassNames.TOP_WITH_SIDEBAR_LAYOUT;
  }

  // DEFAULT : Only Page
  return PageLayoutClassNames.ONLY_PAGE;
}

// construct Main Content ClassName
// -------------------------------------------------------------------------
function constructMainContentClassName(
  isLeftSideOpen,
  isRightSideOpen,
  isLeftSidebarPresent,
  isRightSidebarPresent,
) {
  // Case 1: "Only Left Side" Bar Present (with or without collapsed)
  if (isLeftSidebarPresent && !isRightSidebarPresent) {
    // with collapsed
    if (!isLeftSideOpen) {
      return MainContentClassNames.ONLY_LEFT_SIDE_BAR_AND_COLLAPSED;
    }

    // without collapsed
    return MainContentClassNames.ONLY_LEFT_SIDE_BAR;
  }

  // Case 2: "Only Right Side" Bar Present (with or without collapsed)
  if (isRightSidebarPresent && !isLeftSidebarPresent) {
    // with collapsed
    if (!isRightSideOpen) {
      return MainContentClassNames.ONLY_RIGHT_SIDE_BAR_AND_COLLAPSED;
    }

    // without collapsed
    return MainContentClassNames.ONLY_RIGHT_SIDE_BAR;
  }

  // Case 3: Both Left and Right Side Bars Present
  if (isLeftSidebarPresent && isRightSidebarPresent) {
    // with both collapsed
    if (!isLeftSideOpen && !isRightSideOpen) {
      return MainContentClassNames.LEFT_AND_RIGHT_SIDE_BARS_COLLAPSED;
    }

    // without both collapsed
    if (isLeftSideOpen && isRightSideOpen) {
      return MainContentClassNames.LEFT_AND_RIGHT_SIDE_BARS;
    }
  }

  // Case 4: One Collapsed And Other Not
  if (isLeftSidebarPresent && isRightSidebarPresent) {
    // if Left Collapsed and Not Right
    if (!isLeftSideOpen && isRightSideOpen) {
      return MainContentClassNames.LEFT_SIDE_BAR_COLLAPSED_AND_RIGHT_SIDE_BAR_NOT_COLLAPSED;
    }

    // if Right Collapsed And Left Not
    if (!isRightSideOpen && isLeftSideOpen) {
      return MainContentClassNames.RIGHT_SIDE_BAR_COLLAPSED_AND_LEFT_SIDE_BAR_NOT_COLLAPSED;
    }
  }

  // default "only Main Cont" : No Side Bars
  return MainContentClassNames.ONLY_MAIN_CONTENT;
}

// construct Sidebar ClassName
// ---------------------------------------------------------------------------
function constructSidebarClassName(sidebarPosition, isSidebarOpen) {
  // Conditions
  const isSidebarPositionRight = sidebarPosition === SidebarPositions.RIGHT;

  // Case 1: Position = "right"
  if (isSidebarPositionRight) {
    // with collapsed
    if (!isSidebarOpen) {
      return SidebarClassNames.ONLY_RIGHT_SIDE_BAR_AND_COLLAPSED;
    }

    // without collapsed
    return SidebarClassNames.ONLY_RIGHT_SIDE_BAR;
  }

  // DEFAULT :: Position = "left"
  // with collapsed
  if (!isSidebarOpen) {
    return SidebarClassNames.ONLY_LEFT_SIDE_BAR_AND_COLLAPSED;
  }

  // without collapsed
  return SidebarClassNames.ONLY_LEFT_SIDE_BAR;
}

// get Footer Collapsible IconName
// ---------------------------------------------------------------------------------
function getFooterCollapsibleIconName(isSidebarOpen, sidebarPosition) {
  // if sidebar position is "left"
  if (sidebarPosition === SidebarPositions.LEFT) {
    return isSidebarOpen ? 'fa-arrow-left-long' : 'fa-arrow-right-long';
  }

  // if sidebar position is "right"
  return isSidebarOpen ? 'fa-arrow-right-long' : 'fa-arrow-left-long';
}

// Layout Utils -------------------------------------------
const LayoutUtils = {
  constructTopnavClassName,
  constructPageLayoutClassName,
  constructMainContentClassName,
  constructSidebarClassName,
  getFooterCollapsibleIconName,
};

// export default
export default LayoutUtils;
