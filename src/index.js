import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Profile from "./components/Profile";
import UserInfo from "./components/UserInfo";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "info",
            element: <UserInfo />
          },
          {
            path: "dashboard",
            element: <Dashboard />
          }
        ]
      }
    ]
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
