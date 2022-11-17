import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { DataProvider } from "./components/Contexts/DataContext";
import "./style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <DataProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </DataProvider> */}
  </React.StrictMode>
);
reportWebVitals();
