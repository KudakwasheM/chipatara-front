import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";

const CreateBill = () => {
  const [bill, setBill] = useState({});
  const [patients, setPatients] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPatients = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/patients");
      setPatients(res.data.data);
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

  const handleAddRow = () => {
    setRows([...rows, {}]);
  };

  useEffect(() => {
    getPatients();
  }, []);
  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Create New User</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Patient Name</label>
                    <select
                      className="form-select"
                      onChange={(e) =>
                        setBill((newBill) => ({
                          ...newBill,
                          patient: e.target.value,
                        }))
                      }
                    >
                      <option value="" selected disabled>
                        ---Select ---
                      </option>
                      {patients.map((patient) => {
                        return (
                          <option value={patient._id}>{patient.name}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Currency</label>
                    <select
                      className="form-select"
                      onChange={(e) =>
                        setBill((newBill) => ({
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
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th colspan="7" className="pt-3 pb-3">
                            Services/Medicines
                          </th>
                        </tr>
                        <tr>
                          <th>Services/Medicines</th>
                          <th>Quantity</th>
                          <th>Unit</th>
                          <th>Price</th>
                          <th>Amount (Net)</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, index) => (
                          <tr key={index}>
                            {/* Render the columns for each row */}
                            {/* ... */}
                          </tr>
                        ))}
                        <tr>
                          <td>
                            <select className="form-select">
                              <option>Select Product</option>
                              <option>Mobiles</option>
                              <option>Books</option>
                              <option>Clothing</option>
                              <option>Electronics</option>
                              <option>Food</option>
                              <option>Games</option>
                              <option>Gifts</option>
                              <option>Laptops</option>
                              <option>Mobiles</option>
                              <option>Music</option>
                              <option>Office</option>
                              <option>Pharmacy</option>
                              <option>Sports</option>
                              <option>Toys</option>
                            </select>
                          </td>
                          <td>
                            <div className="m-0">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Qty"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="m-0">
                              <input type="text" className="form-control" />
                            </div>
                          </td>
                          <td>
                            <div className="input-group m-0">
                              <input type="text" className="form-control" />
                              <span className="input-group-text">
                                <i className="bi bi-currency-dollar"></i>
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="input-group m-0">
                              <input type="text" className="form-control" />
                              <span className="input-group-text">
                                <i className="bi bi-currency-dollar"></i>
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="d-inline-flex gap-3">
                              <button className="btn btn-outline-danger">
                                <i className="bi bi-trash m-0"></i>
                              </button>
                              <button className="btn btn-outline-success">
                                <i className="bi bi-pencil m-0"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button
                              className="btn btn-dark"
                              onClick={handleAddRow}
                            >
                              Add New Row
                            </button>
                          </td>
                          <td colspan="6"></td>
                        </tr>
                        <tr>
                          <td colspan="4">&nbsp;</td>
                          <td>
                            <p className="m-0">Subtotal</p>
                            <h5 className="mt-2 text-red">Total USD</h5>
                          </td>
                          <td>
                            <p className="m-0">$0.00</p>
                            <h5 className="mt-2 text-red">$0.00</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-end">
                    <button className="btn btn-outline-success">
                      Save as Draft
                    </button>
                    <a
                      href="invoice-list.html"
                      className="btn btn-success ms-1"
                    >
                      Create Invoice
                    </a>
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

export default CreateBill;
