import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

// Actions
import { ErrorActions } from '../../store/redux-slices/errorSlice';

// constants
import PageUrls from '../../constants/pageUrls';

// Utils
import UrlUtils from '../../utils/urlUtils';
import ErrorUtils from '../../utils/errorUtils';

// Constants
const ServerErrorCodes = [500, 502, 503];
const PageErrorCodes = [401, 404];

/**
 * ERROR PAGES WRAPPER COMPONENT
 * @param {*} children : pages
 */
export default function ErrorHandler({ children }) {
  // Dispatch
  const dispatch = useDispatch();

  // Location
  const { pathname } = useLocation();

  // Navigate
  const navigate = useNavigate();

  // Selector States
  const apiError = useSelector((state) => state.error.errorInfo);
  const showToaster = useSelector((state) => state.error.showToaster);
  const showPageError = useSelector((state) => state.error.showPageError);
  const errorPageUrl = useSelector((state) => state.error.errorPageUrl);

  // useEffect
  useEffect(() => {
    // Clear the Error Details
    dispatch(ErrorActions.clearError());
  }, [dispatch, showPageError, showToaster, pathname]);

  // errorMessage and statusCode from api error
  const { errorMessage, statusCode: errorStatusCode } =
    ErrorUtils.getErrorAndStatusCode(apiError);

  // 500 and 502 and 503 Error Status Handle
  // ---------------------------------------
  if (ServerErrorCodes.includes(errorStatusCode)) {
    // Redirecting url
    const errorPageUrl = UrlUtils.format(PageUrls.ErrorPage, {
      errorStatusCode,
    });

    navigate(errorPageUrl);

    return null;
  }

  // show Page Error
  // -------------------------------------
  if (showPageError) {
    // TODO: We need to define the generic Error Page..
    // TODO: Define a custom Error Page where this Component will render it
    //TODO: By taking the redirect ErrorPage Url from the redux store..
    navigate(errorPageUrl);
    return null;
  }

  // showing toaster only
  // -----------------------------------------
  if (showToaster) {
    toast.error(`${errorStatusCode} ${errorMessage}`);
    return <>{children}</>;
  }

  //  Rendering of Error Pages
  // ----------------------------------------

  if (PageErrorCodes.includes(errorStatusCode)) {
    // Redirecting url
    const errorPageUrl = UrlUtils.format(PageUrls.ErrorPage, {
      errorStatusCode,
    });

    navigate(errorPageUrl);

    return null;
  }

  return <>{children}</>;
}
