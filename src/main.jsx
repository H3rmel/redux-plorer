import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "@router/Index";

const app = createRoot(document.getElementById("root"));

import "./styles/main.css";

app.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
