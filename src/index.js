import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

// Store
import Store from './store/store.js';

// App
import App from './App.jsx';

// Components
import ReactHotToast from './components/react-hot-toast/ReactHotToast.jsx';

// root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />

    {/* React Hot Toast */}
    <ReactHotToast />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
