import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import Default from "./src/scenes/Default";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Default />
  </StrictMode>,
  rootElement
);
