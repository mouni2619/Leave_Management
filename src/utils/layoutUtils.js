import { MoveLeft, MoveRight } from 'lucide-react';

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
      return TopNavClassNames.ONLY_LEFT_SIDEBAR_AND_COLLAPSED;
    }

    // without collapsed
    return TopNavClassNames.ONLY_LEFT_SIDEBAR;
  }

  // Case 2: "Only Right Sidebar" Present (with or without collapsed)
  if (onlyRightSidebarPresent) {
    // with collapsed
    if (!isRightSideOpen) {
      return TopNavClassNames.ONLY_RIGHT_SIDEBAR_AND_COLLAPSED;
    }

    // without collapsed
    return TopNavClassNames.ONLY_RIGHT_SIDEBAR;
  }

  // Case 3: Both Left and Right Side Bars Present
  if (bothSidebarsPresent) {
    // with both collapsed
    if (bothSidebarsCollapsed) {
      return TopNavClassNames.LEFT_AND_RIGHT_SIDEBARS_COLLAPSED;
    }

    // without both collapsed
    if (bothSidebarsOpen) {
      return TopNavClassNames.LEFT_AND_RIGHT_SIDEBARS;
    }
  }

  // Case 4: Both Present But One Collapsed And Other Not
  if (bothSidebarsPresent) {
    // if Left Collapsed and Not Right
    if (leftCollapsedAndRightOpen) {
      return TopNavClassNames.LEFT_SIDEBAR_COLLAPSED_AND_RIGHT_SIDEBAR_NOT_COLLAPSED;
    }

    // if Right Collapsed And Left Not
    if (rightCollapsedAndLeftOpen) {
      return TopNavClassNames.RIGHT_SIDEBAR_COLLAPSED_AND_LEFT_SIDEBAR_NOT_COLLAPSED;
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
  isLeftSidebarContentPresent,
  isLeftSidebarContentOpen,
  isRightSidebarPresent,
) {
  // Conditions
  const onlyTopbarLayout =
    isTopbarPresent && !isLeftSidebarPresent && !isRightSidebarPresent;
  const topWithSidebarLayout = isLeftSidebarPresent || isRightSidebarPresent;
  const leftSidebarWithSidebarContent =
    isLeftSidebarPresent && isLeftSidebarContentPresent;

  // Case 1: Only Topbar Layout
  if (onlyTopbarLayout) {
    return PageLayoutClassNames.ONLY_TOPBAR_LAYOUT;
  }

  if (topWithSidebarLayout) {
    if (!isLeftSidebarContentOpen) {
      return PageLayoutClassNames.TOP_WITH_SIDEBARS_AND_LEFT_CONT_COLLAPSED;
    }

    if (isLeftSidebarContentPresent) {
      return PageLayoutClassNames.TOP_WITH_SIDEBARS_AND_LEFT_CONT;
    }

    return PageLayoutClassNames.ONLY_TOPBAR_WITH_SIDEBARS;
  }

  if (leftSidebarWithSidebarContent) {
    return PageLayoutClassNames.TOP_WITH_SIDEBARS_AND_LEFT_CONT;
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
  isLeftSidebarContentPresent,
  isRightSidebarPresent,
) {
  // Case 1: "Only Left Sidebar" Present (with or without collapsed)
  if (isLeftSidebarPresent && !isRightSidebarPresent) {
    // with collapsed
    if (!isLeftSideOpen) {
      return MainContentClassNames.ONLY_LEFT_SIDEBAR_AND_COLLAPSED;
    }

    // without collapsed
    return MainContentClassNames.ONLY_LEFT_SIDEBAR;
  }

  // Case 2: "Only Right Sidebar" Present (with or without collapsed)
  if (isRightSidebarPresent && !isLeftSidebarPresent) {
    // with collapsed
    if (!isRightSideOpen) {
      return MainContentClassNames.ONLY_RIGHT_SIDEBAR_AND_COLLAPSED;
    }

    // without collapsed
    return MainContentClassNames.ONLY_RIGHT_SIDEBAR;
  }

  // Case 3: Both Left and Right Side Bars Present
  if (isLeftSidebarPresent && isRightSidebarPresent) {
    // with both collapsed
    if (!isLeftSideOpen && !isRightSideOpen) {
      return MainContentClassNames.LEFT_AND_RIGHT_SIDEBARS_COLLAPSED;
    }

    // without both collapsed
    if (isLeftSideOpen && isRightSideOpen) {
      return MainContentClassNames.LEFT_AND_RIGHT_SIDEBARS;
    }
  }

  // Case 4: One Collapsed And Other Not
  if (isLeftSidebarPresent && isRightSidebarPresent) {
    // if Left Collapsed and Not Right
    if (!isLeftSideOpen && isRightSideOpen) {
      return MainContentClassNames.LEFT_SIDEBAR_COLLAPSED_AND_RIGHT_SIDEBAR_NOT_COLLAPSED;
    }

    // if Right Collapsed And Left Not
    if (!isRightSideOpen && isLeftSideOpen) {
      return MainContentClassNames.RIGHT_SIDEBAR_COLLAPSED_AND_LEFT_SIDEBAR_NOT_COLLAPSED;
    }
  }

  // Case 5: Left Sidebars present with left sidebar content
  if (isLeftSidebarContentPresent) {
    // both present with left sidebar content with left collapsed and not right
    if (!isLeftSideOpen && isRightSideOpen) {
      return MainContentClassNames.LEFT_SIDEBAR_COLLAPSED_WITH_LEFT_CONT_AND_RIGHT_SIDEBAR_NOT_COLLAPSED;
    }

    // both present with left sidebar content and both collapsed
    if (!isLeftSideOpen && !isRightSideOpen) {
      return MainContentClassNames.LEFT_SIDEBAR_COLLAPSED_WITH_LEFT_CONT_AND_RIGHT_SIDEBAR_COLLAPSED;
    }
    return MainContentClassNames.LEFT_SIDEBAR_WITH_LEFT_CONT;
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
      return SidebarClassNames.ONLY_RIGHT_SIDEBAR_AND_COLLAPSED;
    }

    // without collapsed
    return SidebarClassNames.ONLY_RIGHT_SIDEBAR;
  }

  // DEFAULT :: Position = "left"
  // with collapsed
  if (!isSidebarOpen) {
    return SidebarClassNames.ONLY_LEFT_SIDEBAR_AND_COLLAPSED;
  }

  // without collapsed
  return SidebarClassNames.ONLY_LEFT_SIDEBAR;
}

// get Footer Collapsible IconName
// ---------------------------------------------------------------------------------
function getFooterCollapsibleIcon(isSidebarOpen, sidebarPosition) {
  // if sidebar position is "left"
  if (sidebarPosition === SidebarPositions.LEFT) {
    return isSidebarOpen ? <MoveLeft /> : <MoveRight />;
  }

  // if sidebar position is "right"
  return isSidebarOpen ? <MoveRight /> : <MoveLeft />;
}

// Layout Utils -------------------------------------------
const LayoutUtils = {
  constructTopnavClassName,
  constructPageLayoutClassName,
  constructMainContentClassName,
  constructSidebarClassName,
  getFooterCollapsibleIcon,
};

// export default
export default LayoutUtils;
