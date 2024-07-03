import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// CSS and JS
import './App.scss';
import 'bootstrap/dist/js/bootstrap.js';

// Pages
import LoginPage from './pages/auth/LoginPage';

// Constants
import PageUrls from './constants/pageUrls';

// Routes
import { MainPageRoutes } from './routes/MainRoutes';

//Page Components
const router = createBrowserRouter([
  MainPageRoutes,

  {
    path: PageUrls.LoginPage,
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
