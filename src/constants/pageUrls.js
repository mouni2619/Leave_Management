// Page paths
const PagePaths = {
  Auth: '/auth',
  Error: '/error',
  Charts: 'charts',
  Map: '/map',
  AntD: '/antd-component',
  User: '/user',
  Data: '/data',
};

// URLs
const PageUrls = {
  // Auth Prefix
  // Login Page
  LoginPage: `${PagePaths.Auth}/login`,
  ForgotPasswordPage: `${PagePaths.Auth}/forgot-password`,

  // Home Page
  DashboardListPage: '/',

  // Charts Page
  LineChartsPage: `${PagePaths.Charts}/line-charts`,
  BarChartsPage: `${PagePaths.Charts}/bar-charts`,
  PieChartsPage: `${PagePaths.Charts}/pie-charts`,
  BoxplotChartsPage: `${PagePaths.Charts}/boxplot-charts`,
  HeatMapsPage: `${PagePaths.Charts}/heat-maps`,

  // Components
  TableComponentPage: `${PagePaths.AntD}/table`,
  UploadFileComponentPage: `${PagePaths.AntD}/upload-file`,
  FormModalComponentPage: `${PagePaths.AntD}/form-modal`,

  // User Management
  UserManagementPage: `${PagePaths.User}/user-mgmt`,

  // Dataset Management
  DatasetManagementPage: `${PagePaths.Data}/dataset-mgmt`,

  // Maps
  NormalMapPage: `${PagePaths.Map}/normal-map`,
  MultiplePointsMapPage: `${PagePaths.Map}/multiple-points-map`,
  HeatMapPage: `${PagePaths.Map}/heat-map`,
  BoundaryMapPage: `${PagePaths.Map}/boundary-map`,
  VectorMapPage: `${PagePaths.Map}/vector-map`,

  // Error Page
  ErrorPage: `${PagePaths.Error}/:errorStatusCode`,

  // Custom Error Page Urls..
  CustomErrorPage: `${PagePaths.Error}`,
};

export default PageUrls;
