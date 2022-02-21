import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {Provider as ReduxProvider} from "react-redux";
import  {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store"

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
  rootElement
);
