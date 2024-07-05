import { useSelector } from 'react-redux';

// Components
import Logo from '../../components/logo/Logo';

// Images
import URL_IMG_LOGO from '../../assets/images/brand/logo.png';

// Page Components
import LoginForm from './LoginForm';

// Page Components
// ----------------------------------------------------------------------------

function LoginError({ error }) {
  // TODO: If needed please use the loginError to display customised error messages..
  return (
    <div className="card bg-secondary-subtle">
      <div className="card-body text-center text-danger">
        <i className="fa-solid fa-circle-xmark me-2"></i>
        Username/Password is incorrect
      </div>
    </div>
  );
}

/**
 * Login Page
 */
export default function LoginPage() {
  // Selector
  const loginError = useSelector((state) => state.auth.loginError);

  return (
    <div className="container my-5 pt-sm-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow mt-5">
            <div className="card-body position-relative">
              {/* Logo Component */}
              <div className="d-flex justify-content-center">
                <Logo
                  redirect={false}
                  containerClassName="image"
                  imageHeight={140}
                  imageURL={URL_IMG_LOGO}
                />
              </div>

              <div className="p-2 pt-5">
                <LoginForm />
                {loginError && <LoginError error={loginError} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
