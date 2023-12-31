import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Default theme for slider
import "@splidejs/react-splide/css";
//redux
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);