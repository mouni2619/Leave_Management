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

  // Error Page
  ErrorPage: `${PagePaths.Error}/:errorStatusCode`,

  // Custom Error Page Urls..
  CustomErrorPage: `${PagePaths.Error}`,
};

export default PageUrls;
