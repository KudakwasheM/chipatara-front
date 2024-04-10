import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const CreateVisit = () => {
  const { patientId } = useParams();
  const [visit, setVisit] = useState({
    symptoms: "",
    diagnosis: "",
    treatment: "",
    patient: "",
    doctor: "",
    files: [],
  });
  const [prescription, setPrescription] = useState({});
  const [patients, setPatients] = useState({});
  const [loading, setLoading] = useState(false);

  const getPatients = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/patients");
      console.log(res.data.data);
      setPatients(res.data.data);
    } catch (err) {
      console.log(err);
      if (err.code === "ERR_BAD_RESPONSE") {
        toast.error(err.response.data.error);
      } else {
        console.log(err);
        toast.error("An error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  const getPatient = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get(`/patients/${patientId}`);
      setPatients(res.data.data);
    } catch (err) {
      console.log(err);
      if (err.code === "ERR_BAD_RESPONSE") {
        toast.error(err.response.data.error);
      } else {
        console.log(err);
        toast.error("An error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  const addVisit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axiosClient.post("/visits");
      toast.success("Visit created successfully");
      navigate("/super/visits");
    } catch (err) {
      if (err.code === "ERR_BAD_RESPONSE") {
        toast.error(err.response.data.error);
      } else {
        console.log(err);
        toast.error("An error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (patientId === undefined) {
      getPatients();
    } else {
      getPatient();
    }
  }, []);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Create New Visit</h5>
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
              <>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">Symptons</label>
                        <textarea
                          className="form-control"
                          rows="2"
                          placeholder="Enter symptoms"
                          onChange={(e) =>
                            setVisit((newVisit) => ({
                              ...newVisit,
                              symptoms: e.target.value,
                            }))
                          }
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">Diagnosis</label>
                        <textarea
                          className="form-control"
                          rows="2"
                          placeholder="Enter diagnosis"
                          onChange={(e) =>
                            setVisit((newVisit) => ({
                              ...newVisit,
                              diagnosis: e.target.value,
                            }))
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">Treatment</label>
                        <textarea
                          className="form-control"
                          rows="2"
                          placeholder="Enter treatment"
                          onChange={(e) =>
                            setVisit((newVisit) => ({
                              ...newVisit,
                              treatment: e.target.value,
                            }))
                          }
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">Patient</label>
                        <select
                          className="form-select"
                          onChange={(e) =>
                            setVisit((newVisit) => ({
                              ...newVisit,
                              patient: e.target.value,
                            }))
                          }
                        >
                          <option value="" selected disabled>
                            ---Select ---
                          </option>
                          {patients.length > 0 ? (
                            <>
                              {patients.map((patient) => {
                                return (
                                  <option value={patient._id}>
                                    {patient.name}
                                  </option>
                                );
                              })}
                            </>
                          ) : (
                            <></>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <button className="btn btn-outline-success">
                          Add Prescription
                        </button>
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
                      onClick={addVisit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVisit;
