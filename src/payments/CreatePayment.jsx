import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import { toast } from "react-toastify";
import CustomLoader from "../components/CustomLoader";

const CreatePayment = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [payment, setPayment] = useState({
    amount: 0,
    payment_method: "",
    currency: "",
    bill: id,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const getBill = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get(`/billings/${id}`);
      setBill(res.data.data);
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

  const addPayment = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.post("/payments", payment);
      navigate(`/${userInfo.role}/payments`);
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
    getBill();
  }, []);

  if (bill === null) {
    return <CustomLoader />;
  }

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Add Payment</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Bill Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email address"
                      value={bill.bill_number}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Currency</label>
                    <select
                      className="form-select"
                      onChange={(e) =>
                        setPayment((newBill) => ({
                          ...newBill,
                          currency: e.target.value,
                        }))
                      }
                    >
                      <option value="" selected disabled>
                        ---Select ---
                      </option>
                      <option value="ZiG">ZiG</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Payment Method</label>
                    <select
                      className="form-select"
                      onChange={(e) =>
                        setPayment((newBill) => ({
                          ...newBill,
                          payment_method: e.target.value,
                        }))
                      }
                    >
                      <option value="" selected disabled>
                        ---Select ---
                      </option>
                      <option value="Cash">Cash</option>
                      <option value="SwipeUSD">SwipeUSD</option>
                      <option value="SwipeZiG">SwipeZiG</option>
                      <option value="EcocashZiG">EcocashZiG</option>
                      <option value="EcocashUSD">EcocashUSD</option>
                      <option value="MedicalAid">MedicalAid</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter amount"
                      onChange={(e) =>
                        setPayment((newBill) => ({
                          ...newBill,
                          amount: e.target.value,
                        }))
                      }
                    />
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
                  disabled={loading}
                  onClick={addPayment}
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

export default CreatePayment;
