import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ currentUser }) => {
  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="app-brand px-3 py-3 d-flex align-items-center">
        <Link to={""}>
          <img src="assets/images/logo.svg" className="logo" alt="Logo" />
        </Link>
      </div>
      <div className="sidebar-user-profile">
        {/* <img
          src="assets/images/user.png"
          className="profile-thumb rounded-circle p-2 d-lg-flex d-none"
          alt="Logo"
        /> */}
        <h5 className="profile-name lh-lg">{currentUser.name}</h5>
        <hr />
      </div>
      <div className="sidebarMenuScroll">
        <ul className="sidebar-menu">
          <li className="active current-page">
            <Link to={""}>
              <i className="bi bi-pie-chart"></i>
              <span className="menu-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/super/patients"}>
              <i className="bi bi-box"></i>
              <span className="menu-text">Patients</span>
            </Link>
          </li>
          <li>
            <Link to={"/super/visits"}>
              <i className="bi bi-box"></i>
              <span className="menu-text">Visits</span>
            </Link>
          </li>
          <li>
            <Link to={"/super/billings"}>
              <i className="bi bi-box"></i>
              <span className="menu-text">Billing</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <i className="bi bi-box"></i>
              <span className="menu-text">Payments</span>
            </Link>
          </li>
          <li>
            <Link to={"/super/users"}>
              <i className="bi bi-box"></i>
              <span className="menu-text">Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
