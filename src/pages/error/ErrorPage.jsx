import { Link, useParams } from 'react-router-dom';

// Images
import error404Image from '../../assets/images/error-page/error-img.png';
import error500Image from '../../assets/images/error-page/error-img.png';

// Constants
import PageURL from '../../urls/pageUrls';

//Page Constants
const errorsInfo = {
  404: {
    imageUrl: error404Image,
    errorCode: '404',
    errorMessage: 'Oops! The page your looking for does not exist',
  },
  500: {
    imageUrl: error500Image,
    errorCode: '500',
    errorMessage: 'Oops! Something went wrong',
  },
};

/**
 * ErrorPage
 */
export default function ErrorPage() {
  //Params
  const params = useParams();
  const { errorStatusCode } = params;

  const { imageUrl, errorMessage, errorCode } = errorsInfo[errorStatusCode];

  return (
    <div className="container">
      <div className="text-center mb-5">
        <h1 className="display-2 fw-medium">
          {errorCode[0]}
          <i className="fa-solid fa-gear fa-spin text-primary"></i>
          {errorCode[2]}
        </h1>
        <h4 className="text-uppercase">{errorMessage}</h4>
        <div className="mt-5 text-center">
          <Link
            to={PageURL.DashboardPage}
            className="btn btn-primary waves-effect waves-light"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-xl-6">
          <div>
            <img src={imageUrl} alt="Error" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
