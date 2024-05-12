import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import moment from "moment";
import CustomLoader from "../components/CustomLoader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/users");
      setUsers(res.data.data);
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

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Users</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <div className="card-body">
                <div className="col-xxl-12">
                  <div className="d-flex flex-wrap mb-2 gap-2 justify-content-end">
                    <Link
                      to={`/${userInfo.role}/users/create`}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      Add New User
                    </Link>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped m-0">
                          <thead>
                            <tr>
                              <th>Full Name</th>
                              <th>Username</th>
                              <th>Email</th>
                              <th>Role</th>
                              <th>Created On</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user) => {
                              return (
                                <tr>
                                  <td>{user.name}</td>
                                  <td>{user.username}</td>
                                  <td>{user.email}</td>
                                  <td>{user.role}</td>
                                  <td>{moment(user.createdAt).format("ll")}</td>
                                  <td>
                                    <div className="d-flex flex-wrap justify-content-around">
                                      <Link
                                        to={`/${userInfo.role}/users/${user._id}`}
                                        type="button"
                                        className="border border-primary bg-primary text-white px-1 rounded-2"
                                      >
                                        View
                                      </Link>
                                      <Link
                                        to={`/${userInfo.role}/users/edit/${user._id}`}
                                        type="button"
                                        className="border border-success bg-success text-white px-1 rounded-2"
                                      >
                                        Edit
                                      </Link>
                                      <button
                                        type="button"
                                        className="border border-danger bg-danger text-white px-1 rounded-2"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-sm-12 col-12 d-flex flex-wrap justify-content-end">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div
                          className="btn-toolbar d-flex flex-wrap"
                          role="toolbar"
                          aria-label="Toolbar with button groups"
                        >
                          <div
                            className="btn-group me-2"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-info"
                            >
                              1
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info"
                            >
                              2
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info"
                            >
                              3
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info"
                            >
                              4
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
