import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// ─────────────────────────────────────────────────────────────────────────────
// NOTE: Entry point
//
// React 18+ uses createRoot instead of ReactDOM.render.
// StrictMode is enabled to surface unsafe lifecycles and legacy API usage
// during development — it has zero cost in production builds.
// ─────────────────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
