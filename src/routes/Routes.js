import { createBrowserRouter } from 'react-router-dom';

// Constants
import PageUrls from '../constants/pageUrls';

// Routes
import { MainPageRoutes } from './MainRoutes';

// Pages
import LoginPage from '../pages/auth/LoginPage';

const Router = createBrowserRouter([
  MainPageRoutes,

  {
    path: PageUrls.LoginPage,
    element: <LoginPage />,
  },
]);

export default Router;
