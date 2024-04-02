import React from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GuestScreen = () => {
  return (
    <div className="container">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default GuestScreen;
