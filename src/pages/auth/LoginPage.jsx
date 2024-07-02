import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// Actions
import { AuthActions } from "../../redux-slice/AuthSlice";

// Urls
import { PageURL } from "../../urls/PageURL";

// Components

// Images
import URL_IMG_LOGO from "../../assests/imgs/branding/logo.png";
import Logo from "../../app/layout/Logo";

// Page Components
// ----------------------------------------------------------------------------

function LoginError({ loginError }) {
  //If No error
  if (!loginError) {
    return null;
  }

  return (
    <div className="card bg-secondary-subtle">
      <div className="card-body text-center text-danger">
        <i className="fa-solid fa-circle-xmark me-2"></i>
        Username/Password is incorrect
      </div>
    </div>
  );
}

function ForgotPasswordSection() {
  return (
    <div className="mt-4 text-center">
      <Link to={PageURL.ForgotPasswordPageUrl} className="text-muted text-decoration-none">
        <i className="fa-solid fa-lock me-2"></i>
        Forgot your password?
      </Link>
    </div>
  );
}

function LoginCard() {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Page State
  const [formData, setFormData] = useState({});

  // Selector State
  const loginLoading = useSelector((state) => state.auth.loginLoading) || false;
  const loginError = useSelector((state) => state.auth.loginError) || false;

  // Input onChange
  const handleInputChange = function ({ target }) {
    const inpVal = target.value;
    const inpName = target.name;

    const formDataObj = { ...formData };
    formDataObj[inpName] = inpVal;

    setFormData(formDataObj);
  };

  // form onSubmit
  const handleFormSubmit = (event) => {
    // Prevent Default
    event.preventDefault();

    const { username, password } = formData;
    dispatch(AuthActions.login({ username, password, navigate }));
  };

  return (
    <div className="card shadow mt-5">
      <div className="card-body position-relative">
        {/* Logo Component */}
        <div className="img-cont d-flex justify-content-center">
          <Logo redirect={false} containerClassName="image" imageHeight={140} imageURL={URL_IMG_LOGO} />
        </div>

        <div className="p-2 pt-5">
          <form className="form-horizontal pb-5" onSubmit={handleFormSubmit}>
            <div className="form-group mb-4">
              <label className="form-label">Username</label>
              <input className="form-control" type="email" name="username" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" name="password" onChange={handleInputChange} />
            </div>

            {/* Login Error */}
            <LoginError loginError={loginError} />
            <div className="mt-4 d-grid">
              {/* Button Component */}
              <button className="btn btn-primary btn-block" type="submit">
                Login
              </button>
            </div>

            {/* Forgot Password Section */}
            {/* 
            <ForgotPasswordSection />
            */}
          </form>
        </div>
      </div>
    </div>
  );
}

function LoginCardFooter() {
  return (
    <div className="mt-5 text-center">
      <p></p>
    </div>
  );
}

/**
 * Login Page
 */
export default function LoginPage() {
  return (
    <div className="container my-5 pt-sm-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          {/* Login Card */}
          <LoginCard />

          {/* Login Footer */}
          <LoginCardFooter />
        </div>
      </div>
    </div>
  );
}
