import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import { toast } from "react-toastify";

const Billings = () => {
  const [billings, setBillings] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBills = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/billings");
      console.log(res.data.data);
      setBillings(res.data.data);
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
    getBills();
  }, []);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Billing</h5>
            </div>
            <div className="card-body">
              <div className="col-xxl-12">
                <div className="d-flex flex-wrap mb-2 gap-2 justify-content-end">
                  <Link
                    to={"/super/billings/create"}
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Add New Bill
                  </Link>
                </div>
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped m-0">
                        <thead>
                          <tr>
                            <th>Bill Number</th>
                            <th>Bill Currency</th>
                            <th>Bill Amount</th>
                            <th>Bill Status</th>
                            <th>Paid Amount</th>
                            <th>Amount Due</th>
                            <th>View Bill</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {billings.map((bill) => {
                            return (
                              <tr>
                                <td>{bill.bill_number}</td>
                                <td>{bill.currency}1</td>
                                <td className="text-center">{bill.total}</td>
                                {bill.payment_status === "outstanding" ? (
                                  <td>
                                    <span className="badge border border-danger text-danger">
                                      Outstanding
                                    </span>
                                  </td>
                                ) : (
                                  <td>
                                    <span className="badge border border-success text-success">
                                      Paid
                                    </span>
                                  </td>
                                )}
                                <td className="text-center">
                                  {bill.amount_paid}
                                </td>
                                <td className="text-center">
                                  {bill.amount_due}
                                </td>
                                <td></td>
                                <td>
                                  <div className="d-flex flex-wrap justify-content-around">
                                    <Link
                                      to={`/super/billings/${bill._id}`}
                                      type="button"
                                      className="btn btn-outline-primary"
                                    >
                                      <i className="bi bi-eye m-0"></i>
                                    </Link>
                                    <Link
                                      to={`/super/billings/edit/${bill._id}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billings;
