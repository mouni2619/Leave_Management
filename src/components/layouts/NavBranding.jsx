// Components
import Logo from '../../components/logo/Logo';

//
// Component
// ----------------------------------------------------------------------------

/**
 * Nav Branding
 */
export default function NavBranding({
  subText = '',
  containerClassName = '',
  logoURL = '',
  redirectURL,
  height = 30,
}) {
  return (
    <div className={`navbar-branding ${containerClassName}`}>
      <Logo
        imageURL={logoURL}
        imageHeight={height}
        redirect={redirectURL && redirectURL.length > 0 ? true : false}
        redirectURL={redirectURL}
      />

      {subText && <div className="navbar-subtext">{subText}</div>}
    </div>
  );
}
