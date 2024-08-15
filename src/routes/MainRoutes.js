// Error Handler
import ErrorHandler from '../components/hoc/ErrorHandler';

// Routes
import ProtectedRoute from '../components/hoc/ProtectedRoute';
import MainPageLayout from '../components/hoc/MainPageLayout';

// Constants
import PageUrls from '../constants/pageUrls';

// Pages :: Dashboard
import DashboardPage from '../pages/dashboard/DashboardPage';

// Pages :: Charts
import LineChartsPage from '../pages/line-charts/LineChartsPage';
import BarChartsPage from '../pages/bar-charts/BarChartsPage';
import BoxPlotChartsPage from '../pages/boxplot-charts/BoxPlotChartsPage';
import PieChartsPage from '../pages/pie-charts/PieChartsPage';
import HeatMapsPage from '../pages/heat-maps/HeatMapsPage';

// Pages :: Components
import AntdTablePage from '../pages/components/antd-table/AntdTablePage';
import UploadFilePage from '../pages/components/upload-file/UploadFilePage';
import FormModalPage from '../pages/components/form-modal/FormModalPage';

// Pages :: User Management
import UserListPage from '../pages/user/UserListPage';

// Main Pages and Layouts
export const MainPageRoutes = {
  path: PageUrls.DashboardPage,
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
      path: PageUrls.DashboardPage,
      element: <DashboardPage />,
    },

    // Charts
    {
      path: PageUrls.LineChartsPage,
      element: <LineChartsPage />,
    },
    {
      path: PageUrls.BarChartsPage,
      element: <BarChartsPage />,
    },
    {
      path: PageUrls.BoxplotChartsPage,
      element: <BoxPlotChartsPage />,
    },
    {
      path: PageUrls.PieChartsPage,
      element: <PieChartsPage />,
    },
    {
      path: PageUrls.HeatMapsPage,
      element: <HeatMapsPage />,
    },

    // Components
    {
      path: PageUrls.TableComponentPage,
      element: <AntdTablePage />,
    },
    {
      path: PageUrls.UploadFileComponentPage,
      element: <UploadFilePage />,
    },
    {
      path: PageUrls.FormModalComponentPage,
      element: <FormModalPage />,
    },

    // User Management
    {
      path: PageUrls.UserManagementPage,
      element: <UserListPage />,
    },
  ],
};
