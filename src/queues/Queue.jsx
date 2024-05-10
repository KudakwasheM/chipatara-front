import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axiosClient from "../utils/axiosClient";
import CustomLoader from "../components/CustomLoader";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Queue = () => {
  const [patients, setPatients] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const getQueue = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/queues/today/unattended");
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

  const remove = async (patient_id) => {
    try {
      const pId = {
        patientId: patient_id,
      };

      const res = await axiosClient.put("/queues/remove", pId);
      console.log(res);
      toast.success("Patient removed");
      getQueue();
    } catch (err) {
      if (err.response.status === 400) {
        toast.warn(err.response.data.error);
      } else if (err.code === "ERR_BAD_RESPONSE") {
        toast.error("Internal Server Error");
      } else {
        toast.error("An error occured");
      }
    }
  };

  useEffect(() => {
    getQueue();
  }, []);

  if (patients === null) {
    return <CustomLoader />;
  }

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Today's Queue</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <div className="card-body">
                <div className="row">
                  {patients.length > 0 ? (
                    <>
                      {patients.map((patient) => {
                        return (
                          <div className="col-sm-3 col-12">
                            <div className="card shadow mb-4">
                              <div className="card-header">
                                <h5 className="card-title">
                                  {patient.position}
                                </h5>
                              </div>
                              <div className="card-body p-4">
                                <div className="text-center">
                                  <h4>{patient.name}</h4>

                                  <div className="row">
                                    {userInfo.role === "super" ? (
                                      <div className="d-flex gap-1">
                                        <Link
                                          className="btn btn-success col-6"
                                          to={`/${userInfo.role}/visits/create/${patient.patient_id}`}
                                        >
                                          Attend
                                        </Link>
                                        <button
                                          className="btn btn-danger col-6"
                                          onClick={() =>
                                            remove(patient.patient_id)
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    ) : (
                                      <>
                                        {userInfo.role === "nurse" ||
                                        "reception" ? (
                                          <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                              remove(patient.patient_id)
                                            }
                                          >
                                            Remove
                                          </button>
                                        ) : (
                                          <>
                                            {userInfo.role === "doctor" ? (
                                              <button className="btn btn-success">
                                                Attend
                                              </button>
                                            ) : (
                                              <></>
                                            )}
                                          </>
                                        )}
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="d-flex justify-center my-5">
                      No Patients In Queue
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;
