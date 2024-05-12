import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosClient from "../utils/axiosClient";
import CustomLoader from "../components/CustomLoader";

const Visit = () => {
  const { id } = useParams();
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState(false);

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
              <div className="card-body">
                <div className="row"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
