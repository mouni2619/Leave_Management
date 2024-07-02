import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Constants
import { PageURL } from './urls/PageURL';

// CSS and JS
import './App.scss';
import 'bootstrap/dist/js/bootstrap.js';

// App Setup
import ErrorHandler from './app/error/ErrorHandler';
import Layout from './app/layout/Layout';
import ProtectedRoute from './app/ProtectedRoute';

// Pages :: Error
import ErrorPage from './pages/error/ErrorPage';

import DashboardPage from './pages/dashboard/DashboardPage';

// Pages :: Dev
import devRoutes from './dev/DevRoutes';

// Auth Routes..
import { AuthRoutes } from './app/routes/AuthRoutes';

// Error Routes
import { ErrorRoutes } from './app/routes/ErrorRoutes';

// Page Components
const router = createBrowserRouter([
  //Error Pages
  ErrorRoutes,

  // Auth Routes
  AuthRoutes,

  // Protected Pages
  {
    path: PageURL.DashboardPage,
    element: (
      <ErrorHandler>
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      </ErrorHandler>
    ),
    children: [
      {
        path: PageURL.DashboardPage,
        element: <DashboardPage />,
      },
    ],
  },

  // Dev Pages
  ...devRoutes,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
