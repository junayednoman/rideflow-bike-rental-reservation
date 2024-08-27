import App from "@/App";
import MainLayout from "@/components/layout/MainLayout";
import Dashboard from "@/Dashboard";
import About from "@/pages/About";
import Profile from "@/pages/dashboard/Profile";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
