import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import "./index.css";

const THEME = createMuiTheme({
  typography: {
    fontFamily: "Vazir",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Conver Persian numbers to English
String.prototype.toEnglishDigits = function () {
  return this.replace(/[۰-۹]/g, function (chr) {
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return persian.indexOf(chr);
  });
};

// Conver English numbers to Persian
String.prototype.toPersianDigits = function () {
  return this.replace(/[0-9]/g, function (chr) {
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    var English = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return persian[English.indexOf(chr)];
  });
};
