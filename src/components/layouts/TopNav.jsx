import NavBranding from './NavBranding';

/**
 * Topnav Component
 * @param {*} topbarConfig : Configurations
 * @param {*} topNavClassName : className
 * @param {*} isShowTopnavBranding : boolean
 */
export default function TopNav({
  topbarConfig = {},
  topNavClassName = '',
  isShowTopnavBranding = false,
}) {
  // Topbar configuration
  const {
    containerClassName = '',
    menuComponent = <></>,
    headerLogo = {},
    redirectURL,
  } = topbarConfig;

  const { height: headerLogoHeight = 35, logoURL: headerLogoURL = '' } =
    headerLogo;

  return (
    <header className={`${topNavClassName} ${containerClassName}`}>
      <div className="topbar-menu">
        {/* Navbar logo */}
        {isShowTopnavBranding && (
          <NavBranding
            height={headerLogoHeight}
            logoURL={headerLogoURL}
            redirectURL={redirectURL}
          />
        )}

        {/** topBar Menu Component */}
        {menuComponent}
      </div>
    </header>
  );
}
