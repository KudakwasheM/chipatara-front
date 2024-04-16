import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";
import { useNavigate, useParams } from "react-router";
import CustomLoader from "../components/CustomLoader";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Bill = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(false);

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
              <h5 className="card-title">Showing Bill: {bill.bill_number}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3 col-12">
                  <h1>Logo</h1>
                </div>
                <div class="col-sm-9 col-12">
                  <p class="text-end m-0">
                    Mercury Llc, 9990 St. <br />
                    5000 Church Street, Suite 550
                    <br />
                    Huntsville, Alabama, 99990
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-12">
                  <div class="d-flex justify-content-between my-4">
                    <p class="m-0">
                      {bill.patient.name},
                      <br />
                      {bill.patient.address}
                      <br />
                    </p>

                    <div class="text-end">
                      <p class="m-0">
                        Invoice -{" "}
                        <span class="text-danger">{bill.bill_number}</span>
                      </p>
                      <p class="m-0">{moment(bill.createdAt).format("ll")}</p>

                      {bill.paymentStatus === "outstanding" ? (
                        <span class="badge rounded-pill bg-danger">
                          Outstanding
                        </span>
                      ) : (
                        <span class="badge rounded-pill bg-success">Paid</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Service/Medicines</th>
                          <th>Quantity</th>
                          <th>Unit Size</th>
                          <th>Unit Price</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bill.services_medicine.map((sm) => {
                          return (
                            <tr>
                              <td>{sm.name}</td>
                              <td>{sm.quantity}</td>
                              <td>{sm.unit_size}</td>
                              <td>{sm.unit_price}</td>
                              <td>{sm.amount}</td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td colspan="5"></td>
                        </tr>
                        <tr>
                          <td colspan="3">&nbsp;</td>
                          <td>
                            <p>Subtotal</p>

                            <h5 class="mt-4 text-blue">Total USD</h5>
                          </td>
                          <td>
                            <p>
                              {bill.currency}${bill.total}
                            </p>

                            <h5 class="mt-4 text-blue">
                              {bill.currency}${bill.total}
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="5">
                            <h6 class="text-red">NOTES</h6>
                            <small>
                              We really appreciate your business and if there’s
                              anything else we can do, please let us know! Also,
                              should you need us to add VAT or anything else to
                              this order, it’s super easy since this is a
                              template, so just ask!
                            </small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-12">
                  <div class="text-end">
                    <Link
                      to={`/${userInfo.role}/billings/${id}`}
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </Link>
                    <button class="btn btn-outline-success ms-1">
                      Download
                    </button>
                    <button class="btn btn-outline-secondary ms-1">
                      Print
                    </button>
                    <Link to={""} class="btn btn-primary ms-1">
                      Pay Now
                    </Link>
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

export default Bill;
