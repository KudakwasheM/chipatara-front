import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPatients = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/patients");
      setPatients(res.data.data);
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
    getPatients();
  }, []);
  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Patients</h5>
            </div>
            {loading ? (
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap mb-2 gap-2 justify-content-center">
                    <h5>Loading...</h5>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card-body">
                <div className="col-xxl-12">
                  <div className="d-flex flex-wrap mb-2 gap-2 justify-content-end">
                    <Link
                      to={"/super/patients/create"}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      Add New Patient
                    </Link>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped m-0">
                          <thead>
                            <tr>
                              <th>Patient Number</th>
                              <th>First Name</th>
                              <th>National ID</th>
                              <th>D.O.B</th>
                              <th>Gender</th>
                              <th>Phone</th>
                              <th>Email</th>
                              {/* <th>Joined On</th> */}
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {patients.map((patient, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{patient.name}</td>
                                  <td>{patient.national_id}</td>
                                  <td>{moment(patient.dob).format("ll")}</td>
                                  <td>{patient.gender}</td>
                                  <td>{patient.phone}</td>
                                  <td>{patient.email}</td>
                                  {/* <td>
                                    {moment(patient.createdAt).format("ll")}
                                  </td> */}
                                  <td>
                                    <div className="d-flex flex-wrap justify-content-around">
                                      <Link
                                        to={`/super/patients/${patient._id}`}
                                        type="button"
                                        className="border border-primary bg-primary text-white px-1 rounded-2"
                                      >
                                        View
                                      </Link>
                                      <Link
                                        to={`/super/patients/edit/${patient._id}`}
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

export default Patients;
