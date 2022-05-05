import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import rootReducer from "./reducers";
import GlobalStyle from "./styles/GlobalStyle";
import GlobalWidth from "./styles/GlobalWidth";
import { composeWithDevTools } from "redux-devtools-extension";

const isDev = process.env.NODE_ENV === "development";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = isDev
  ? legacy_createStore(rootReducer, composeWithDevTools())
  : legacy_createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <GlobalWidth>
        <App />
      </GlobalWidth>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
