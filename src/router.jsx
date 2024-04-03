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
import Billings from "./billing/Billings.jsx";
import Users from "./users/Users.jsx";
import CreateUser from "./users/CreateUser.jsx";
import UpdateUser from "./users/UpdateUser.jsx";
import User from "./users/User.jsx";
import UpdatePatient from "./patients/UpdatePatient.jsx";
import CreatePatient from "./patients/CreatePatient.jsx";

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
      { path: "/super/patients/:id", element: <Patients /> },
      { path: "/super/patients/create", element: <CreatePatient /> },
      { path: "/super/patients/update/:id", element: <UpdatePatient /> },
      { path: "/super/billings", element: <Billings /> },
      { path: "/super/users", element: <Users /> },
      { path: "/super/users/:id", element: <User /> },
      { path: "/super/users/create", element: <CreateUser /> },
      { path: "/super/users/update/:id", element: <UpdateUser /> },
    ],
  },
]);

export default router;
