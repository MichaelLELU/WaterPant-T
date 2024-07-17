import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/signup/SignupPage";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <SignupPage />,
        path: "/signup",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
