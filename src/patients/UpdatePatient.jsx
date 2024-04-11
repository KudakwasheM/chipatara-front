import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../utils/axiosClient";
import moment from "moment";
import { toast } from "react-toastify";
import CustomLoader from "../components/CustomLoader";

const UpdatePatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({});
  const [allergy, setAllergy] = useState("");
  const [medication, setMedication] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getPatient = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get(`/patients/${id}`);
      // const patientDob = res.data.data.dob;
      // const formattedDob = moment(patientDob, "DD/MM/YYYY").format(
      //   "YYYY-MM-DD"
      // );
      // setPatient({ ...res.data.data, dob: formattedDob });
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

  const pushMedicine = () => {
    if (medication.trim() !== "") {
      setPatient((prevPatient) => ({
        ...prevPatient,
        medications: [...prevPatient.medications, medication],
      }));
      setMedication("");
    }
  };

  const removeMedication = (index) => {
    setPatient((prevPatient) => {
      const updatedMedications = [...prevPatient.medications];
      updatedMedications.splice(index, 1);
      return {
        ...prevPatient,
        medications: updatedMedications,
      };
    });
  };

  const pushAllergy = () => {
    if (allergy.trim() !== "") {
      setPatient((prevPatient) => ({
        ...prevPatient,
        allergies: [...prevPatient.allergies, allergy],
      }));
      setAllergy("");
    }
  };

  const removeAllergy = (index) => {
    setPatient((prevPatient) => {
      const updatedAllergies = [...prevPatient.allergies];
      updatedAllergies.splice(index, 1);
      return {
        ...prevPatient,
        allergies: updatedAllergies,
      };
    });
  };

  const editPatient = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosClient.put(`/patients/${id}`, patient);
      toast.success("Patient updated successfully");
      navigate("/super/patients");
    } catch (err) {
      if (err.code === "ERR_BAD_RESPONSE") {
        toast.error("Internal Server Error");
      } else if (err.response) {
        // Server responded with an error status code
        if (err.response.status === 500) {
          toast.error("Internal Server Error");
        } else if (err.response.status === 404 || 400) {
          toast.error("Object not found");
        } else {
          toast.error("An error occurred");
        }
      } else if (err.request) {
        // Request was made but no response received
        toast.error("No response from server");
      } else {
        // Other generic error
        toast.error("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPatient();
  }, []);

  // useEffect(() => {
  //   console.log(patient);
  // }, [patient]);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Create New Patient</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter fullname"
                          value={patient.name}
                          onChange={(e) =>
                            setPatient((newPatient) => ({
                              ...newPatient,
                              name: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">National ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter national id"
                          value={patient.national_id}
                          onChange={(e) =>
                            setPatient((newPatient) => ({
                              ...newPatient,
                              national_id: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">D.O.B</label>
                        <input
                          type="date"
                          className="form-control datepicker"
                          onChange={(e) =>
                            setPatient((newPatient) => ({
                              ...newPatient,
                              dob: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter phone number"
                          value={patient.phone}
                          onChange={(e) =>
                            setPatient((newPatient) => ({
                              ...newPatient,
                              phone: e.target.value,
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
                          value={patient.email}
                          onChange={(e) =>
                            setPatient((newPatient) => ({
                              ...newPatient,
                              email: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select
                          className="form-select"
                          value={patient.gender}
                          onChange={(e) =>
                            setPatient((newPatient) => ({
                              ...newPatient,
                              gender: e.target.value,
                            }))
                          }
                        >
                          <option value="" disabled selected>
                            --- Select ---
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="mb-3">
                        <div className="m-0">
                          <label className="form-label">Address</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter address"
                            value={patient.address}
                            onChange={(e) =>
                              setPatient((newPatient) => ({
                                ...newPatient,
                                address: e.target.value,
                              }))
                            }
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <h5 className="">Medication</h5>
                          {patient.medications ? (
                            <>
                              {patient.medications.length > 0 ? (
                                <ul>
                                  {patient.medications.map(
                                    (medication, index) => (
                                      <li key={index}>
                                        {medication}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span
                                          type="button"
                                          className="text-danger"
                                          onClick={() => {
                                            removeMedication(index),
                                              console.log(patient);
                                          }}
                                        >
                                          X
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              ) : (
                                <></>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                          <div className="row">
                            <div className="col-lg-10 col-sm-10 col-10">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter medication"
                                  value={medication}
                                  onChange={(e) =>
                                    setMedication(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                              <button
                                type="button"
                                className="btn btn-outline-success"
                                onClick={pushMedicine}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <h5 className="">Allergy</h5>
                          {patient.allergies ? (
                            <>
                              {patient.allergies.length > 0 ? (
                                <ul>
                                  {patient.allergies.map((allergy, index) => (
                                    <li key={index}>
                                      {allergy}
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <span
                                        type="button"
                                        className="text-danger"
                                        onClick={() => removeAllergy(index)}
                                      >
                                        X
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <></>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                          <div className="row">
                            <div className="col-lg-10 col-sm-10 col-10">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter allergy"
                                  value={allergy}
                                  onChange={(e) => setAllergy(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                              <button
                                type="button"
                                className={"btn btn-outline-success"}
                                onClick={pushAllergy}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
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
                      onClick={editPatient}
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

export default UpdatePatient;
