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
  LineChartsPage: '/line-charts',
  BarChartsPage: '/bar-charts',
  PieChartsPage: '/pie-charts',
  BoxplotChartsPage: '/boxplot-charts',
  HeatMapsPage: '/heat-maps',

  // Components
  TableComponentPage: '/table',
  UploadFileComponentPage: '/upload-file',

  // Error Page
  ErrorPage: `${PagePaths.Error}/:errorStatusCode`,

  // Custom Error Page Urls..
  CustomErrorPage: `${PagePaths.Error}`,
};

export default PageUrls;
