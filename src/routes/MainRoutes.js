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
import AntdTablePage from '../pages/antd-components/antd-table/AntdTablePage';
import UploadFilePage from '../pages/antd-components/upload-file/UploadFilePage';
import FormModalPage from '../pages/antd-components/form-modal/FormModalPage';

// Pages :: User Management
import UserListPage from '../pages/user/UserListPage';

// Pages :: Datasets Management
import DatasetListPage from '../pages/datasets/DatasetListPage';

// Pages :: Maps
import NormalMapPage from '../pages/maps/NormalMapPage';
import HeatMapPage from '../pages/maps/HeatMapPage';
import BoundaryMapPage from '../pages/maps/BoundaryMapPage';
import VectorMapPage from '../pages/maps/VectorMapPage';

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

    // Dataset Management
    {
      path: PageUrls.DatasetManagementPage,
      element: <DatasetListPage />,
    },

    // Maps
    {
      path: PageUrls.NormalMapPage,
      element: <NormalMapPage />,
    },
    {
      path: PageUrls.HeatMapPage,
      element: <HeatMapPage />,
    },
    {
      path: PageUrls.BoundaryMapPage,
      element: <BoundaryMapPage />,
    },
    {
      path: PageUrls.VectorMapPage,
      element: <VectorMapPage />,
    },
  ],
};
