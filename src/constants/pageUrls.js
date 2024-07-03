// Page paths
const PagePath = {
  Auth: '/auth',
  Error: '/error',
};

// URLs
const PageUrls = {
  // Auth Prefix
  // Login Page
  LoginPage: `${PagePath.Auth}/login`,
  ForgotPasswordPage: `${PagePath.Auth}/forgot-password`,

  // Home Page
  DashboardPage: '/',

  // Error Page
  ErrorPage: `${PagePath.Error}/:errorStatusCode`,

  // Custom Error Page Urls..
  CustomErrorPage: `${PagePath.Error}`,
};

export default PageUrls;
