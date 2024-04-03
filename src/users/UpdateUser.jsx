import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../utils/axiosClient";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    password: "",
  });
  const [confirm, setConfirm] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getUser = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get(`/users/${id}`);
      setUser(res.data.data);
    } catch (error) {
      if (err.code === "ERR_BAD_RESPONSE") {
        toast.error("Internal Server Error");
      } else {
        toast.error("An error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = () => {
    setChangePassword(!changePassword);
  };

  const editUser = async (e) => {
    e.preventDefault();

    if (changePassword) {
      if (user.password !== confirm) {
        toast.error("Passwords do not match");
        return;
      }
    }

    setLoading(true);
    try {
      const res = await axiosClient.put(`/users/${id}`, user);
      toast.success("User updated succssfully");
      navigate("/super/users");
    } catch (err) {
      console.log(err);
      if (err.code === "ERR_BAD_RESPONSE") {
        toast.error("Internal Server Error");
        // navigate('/super')
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Update {user.name}</h5>
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
                      value={user.name}
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
                      value={user.username}
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
                      value={user.email}
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
                      value={user.role}
                      onChange={(e) =>
                        setUser((newUser) => ({
                          ...newUser,
                          role: e.target.value,
                        }))
                      }
                    >
                      <option value="">Select</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="reception">Reception</option>
                    </select>
                  </div>
                </div>
              </div>
              {changePassword ? (
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <h5 className="">Change Password</h5>
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
                    <div className="d-flex flex-wrap mb-2 gap-2 justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={updatePassword}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex flex-wrap mb-2 gap-2 justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={updatePassword}
                  >
                    Change Password
                  </button>
                </div>
              )}
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
                  className="btn btn-primary"
                  onClick={editUser}
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

export default UpdateUser;
