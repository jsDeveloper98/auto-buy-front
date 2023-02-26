import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import store from "./store";
import { App } from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
