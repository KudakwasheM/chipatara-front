import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../utils/axiosClient";
import CustomLoader from "../components/CustomLoader";
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Patient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const getPatient = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get(`/patients/${id}`);

      setPatient(res.data.data);
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

  const addToQueue = async () => {
    setLoading(true);

    const details = {
      patient_id: patient._id,
      name: patient.name,
      gender: patient.gender,
    };

    try {
      const res = await axiosClient.post(`/queues`, details);

      toast.success("Patient Added To Queue");
    } catch (err) {
      if (err.response.status === 400) {
        toast.warn(err.response.data.error);
      } else if (err.code === "ERR_BAD_RESPONSE") {
        toast.error("Internal Server Error");
      } else {
        toast.error("An error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPatient();
  }, []);

  if (patient === null) {
    return <CustomLoader />;
  }

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Patient: {patient.name}</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <div className="card-body">
                <div className="card shadow m-2 p-4">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label htmlFor="">Patient Number:</label>
                        <h5>{patient.patient_number}</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label htmlFor="">Name:</label>
                        <h5>{patient.name}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label htmlFor="">Date of birth:</label>
                        <h5>{moment(patient.dob).format("ll")}</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label htmlFor="">Gender:</label>
                        <h5>{patient.gender}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label htmlFor="">Phone:</label>
                        <h5>{patient.phone}</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label htmlFor="">Email:</label>
                        <h5>{patient.email}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label htmlFor="">Address:</label>
                        <h5>{patient.address}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="card shadow p-3 mb-3">
                      <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="mb-3">
                            <h6>Medications</h6>
                            {patient.medications.length > 0 ? (
                              <ul>
                                {patient.medications.map((m, index) => {
                                  return <li key={index}>{m}</li>;
                                })}
                              </ul>
                            ) : (
                              <>No medications</>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="mb-3">
                            <h6>Allergies</h6>
                            {patient.medications.length > 0 ? (
                              <ul>
                                {patient.allergies.map((a, index) => {
                                  return <li key={index}>{a}</li>;
                                })}
                              </ul>
                            ) : (
                              <>No allergies</>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex gap-2 justify-content-end">
                      {userInfo.role === "super" ? (
                        <>
                          <button
                            className="btn btn-info text-white"
                            onClick={() =>
                              navigate(
                                `/${userInfo.role}/visits/create/${patient._id}`
                              )
                            }
                          >
                            Create Visit
                          </button>
                          <button
                            className="btn btn-info text-white"
                            onClick={addToQueue}
                          >
                            Add To Queue
                          </button>
                        </>
                      ) : (
                        <>
                          {userInfo.role === "doctor" ? (
                            <button
                              className="btn btn-info text-white"
                              onClick={() =>
                                navigate(
                                  `/${userInfo.role}/visits/create/${patient._id}`
                                )
                              }
                            >
                              Create Visit
                            </button>
                          ) : (
                            <></>
                          )}
                        </>
                      )}

                      <Link
                        to={`/${userInfo.role}/patients/edit/${patient._id}`}
                        className="btn btn-primary text-white"
                        onClick={() => setEdit(true)}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger text-white"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </button>
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

export default Patient;
