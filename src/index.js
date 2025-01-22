import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `createRoot` for React 18+
import './index.css'; // Global styles (optional)
import App from './App'; // Main App component

// Create the root of the app and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
