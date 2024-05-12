import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GuestScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      let role = userInfo.role;
      switch (role) {
        case "super":
          navigate("/super/dashboard");
          break;
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "doctor":
          navigate("/doctor/dashboard");
          break;
        case "nurse":
          navigate("/nurse/dashboard");
          break;
        default:
          navigate("/");
          break;
      }
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div className="container">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default GuestScreen;
