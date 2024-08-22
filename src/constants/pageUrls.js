// Page paths
const PagePaths = {
  Auth: '/auth',
  Error: '/error',
};

// URLs
const PageUrls = {
  // Auth Prefix
  // Login Page
  LoginPage: `${PagePaths.Auth}/login`,
  ForgotPasswordPage: `${PagePaths.Auth}/forgot-password`,

  // Home Page
  DashboardPage: '/',

  // Charts Page
  LineChartsPage: '/charts/line-charts',
  BarChartsPage: '/charts/bar-charts',
  PieChartsPage: '/charts/pie-charts',
  BoxplotChartsPage: '/charts/boxplot-charts',
  HeatMapsPage: '/charts/heat-maps',

  // Components
  TableComponentPage: '/table',
  UploadFileComponentPage: '/upload-file',
  FormModalComponentPage: '/form-modal',

  // User Management
  UserManagementPage: '/user/user-mgmt',

  // Dataset Management
  DatasetManagementPage: '/data/dataset-mgmt',

  // Maps
  NormalMapPage: '/map/normal-map',
  MultiplePointsMapPage: '/map/multiple-points-map',
  HeatMapPage: '/map/heat-map',
  BoundaryMapPage: '/map/boundary-map',
  VectorMapPage: '/map/vector-map',

  // Error Page
  ErrorPage: `${PagePaths.Error}/:errorStatusCode`,

  // Custom Error Page Urls..
  CustomErrorPage: `${PagePaths.Error}`,
};

export default PageUrls;
