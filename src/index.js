import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';

// Store
import Store from './store/store.js';

// App
import App from './App.jsx';

// root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />

    {/* React Hot Toast : https://react-hot-toast.com/docs/toaster */}
    <Toaster position="top-center" reverseOrder={false} />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
