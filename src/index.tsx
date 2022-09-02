import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * @author Alan Dsilva<alandsilva2001@gmail.com>
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
