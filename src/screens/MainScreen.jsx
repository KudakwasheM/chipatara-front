import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const MainScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div class="page-wrapper">
      <div class="main-container">
        <SideBar user={userInfo} />
        <div class="app-container">
          <Header user={userInfo} />
          <Outlet />
          {/* <div class="app-footer">
            <span>Chipatara &copy; 2024 || NetoProjects</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
