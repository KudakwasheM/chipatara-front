import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import moment from "moment";
import CustomLoader from "../components/CustomLoader";

const Visits = () => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVisits = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get("/visits");
      console.log(res.data.data);
      setVisits(res.data.data);
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
    getVisits();
  }, []);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Visits</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <div className="card-body">
                <div className="col-xxl-12">
                  <div className="d-flex flex-wrap mb-2 gap-2 justify-content-end">
                    <Link
                      to={"/super/visits/create"}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      Add New Visit
                    </Link>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped m-0">
                          <thead>
                            <tr>
                              <th>Folio</th>
                              <th>Patient Name</th>
                              <th>Doctor's Name</th>
                              <th>Date</th>
                              <th>Actioins</th>
                            </tr>
                          </thead>
                          <tbody>
                            {visits.map((visit, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{visit.patient.name}</td>
                                  <td>{visit.doctor.name}</td>
                                  <td>{moment(visit.name).format("ll")}</td>
                                  <td>
                                    <div className="d-flex flex-wrap justify-content-around">
                                      <Link
                                        to={`/super/visits/${visit._id}`}
                                        type="button"
                                        className="border border-primary bg-primary text-white px-1 rounded-2"
                                      >
                                        View
                                      </Link>
                                      <Link
                                        to={`/super/visits/edit/${visit._id}`}
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visits;
