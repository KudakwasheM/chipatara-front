import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../utils/axiosClient";
import CustomLoader from "../components/CustomLoader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Visit = () => {
  const { id } = useParams();
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const getVisit = async () => {
    try {
      setLoading(false);
      const res = await axiosClient.get(`/visits/${id}`);
      setVisit(res.data.data);
    } catch (error) {
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
    getVisit();
  }, []);

  if (visit === null) {
    return <CustomLoader />;
  }

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Visit: {visit.visit_number}</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <>
                <div className="card-body">
                  <div className="row">
                    <h4>{visit.patient.name}</h4>
                  </div>
                  <hr />
                  <div className="row mb-4">
                    <div className="col col-sm12 col-6">
                      <label htmlFor="">
                        <h4>Symptoms:</h4>
                      </label>
                      <textarea
                        className="form-control"
                        value={visit.symptoms}
                        rows={3}
                      ></textarea>
                    </div>
                    <div className="col col-sm12 col-6 ml-2">
                      <label htmlFor="">
                        <h4>Diagnosis:</h4>
                      </label>
                      <textarea
                        className="form-control"
                        value={visit.diagnosis}
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-sm12 col-6 ml-2">
                      <label htmlFor="">
                        <h4>Treatment:</h4>
                      </label>
                      <textarea
                        className="form-control"
                        value={visit.treatment}
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                  <hr />
                  {visit.prescription === null ? (
                    <div className="row">
                      <label htmlFor="">
                        <h4>Prescription</h4>
                      </label>
                      <p>No prescription</p>
                    </div>
                  ) : (
                    <div className="row">
                      <label htmlFor="">
                        <h4>Prescription</h4>
                      </label>
                      <Link>
                        Show prescription{" "}
                        {visit.prescription.prescription_number}
                      </Link>
                    </div>
                  )}
                </div>
                <div className="card-footer">
                  <div className="d-flex gap-2 justify-content-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        navigate(`/${userInfo.role}/visits/edit/${visit._id}`)
                      }
                    >
                      Edit
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

export default Visit;
