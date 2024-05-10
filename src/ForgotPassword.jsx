import React from "react";

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
          <form action="index.html" className="my-5">
            <div className="border border-dark rounded-2 p-4 mt-5">
              <div className="login-form">
                <a href="index.html" className="mb-4 d-flex">
                  <img
                    src="assets/images/logo.svg"
                    className="img-fluid login-logo"
                    alt="Chipatara"
                  />
                </a>
                <h5 className="fw-light mb-5 lh-2">
                  In order to access your account, please enter the email id you
                  provided during the registration process.
                </h5>
                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="d-grid py-3 mt-4">
                  <button type="submit" className="btn btn-lg btn-primary">
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
