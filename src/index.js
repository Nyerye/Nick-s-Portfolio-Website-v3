import React from "react";
import ReactDOM from "react-dom/client"; // React 18+
import App from "./App"; // Import the main App component
import "./global.css"; // Global styles

const root = ReactDOM.createRoot(document.getElementById("root")); // Target the root div in index.html
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
