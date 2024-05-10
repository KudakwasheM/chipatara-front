import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ currentUser }) => {
  const location = useLocation();

  const isActiveTab = (path) => {
    const currentPath = location.pathname;
    if (currentPath.startsWith(path)) {
      return "active current-page ";
    }
    return "";
  };

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
        {currentUser && (
          <h5 className="profile-name lh-lg">{currentUser.name}</h5>
        )}
        <hr />
      </div>
      {currentUser && (
        <div className="sidebarMenuScroll">
          <ul className="sidebar-menu">
            <li className={isActiveTab(`/${currentUser.role}/dashboard`)}>
              <Link to="/">
                <i className="bi bi-house-door"></i>
                <span className="menu-text">Dashboard</span>
              </Link>
            </li>
            <li className={isActiveTab(`/${currentUser.role}/patients`)}>
              <Link to={`/${currentUser.role}/patients`}>
                <i className="bi bi-emoji-smile"></i>
                <span className="menu-text">Patients</span>
              </Link>
            </li>
            <li className={isActiveTab(`/${currentUser.role}/visits`)}>
              <Link to={`/${currentUser.role}/visits`}>
                <i className="bi bi-building-up"></i>
                <span className="menu-text">Visits</span>
              </Link>
            </li>
            <li className={isActiveTab(`/${currentUser.role}/queues`)}>
              <Link to={`/${currentUser.role}/queues`}>
                <i className="bi bi-clock"></i>
                <span className="menu-text">Queue</span>
              </Link>
            </li>
            <li className={isActiveTab(`/${currentUser.role}/billings`)}>
              <Link to={`/${currentUser.role}/billings`}>
                <i className="bi bi-receipt"></i>
                <span className="menu-text">Billing</span>
              </Link>
            </li>
            <li className={isActiveTab(`/${currentUser.role}/payments`)}>
              <Link to={`/${currentUser.role}/payments`}>
                <i className="bi bi-currency-dollar"></i>
                <span className="menu-text">Payments</span>
              </Link>
            </li>
            <li className={isActiveTab(`/${currentUser.role}/users`)}>
              <Link to={`/${currentUser.role}/users`}>
                <i className="bi bi-people"></i>
                <span className="menu-text">Users</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SideBar;
