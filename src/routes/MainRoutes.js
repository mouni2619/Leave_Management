// Error Handler
import ErrorHandler from '../pages/error/ErrorHandler';

// Routes
import ProtectedRoute from '../routes/ProtectedRoute';

// Constants
import PageURL from '../urls/pageUrls';

// Pages :: Dashboard
import DashboardPage from '../pages/dashboard/DashboardPage';

// Main Pages and Layouts
export const MainPageRoutes = {
  path: PageURL.DashboardPage,
  element: (
    // ErrorHandler
    <ErrorHandler>
      {/* ProtectedRoute */}
      <ProtectedRoute />
    </ErrorHandler>
  ),
  children: [
    {
      path: PageURL.DashboardPage,
      element: <DashboardPage />,
    },
  ],
};
