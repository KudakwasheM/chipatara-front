import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axiosClient from "../utils/axiosClient";

const CreatePatient = () => {
  const [patient, setPatient] = useState({
    name: "",
    national_id: "",
    email: "",
    dob: "",
    address: "",
    phone: "",
    gender: "",
    medications: [],
    allergies: [],
  });
  const [allergy, setAllergy] = useState("");
  const [medication, setMedication] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const pushMedicine = () => {
    if (medication.trim() !== "") {
      setPatient((prevPatient) => ({
        ...prevPatient,
        medications: [...prevPatient.medications, medication],
      }));
      setMedication("");
    }
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

  const addPatient = async (e) => {
    e.preventDefault();

    if (patient.name === "") {
      toast.error("Please add name");
      return;
    } else if (patient.national_id === "") {
      toast.error("Please add national id");
      return;
    } else if (patient.email === "") {
      toast.error("Please add email");
      return;
    } else if (patient.phone === "") {
      toast.error("Please add phone");
      return;
    } else if (patient.address === "") {
      toast.error("Please add address");
      return;
    } else if (patient.dob === "") {
      toast.error("Please add date of birth");
      return;
    } else if (patient.gender === "") {
      toast.error("Please add gender");
      return;
    }

    setLoading(true);
    patient.phone = `+263${patient.phone}`;
    console.log(patient);
    try {
      const res = await axiosClient.post("/patients", patient);
      toast.success("Successfully created patient");
      navigate("/super/patients");
    } catch (err) {
      if (err.code === "ERR_BAD_RESPONSE") {
        toast.error("Internal Server Error");
      } else {
        console.log(err);
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
              <h5 className="card-title">Create New Patient</h5>
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
                    <div className="input-group">
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
                      <span className="input-group-text">
                        <i className="bi bi-calendar4"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <div className="input-group">
                      <span className="input-group-text">+263</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
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
                      {patient.medications.length > 0 ? (
                        <ul>
                          {patient.medications.map((medication, index) => (
                            <li key={index}>{medication}</li>
                          ))}
                        </ul>
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
                              onChange={(e) => setMedication(e.target.value)}
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
                      {patient.allergies.length > 0 ? (
                        <ul>
                          {patient.allergies.map((allergy, index) => (
                            <li key={index}>{allergy}</li>
                          ))}
                        </ul>
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
                            className="btn btn-outline-success"
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
                  className="btn btn-primary"
                  onClick={addPatient}
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

export default CreatePatient;
