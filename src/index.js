import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3000/api/v1";

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();