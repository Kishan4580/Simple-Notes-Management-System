import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Root entry point for the React application
 * 
 * This file initializes the React application and mounts it to the DOM element
 * with id 'root' in the public/index.html file.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
