import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <div class="app-header d-flex align-items-center">
      <div class="d-flex">
        <button
          class="btn btn-outline-primary me-2 toggle-sidebar"
          id="toggle-sidebar"
        >
          <i class="bi bi-chevron-left fs-5"></i>
        </button>
        <button
          class="btn btn-outline-primary me-2 pin-sidebar"
          id="pin-sidebar"
        >
          <i class="bi bi-chevron-left fs-5"></i>
        </button>
      </div>
      <div class="app-brand-sm d-md-none d-sm-block">
        <a href="index.html">
          {/* <img src="assets/images/logo-sm.svg" class="logo" alt="Bootstrap Gallery"> */}
        </a>
      </div>

      <div class="header-actions">
        <div class="d-lg-block d-none me-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" />
            <button class="btn btn-outline-primary" type="button">
              <i class="bi bi-search fs-5"></i>
            </button>
          </div>
        </div>
        <div class="dropdown ms-3">
          <a
            class="dropdown-toggle d-flex p-2 py-3"
            href="#!"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-bell fs-2 lh-1"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-end shadow">
            <div class="dropdown-item">
              <div class="d-flex py-2 border-bottom">
                <img
                  src="assets/images/user.png"
                  class="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div class="m-0">
                  <h5 class="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p class="mb-1">Membership has been ended.</p>
                  <p class="small m-0 text-primary">Today, 07:30pm</p>
                </div>
              </div>
            </div>
            <div class="dropdown-item">
              <div class="d-flex py-2 border-bottom">
                <img
                  src="assets/images/user2.png"
                  class="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div class="m-0">
                  <h5 class="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p class="mb-1">Congratulate, James for new job.</p>
                  <p class="small m-0 text-primary">Today, 08:00pm</p>
                </div>
              </div>
            </div>
            <div class="dropdown-item">
              <div class="d-flex py-2">
                <img
                  src="assets/images/user1.png"
                  class="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div class="m-0">
                  <h5 class="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p class="mb-2">Lewis added new schedule release.</p>
                  <p class="small m-0 text-primary">Today, 09:30pm</p>
                </div>
              </div>
            </div>
            <div class="border-top py-2 px-3 text-end">
              <a href="javascript:void(0)">View all</a>
            </div>
          </div>
        </div>
        <div class="dropdown ms-3">
          <a
            id="userSettings"
            class="dropdown-toggle d-flex py-2 align-items-center text-decoration-none"
            href="#!"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="d-none d-md-block me-2">{user.name}</span>
            <img
              src="assets/images/user.png"
              class="rounded-circle img-3x"
              alt="Bootstrap Gallery"
            />
          </a>
          <div class="dropdown-menu dropdown-menu-end shadow">
            <Link
              to={""}
              class="dropdown-item d-flex align-items-center"
              href="profile.html"
            >
              <i class="bi bi-person fs-4 me-2"></i>Profile
            </Link>
            <Link
              to={""}
              class="dropdown-item d-flex align-items-center"
              href="settings.html"
            >
              <i class="bi bi-gear fs-4 me-2"></i>Account Settings
            </Link>
            <Link
              to={""}
              class="dropdown-item d-flex align-items-center"
              href="login.html"
            >
              <i class="bi bi-escape fs-4 me-2"></i>Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
