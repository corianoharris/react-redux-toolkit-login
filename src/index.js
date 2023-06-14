import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { unregister } from "./ServiceWorker";

import "./index.css";
import App from "./App";
import store from "./store";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
