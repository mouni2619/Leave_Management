import React from 'react';
import { Outlet } from 'react-router-dom';

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
  // checking sidebars are collapsed or not
  const isLeftSidebarCollapsed = isLeftSidebarPresent && !isLeftSideOpen;
  const isRightSidebarCollapsed = isRightSidebarPresent && !isRightSideOpen;

  // main container collapsed style
  const leftSidebarCollapsedStyle = isLeftSidebarCollapsed
    ? 'left-collapsed'
    : '';
  const rightSidebarCollapsedStyle = isRightSidebarCollapsed
    ? 'right-collapsed'
    : '';
  const combineCollapsedStyle = `${leftSidebarCollapsedStyle} ${rightSidebarCollapsedStyle}`;

  // main container sidebar keys
  const leftSidebarKey = isLeftSidebarPresent ? 'left' : '';
  const rightSidebarKey = isRightSidebarPresent ? 'right' : '';
  const existingSidebarsKeys = `${leftSidebarKey} ${rightSidebarKey}`;

  return (
    <div
      className={`main-cont ${existingSidebarsKeys} ${combineCollapsedStyle}`}
    >
      <div className={'content-wrapper'}>
        <Outlet context={outletProps} />
      </div>
    </div>
  );
}
