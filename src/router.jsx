import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login.jsx";
import NotFound from "./NotFound.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import GuestScreen from "./screens/GuestScreen.jsx";
import Dashboard from "./super/Dashboard.jsx";
import MainScreen from "./screens/MainScreen.jsx";
import Patients from "./patients/Patients.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestScreen />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/not-found", element: <NotFound /> },
    ],
  },
  {
    path: "/super",
    element: <MainScreen />,
    children: [
      { path: "/super", element: <Dashboard /> },
      { path: "/super/patients", element: <Patients /> },
    ],
  },
]);

export default router;
