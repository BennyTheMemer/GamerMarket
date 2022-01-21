import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/AuthHeader";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store.js";

import { Provider } from "react-redux";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ColorModeScript />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
