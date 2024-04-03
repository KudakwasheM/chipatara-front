import React from "react";
import { Link } from "react-router-dom";

const Header = ({ currentUser }) => {
  return (
    <div className="app-header d-flex align-items-center">
      <div className="d-flex">
        <button
          className="btn btn-outline-primary me-2 toggle-sidebar"
          id="toggle-sidebar"
        >
          <i className="bi bi-chevron-left fs-5"></i>
        </button>
        <button
          className="btn btn-outline-primary me-2 pin-sidebar"
          id="pin-sidebar"
        >
          <i className="bi bi-chevron-left fs-5"></i>
        </button>
      </div>
      <div className="app-brand-sm d-md-none d-sm-block">
        <a href="index.html">
          {/* <img src="assets/images/logo-sm.svg" className="logo" alt="Bootstrap Gallery"> */}
        </a>
      </div>

      <div className="header-actions">
        <div className="d-lg-block d-none me-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-outline-primary" type="button">
              <i className="bi bi-search fs-5"></i>
            </button>
          </div>
        </div>
        <div className="dropdown ms-3">
          <a
            className="dropdown-toggle d-flex p-2 py-3"
            href="#!"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-bell fs-2 lh-1"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end shadow">
            <div className="dropdown-item">
              <div className="d-flex py-2 border-bottom">
                <img
                  src="assets/images/user.png"
                  className="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div className="m-0">
                  <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p className="mb-1">Membership has been ended.</p>
                  <p className="small m-0 text-primary">Today, 07:30pm</p>
                </div>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="d-flex py-2 border-bottom">
                <img
                  src="assets/images/user2.png"
                  className="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div className="m-0">
                  <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p className="mb-1">Congratulate, James for new job.</p>
                  <p className="small m-0 text-primary">Today, 08:00pm</p>
                </div>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="d-flex py-2">
                <img
                  src="assets/images/user1.png"
                  className="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div className="m-0">
                  <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p className="mb-2">Lewis added new schedule release.</p>
                  <p className="small m-0 text-primary">Today, 09:30pm</p>
                </div>
              </div>
            </div>
            <div className="border-top py-2 px-3 text-end">
              <a href="javascript:void(0)">View all</a>
            </div>
          </div>
        </div>
        <div className="dropdown ms-3">
          <a
            id="userSettings"
            className="dropdown-toggle d-flex py-2 align-items-center text-decoration-none"
            href="#!"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="d-none d-md-block me-2">{currentUser.name}</span>
            <img
              src="assets/images/user.png"
              className="rounded-circle img-3x"
              alt="Bootstrap Gallery"
            />
          </a>
          <div className="dropdown-menu dropdown-menu-end shadow">
            <Link
              to={""}
              className="dropdown-item d-flex align-items-center"
              href="profile.html"
            >
              <i className="bi bi-person fs-4 me-2"></i>Profile
            </Link>
            <Link
              to={""}
              className="dropdown-item d-flex align-items-center"
              href="settings.html"
            >
              <i className="bi bi-gear fs-4 me-2"></i>Account Settings
            </Link>
            <Link
              to={""}
              className="dropdown-item d-flex align-items-center"
              href="login.html"
            >
              <i className="bi bi-escape fs-4 me-2"></i>Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
