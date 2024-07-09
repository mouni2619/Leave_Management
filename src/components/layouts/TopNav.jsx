/**
 * Topnav Component
 */
export default function TopNav({ topbarConfig = {}, topNavClassName = '' }) {
  // Topbar configuration
  const { containerClassName = '', menuComponent = <></> } = topbarConfig;

  return (
    <header className={`${topNavClassName} ${containerClassName}`}>
      <div className="topbar-menu">
        {/** topBar Menu Component */}
        {menuComponent}
      </div>
    </header>
  );
}
