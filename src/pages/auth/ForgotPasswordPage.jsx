// Images
import URL_IMG from "../../assests/imgs/branding/logo.png";

// Page Components
// ----------------------------------------------------------------------------

function ForgotPasswordCard() {
  return (
    <div className="card shadow mt-5">
      <div className="card-body position-relative">
        {/* Logo Component */}
        <img className="m-4 d-flex align-items-center justify-content-center" src={URL_IMG} />

        <div className="p-2 pt-5">
          <form className="form-horizontal">
            <div className="mb-3">
              <label>Email</label>

              {/* Input */}
              <Input name="email" className="form-control mt-2" placeholder="Enter email" type="email" />
            </div>
            <div className="row mb-3">
              <div className="col text-end">
                {/* Button Component */}
                <Button className="w-md w-25" color="primary" label="Reset" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ForgotPasswordFooter() {
  return (
    <div className="mt-5 text-center">
      <p></p>
    </div>
  );
}

/**
 * Forgot Password Page
 */
export default function ForgotPasswordPage() {
  return (
    <div className="container my-5 pt-sm-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          {/* Forgot Password Card */}
          <ForgotPasswordCard />

          {/* Forgot Password Footer */}
          <ForgotPasswordFooter />
        </div>
      </div>
    </div>
  );
}
