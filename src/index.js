import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://news-on-rails-api.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

const store = configureStore()
window.store = store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();