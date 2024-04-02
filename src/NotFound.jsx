import React from "react";

const NotFound = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center text-white">
              <h1 class="error-title mb-3">404</h1>
              <h3 class="mb-5 fw-lighter lh-2">
                We're sorry but it looks <br />
                like that page doesn't exist.
              </h3>
              <a
                href="index.html"
                class="btn btn-primary shadow px-5 py-3 fs-5"
              >
                Go back to dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
