import React, { useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../utils/axiosClient";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    password: "",
  });
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();

    if (user.name === "") {
      toast.error("Please add name");
      return;
    } else if (user.username === "") {
      toast.error("Please add username");
      return;
    } else if (user.email === "") {
      toast.error("Please add email");
      return;
    } else if (user.role === "") {
      toast.error("Please add role");
      return;
    } else if (user.password === "") {
      toast.error("Please add password");
      return;
    } else if (confirm === "") {
      toast.error("Please confirm password");
      return;
    } else if (user.password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await axiosClient.post("/users", user);
      toast.success("Successfully created user");
      navigate("/super/users");
    } catch (err) {
      if (err.code === "ERR_BAD_RESPONSE") {
        toast.error("Internal Server Error");
      } else {
        toast.error("An error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Create New User</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter fullname"
                      onChange={(e) =>
                        setUser((newUser) => ({
                          ...newUser,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                      onChange={(e) =>
                        setUser((newUser) => ({
                          ...newUser,
                          username: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      onChange={(e) =>
                        setUser((newUser) => ({
                          ...newUser,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                      className="form-select"
                      onChange={(e) =>
                        setUser((newUser) => ({
                          ...newUser,
                          role: e.target.value,
                        }))
                      }
                    >
                      <option value="" selected disabled>
                        ---Select ---
                      </option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="reception">Reception</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={(e) =>
                        setUser((newUser) => ({
                          ...newUser,
                          password: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      onChange={(e) => setConfirm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex gap-2 justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={loading ? "btn btn-light" : "btn btn-primary"}
                  disabled={loading}
                  onClick={addUser}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
