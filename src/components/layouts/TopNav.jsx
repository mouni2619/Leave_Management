/**
 * Header Component
 */
export default function TopNav({
  topbarConfig = {},
  showSideBar,
  showRightSideBar,
  isSidebarPresent = false,
  isRightSidebarPresent = false,
}) {
  // Topbar configuration
  const { containerClassName = '', menuComponent = <></> } = topbarConfig;

  // collapsed styles
  const sidebarCollapsedStyle = showSideBar ? '' : 'collapsed';
  const rightSidebarCollapsedStyle = showRightSideBar ? '' : 'right-collapsed';
  const collapsedStyle = `${sidebarCollapsedStyle} ${rightSidebarCollapsedStyle}`;

  // combination styles
  const topnavWithLeftSidebar = isSidebarPresent ? 'with-left-sidebar' : '';
  const topnavWithRightSidebar = isRightSidebarPresent
    ? 'with-right-sidebar'
    : '';
  const combinationStyle = `${topnavWithLeftSidebar} ${topnavWithRightSidebar}`;

  return (
    <header
      className={`topbar ${collapsedStyle} ${combinationStyle} ${containerClassName}`}
    >
      <div className="topbar-menu">
        {/** topBar Menu Component */}
        {menuComponent}
      </div>
    </header>
  );
}
