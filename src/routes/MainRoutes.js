// Error Handler
import ErrorHandler from '../components/hoc/ErrorHandler';

// Routes
import ProtectedRoute from '../components/hoc/ProtectedRoute';

// Constants
import PageUrls from '../constants/pageUrls';

// Pages :: Dashboard
import DashboardPage from '../pages/dashboard/DashboardPage';

// Main Pages and Layouts
export const MainPageRoutes = {
  path: PageUrls.DashboardPage,
  element: (
    // ErrorHandler
    <ErrorHandler>
      {/* ProtectedRoute */}
      <ProtectedRoute />
    </ErrorHandler>
  ),
  children: [
    {
      path: PageUrls.DashboardPage,
      element: <DashboardPage />,
    },
  ],
};
