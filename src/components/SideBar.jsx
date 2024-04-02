import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ user }) => {
  return (
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="app-brand px-3 py-3 d-flex align-items-center">
        <Link to={""}>
          <img src="assets/images/logo.svg" class="logo" alt="Logo" />
        </Link>
      </div>
      <div class="sidebar-user-profile">
        {/* <img
          src="assets/images/user.png"
          class="profile-thumb rounded-circle p-2 d-lg-flex d-none"
          alt="Logo"
        /> */}
        <h5 class="profile-name lh-lg mt-2 text-truncate">{user.name}</h5>
        <hr />
      </div>
      <div class="sidebarMenuScroll">
        <ul class="sidebar-menu">
          <li class="active current-page">
            <Link to={""}>
              <i class="bi bi-pie-chart"></i>
              <span class="menu-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/super/patients"}>
              <i class="bi bi-box"></i>
              <span class="menu-text">Patients</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <i class="bi bi-box"></i>
              <span class="menu-text">Visits</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <i class="bi bi-box"></i>
              <span class="menu-text">Billing</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <i class="bi bi-box"></i>
              <span class="menu-text">Payments</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <i class="bi bi-box"></i>
              <span class="menu-text">Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
