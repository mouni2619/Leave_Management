/**
 * Header Component
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

  // collapsed styles
  const sidebarCollapsedStyle = !isLeftSideOpen ? 'collapsed' : '';
  const rightSidebarCollapsedStyle = !isRightSideOpen ? 'right-collapsed' : '';
  const combineCollapsedStyle = `${sidebarCollapsedStyle} ${rightSidebarCollapsedStyle}`;

  // combination styles
  const topnavWithLeftSidebar = isLeftSidebarPresent ? 'with-left-sidebar' : '';
  const topnavWithRightSidebar = isRightSidebarPresent
    ? 'with-right-sidebar'
    : '';
  const combinationStyle = `${topnavWithLeftSidebar} ${topnavWithRightSidebar}`;

  return (
    <header
      className={`topbar ${combineCollapsedStyle} ${combinationStyle} ${containerClassName}`}
    >
      <div className="topbar-menu">
        {/** topBar Menu Component */}
        {menuComponent}
      </div>
    </header>
  );
}
