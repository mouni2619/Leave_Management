import { RouterProvider } from 'react-router-dom';

// CSS and JS
import './App.scss';
import 'bootstrap/dist/js/bootstrap.js';

// Router
import Router from './routes/Routes';

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
