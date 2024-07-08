import React from 'react';
import { Outlet } from 'react-router-dom';

// Constants
import { MainContentClassNames } from '../../constants/layoutConstants';

// construct Main Content ClassName
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

/**
 * Main Content Container
 */
export default function MainContent({
  outletProps = [],
  isLeftSidebarPresent = false,
  isRightSidebarPresent = false,
  isLeftSideOpen = false,
  isRightSideOpen = false,
}) {
  // construct main container className
  const mainContentClassName = constructMainContentClassName(
    isLeftSideOpen,
    isRightSideOpen,
    isLeftSidebarPresent,
    isRightSidebarPresent,
  );

  return (
    <div className={mainContentClassName}>
      <div className={'content-wrapper'}>
        <Outlet context={outletProps} />
      </div>
    </div>
  );
}
