// Constants
import { TopNavClassNames } from '../../constants/layoutConstants';

// construct style for topnav
function constructTopnavClassName(
  isLeftSideOpen,
  isRightSideOpen,
  isLeftSidebarPresent,
  isRightSidebarPresent,
) {
  // Case 1: "Only Left Side" Bar Present (with or without collapsed)
  if (isLeftSidebarPresent && !isRightSidebarPresent) {
    // with collapsed
    if (!isLeftSideOpen) {
      return TopNavClassNames.ONLY_LEFT_SIDE_BAR_AND_COLLAPSED;
    }

    // without collapsed
    return TopNavClassNames.ONLY_LEFT_SIDE_BAR;
  }

  // Case 2: "Only Right Side" Bar Present (with or without collapsed)
  if (isRightSidebarPresent && !isLeftSidebarPresent) {
    // with collapsed
    if (!isRightSideOpen) {
      return TopNavClassNames.ONLY_RIGHT_SIDE_BAR_AND_COLLAPSED;
    }

    // without collapsed
    return TopNavClassNames.ONLY_RIGHT_SIDE_BAR;
  }

  // Case 3: Both Left and Right Side Bars Present
  if (isLeftSidebarPresent && isRightSidebarPresent) {
    // with both collapsed
    if (!isLeftSideOpen && !isRightSideOpen) {
      return TopNavClassNames.LEFT_AND_RIGHT_SIDE_BARS_COLLAPSED;
    }

    // without both collapsed
    if (isLeftSideOpen && isRightSideOpen) {
      return TopNavClassNames.LEFT_AND_RIGHT_SIDE_BARS;
    }
  }

  // Case 4: One Collapsed And Other Not
  if (isLeftSidebarPresent && isRightSidebarPresent) {
    // if Left Collapsed and Not Right
    if (!isLeftSideOpen && isRightSideOpen) {
      return TopNavClassNames.LEFT_SIDE_BAR_COLLAPSED_AND_RIGHT_SIDE_BAR_NOT_COLLAPSED;
    }

    // if Right Collapsed And Left Not
    if (!isRightSideOpen && isLeftSideOpen) {
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
