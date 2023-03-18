import React from "react";
import { createRoot } from "react-dom/client";

const appDiv = document.getElementById("app");

if (appDiv) {
  const root = createRoot(appDiv);
  root.render(<div>"Bye world!"</div>);
}
