import React from "react";
import { useParams } from "react-router";
import axiosClient from "../utils/axiosClient";
import { toast } from "react-toastify";

const UpdateVisit = () => {
  const { id } = useParams();
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState();

  const getVisit = async () => {
    try {
      setLoading(false);

      const res = await axiosClient.get(`/visits/${id}`);
      setVisit(res.data.data);
    } catch (error) {
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
              <h5 className="card-title">Create New Visit</h5>
            </div>
            {loading ? (
              <CustomLoader />
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
                  </div>
                  {prescription === null || [] ? (
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <button
                          className="btn btn-outline-success"
                          onClick={handleModal}
                        >
                          Add Prescription
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="mb-3">
                        <button
                          className="btn btn-outline-info"
                          onClick={handleModal}
                        >
                          Show Prescription
                        </button>
                      </div>
                    </div>
                  )}
                  <div
                    className={`${modal ? "" : "d-none"}`}
                    style={{
                      height: "100vh",
                      width: "100vw",
                      zIndex: 1051,
                      position: "fixed",
                      background: "rgba(0,0,0,0.85)",
                      left: 0,
                      top: 0,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="card shadow mb-4" style={{ width: "80vw" }}>
                      <div className="card-header">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">Add Prescription</h5>
                          <button
                            className="btn btn-outline-danger"
                            onClick={handleModal}
                          >
                            <i className="bi bi-x-lg m-0"></i>
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th colspan="5" className="pt-3 pb-3">
                                      <h4>Prescription</h4>
                                    </th>
                                  </tr>
                                  <tr>
                                    <th>Medicine</th>
                                    <th>Dosage</th>
                                    <th>Frequency</th>
                                    <th>Days</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {rows.map((row, index) => (
                                    <tr key={index}>
                                      <td>
                                        <input
                                          disabled
                                          type="text"
                                          value={row.medicine}
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          disabled
                                          type="text"
                                          value={row.dosage}
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          disabled
                                          value={row.frequency}
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          disabled
                                          type="text"
                                          value={row.days}
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <div className="d-inline-flex gap-3">
                                          <button
                                            className="btn btn-outline-danger"
                                            onClick={() => {
                                              removeRow(index);
                                            }}
                                          >
                                            <i className="bi bi-trash m-0"></i>
                                          </button>
                                          <button className="btn btn-outline-success">
                                            <i className="bi bi-pencil m-0"></i>
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                  <tr>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Medicine"
                                        value={medicine}
                                        onChange={(e) =>
                                          setMedicine(e.target.value)
                                        }
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={dosage}
                                        placeholder="Dosage"
                                        onChange={(e) =>
                                          setDosage(e.target.value)
                                        }
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Frequency"
                                        value={frequency}
                                        onChange={(e) =>
                                          setFrequency(e.target.value)
                                        }
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={days}
                                        placeholder="Days"
                                        onChange={(e) =>
                                          setDays(e.target.value)
                                        }
                                      />
                                    </td>
                                    <td>
                                      <div className="d-inline-flex gap-3">
                                        <button
                                          className="btn btn-outline-success"
                                          onClick={handleAddRow}
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="text-end">
                              <button
                                className="btn btn-outline-danger ms-1"
                                onClick={handleModal}
                              >
                                Cancel
                              </button>
                              <button
                                className="btn btn-success ms-1"
                                onClick={handleModal}
                              >
                                Done
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer"></div>
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

export default UpdateVisit;
