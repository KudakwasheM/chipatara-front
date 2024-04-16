import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomLoader from "../components/CustomLoader";
import axiosClient from "../utils/axiosClient";
import { toast } from "react-toastify";
import moment from "moment";
import { Link } from "react-router-dom";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const getPayments = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/payments");
      console.log(res.data.data);
      setPayments(res.data.data);
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
    getPayments();
  }, []);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Payments</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <div className="card-body">
                <div className="col-xxl-12">
                  {/* <div className="d-flex flex-wrap mb-2 gap-2 justify-content-end">
                    <Link
                      to={`/${userInfo.role}/payments/create`}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      Add New User
                    </Link>
                  </div> */}
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped m-0">
                          <thead>
                            <tr>
                              <th>Receipt Number</th>
                              <th>Bill Number</th>
                              <th>Paid Amount</th>
                              {/* <th>Currency</th> */}
                              <th>Payment Method</th>
                              <th>Bill Amount</th>
                              <th>Created On</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {payments.map((payment) => {
                              return (
                                <tr>
                                  <td>{payment.receipt_number}</td>
                                  <td>{payment.bill.bill_number}</td>
                                  <td>
                                    {payment.currency}${payment.amount}
                                  </td>
                                  {/* <td>{payment.currency}</td> */}
                                  <td>{payment.payment_method}</td>
                                  <td>
                                    {payment.bill.currency}$
                                    {payment.bill_amount}
                                  </td>
                                  <td>
                                    {moment(payment.createdAt).format("ll")}
                                  </td>
                                  <td>
                                    <div className="d-flex flex-wrap justify-content-around">
                                      <Link
                                        to={`/${userInfo.role}/payments/${payment._id}`}
                                        type="button"
                                        className="btn btn-outline-primary"
                                      >
                                        <i className="bi bi-eye m-0"></i>
                                      </Link>
                                      <Link
                                        to={`/${userInfo.role}/payments/edit/${payment._id}`}
                                        type="button"
                                        className="btn btn-outline-success"
                                      >
                                        <i className="bi bi-pencil m-0"></i>
                                      </Link>
                                      <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                      >
                                        <i className="bi bi-trash m-0"></i>
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
                  <div className="col-xl-12 col-sm-12 col-12 d-flex flex-wrap justify-content-end">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div
                          className="btn-toolbar d-flex flex-wrap"
                          role="toolbar"
                          aria-label="Toolbar with button groups"
                        >
                          <div
                            className="btn-group me-2"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-info"
                            >
                              1
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info"
                            >
                              2
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info"
                            >
                              3
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info"
                            >
                              4
                            </button>
                          </div>
                        </div>
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

export default Payments;
