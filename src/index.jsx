import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./component/Home";
import App from "./App";
import ClaimList from "./component/ClaimList";
import FormClaim from "./component/FormClaim";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/claimlist",
    element: <ClaimList />,
  },
  {
    path: "/FormClaim",
    element: <FormClaim/>,
  }

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);