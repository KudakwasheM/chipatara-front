import React from "react";

const User = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">User Profile</h5>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value="John Doe"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value="john.doe@example.com"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  className="form-control"
                  value="Admin"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <input
                  type="text"
                  id="status"
                  className="form-control"
                  value="Active"
                  readOnly
                />
              </div>
              <div className="text-end">
                <button className="btn btn-primary">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
