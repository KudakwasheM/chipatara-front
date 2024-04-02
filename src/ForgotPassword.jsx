import React from "react";

const ForgotPassword = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-5 col-sm-6 col-12">
          <form action="index.html" class="my-5">
            <div class="border border-dark rounded-2 p-4 mt-5">
              <div class="login-form">
                <a href="index.html" class="mb-4 d-flex">
                  <img
                    src="assets/images/logo.svg"
                    class="img-fluid login-logo"
                    alt="Mercury Admin"
                  />
                </a>
                <h5 class="fw-light mb-5 lh-2">
                  In order to access your account, please enter the email id you
                  provided during the registration process.
                </h5>
                <div class="mb-3">
                  <label class="form-label">Your Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="d-grid py-3 mt-4">
                  <button type="submit" class="btn btn-lg btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
