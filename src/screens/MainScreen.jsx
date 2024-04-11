import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const MainScreen = () => {
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      let role = userInfo.role;
      switch (role) {
        case "super":
          navigate("/super");
          break;
        case "admin":
          navigate("/admin");
          break;
        case "doctor":
          navigate("/doctor");
          break;
        case "nurse":
          navigate("/nurse");
          break;
        default:
          navigate("/");
          break;
      }
    } else {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <div className="page-wrapper">
      <div className="main-container">
        <SideBar currentUser={userInfo} />
        <div className="app-container">
          <Header currentUser={userInfo} />
          <ToastContainer />
          <Outlet />
          {/* <div className="app-footer">
            <span>Chipatara &copy; 2024 || NetoProjects</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
