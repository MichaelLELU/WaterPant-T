import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import DetailPage from "./pages/detail/DetailPage";
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/login/LoginPage";
import UserPage from "./pages/user/UserPage";
import AdminPage from "./pages/admin/AdminPage";
import AddPlantPage from "./pages/addplant/AddPlantPage";
import CalendarPage from "./pages/calendar/CalendarPage";
import App from "./App";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/:usernamepage",
        element: <UserPage />,
      },
      {
        path: "/rullmyworld",
        element: <AdminPage />,
      },
      {
        path: "/addplant",
        element: <AddPlantPage />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/plant/:id",
        element: <DetailPage />,
      },
      {
        path: "/*",
        element: <Navigate to="/" />,
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
