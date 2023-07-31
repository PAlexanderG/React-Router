import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Import your Blue and Red components into the file.
// Replace the "element" property for each route with the respective color component!

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter is not defined = Links? */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
