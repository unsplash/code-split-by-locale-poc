import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.hydrateRoot(document.getElementById("root"), <App />);

console.log("after render");
