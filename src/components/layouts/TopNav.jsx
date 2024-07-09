// Constants
import { TopNavClassNames } from '../../constants/layoutConstants';

// construct style for topnav
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

/**
 * Topnav Component
 */
export default function TopNav({
  topbarConfig = {},
  isLeftSidebarPresent = false,
  isRightSidebarPresent = false,
  isLeftSideOpen = false,
  isRightSideOpen = false,
}) {
  // Topbar configuration
  const { containerClassName = '', menuComponent = <></> } = topbarConfig;

  // construct className for topnav
  const topNavClassName = constructTopnavClassName(
    isLeftSideOpen,
    isRightSideOpen,
    isLeftSidebarPresent,
    isRightSidebarPresent,
  );

  return (
    <header className={`${topNavClassName} ${containerClassName}`}>
      <div className="topbar-menu">
        {/** topBar Menu Component */}
        {menuComponent}
      </div>
    </header>
  );
}
