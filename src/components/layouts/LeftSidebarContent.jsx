import { cloneElement } from 'react';

export default function LeftSidebarContent({
  sidebarConfig = {},
  leftSidebarMenu = [],
  isTopbarPresent = false,
}) {
  const { menuComponent = <></> } = sidebarConfig;
  return (
    <nav className={`sidebar-cont ${isTopbarPresent ? 'with-top' : ''}`}>
      {menuComponent && cloneElement(menuComponent, { leftSidebarMenu })}
    </nav>
  );
}
