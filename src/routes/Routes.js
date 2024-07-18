import { createBrowserRouter } from 'react-router-dom';

// Constants
import PageUrls from '../constants/pageUrls';

// Routes
import { MainPageRoutes } from './MainRoutes';

// Pages :: Login
import LoginPage from '../pages/auth/LoginPage';

// Pages :: Dev
import ComponentsPage from '../pages/dev/ComponentsPage';

const Router = createBrowserRouter([
  MainPageRoutes,

  {
    path: PageUrls.LoginPage,
    element: <LoginPage />,
  },

  // Dev Pages
  {
    path: PageUrls.DevComponentsPage,
    element: <ComponentsPage />,
  },
]);

export default Router;
