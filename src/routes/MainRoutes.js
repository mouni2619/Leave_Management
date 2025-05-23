// Error Handler
import ErrorHandler from '../components/hoc/ErrorHandler';

// Routes
import ProtectedRoute from '../components/hoc/ProtectedRoute';
import MainPageLayout from '../components/hoc/MainPageLayout';

// Constants
import PageUrls from '../constants/pageUrls';

// Pages :: Dashboard
import DashboardListPage from '../pages/dashboard-list/DashboardListPage';

// Pages :: Absence Request
import AbsenceRequestListPage from '../pages/absence-request/AbsenceRequestListPage';

// Main Pages and Layouts
export const MainPageRoutes = {
  path: PageUrls.DashboardListPage,
  element: (
    // ErrorHandler
    <ErrorHandler>
      {/* ProtectedRoute */}
      <ProtectedRoute>
        {/* Layout */}
        <MainPageLayout />
      </ProtectedRoute>
    </ErrorHandler>
  ),
  children: [
    {
      path: PageUrls.DashboardListPage,
      element: <DashboardListPage />,
    },
    {
      path: PageUrls.AbsenceRequestListPage,
      element: <AbsenceRequestListPage/>
    }
  ],
};
