import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosClient from "../utils/axiosClient";
import { logout } from "../slices/authSlice";

const Header = ({ currentUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      const res = await axiosClient.get("/auth/logout");
      if (res.data.success) {
        dispatch(logout());
        navigate("/");
      }
    } catch (error) {}
  };

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
        {/* <div className="d-lg-block d-none me-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-outline-primary" type="button">
              <i className="bi bi-search fs-5"></i>
            </button>
          </div>
        </div> */}
        <div className="dropdown ms-3">
          <a
            id="userSettings"
            className="dropdown-toggle d-flex py-2 align-items-center text-decoration-none"
            href="#!"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {currentUser && (
              <span className="d-none d-md-block me-2">{currentUser.name}</span>
            )}
            <img
              src="assets/images/user.png"
              className="rounded-circle img-3x"
              alt="Bootstrap Gallery"
            />
          </a>
          <div className="dropdown-menu dropdown-menu-end shadow">
            <Link to={""} className="dropdown-item d-flex align-items-center">
              <i className="bi bi-person fs-4 me-2"></i>Profile
            </Link>
            <Link to={""} className="dropdown-item d-flex align-items-center">
              <i className="bi bi-gear fs-4 me-2"></i>Account Settings
            </Link>
            <button
              className="dropdown-item d-flex align-items-center"
              onClick={signOut}
            >
              <i className="bi bi-escape fs-4 me-2"></i>Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
