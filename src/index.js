import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { TeamDataProvider } from "./contexts/teamData.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <TeamDataProvider>
      <App />
    </TeamDataProvider>
  </BrowserRouter>
  //* </React.StrictMode> */
);

reportWebVitals();
