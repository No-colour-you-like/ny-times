import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./assets/css/index.scss";

import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
