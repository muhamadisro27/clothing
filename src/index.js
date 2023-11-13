import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <Elements stripe={stripePromise} >
            <App />
          </Elements>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  rootElement
);
