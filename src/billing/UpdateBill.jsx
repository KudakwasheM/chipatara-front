import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomLoader from "../components/CustomLoader";

const UpdateBill = () => {
  const { id } = useParams();
  const [bill, setBill] = useState({});
  const [patients, setPatients] = useState([]);
  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unit_price, setPrice] = useState();
  const [unit_size, setSize] = useState();
  const [rows, setRows] = useState([]);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const getBill = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get(`/billings/${id}`);
      setBill(res.data.data);
      setRows(res.data.data.services_medicine);
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

  const getServices = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/services");
      setServices(res.data.data);
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

  const calculateTotalAmount = (rows) => {
    return rows.reduce((total, row) => total + row.amount, 0);
  };

  const handleAddRow = () => {
    setRows((prevRows) => {
      let allRows = [
        ...prevRows,
        { name, quantity, unit_size, unit_price, amount },
      ];
      setTotal(calculateTotalAmount(allRows));
      return allRows;
    });

    setName("");
    setQuantity(0);
    setPrice("");
    setSize("");
    setAmount(0);
  };

  const removeRow = (index) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(index, 1);
      return updatedRows;
    });
  };

  const updateBill = async (draft) => {
    setLoading(true);

    try {
      let updatedBill = bill;
      if (draft) {
        updatedBill = { ...bill, draft: true };
      } else {
        updatedBill = { ...bill, draft: false };
      }

      const res = axiosClient.put(`/billings/${id}`, updatedBill);
      toast.success("Successfully created bill");
      navigate(`/${userInfo.role}/billings`);
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
    getPatients();
    getServices();
  }, []);

  useEffect(() => {
    setBill((prevBill) => ({
      ...prevBill,
      services_medicine: rows,
    }));
  }, [rows]);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Update Bill {bill.bill_number}</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">Patient Name</label>
                      <select
                        className="form-select"
                        // value={bill.patient.name}
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
                        value={bill.currency}
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
                              <h4>Services / Medicines</h4>
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
                              <td>
                                <div className="m-0">
                                  <input
                                    disabled
                                    type="text"
                                    value={row.name}
                                    className="form-control"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="m-0">
                                  <input
                                    disabled
                                    type="text"
                                    value={row.quantity}
                                    className="form-control"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="m-0">
                                  <input
                                    type="text"
                                    disabled
                                    value={row.unit_size}
                                    className="form-control"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="input-group m-0">
                                  <input
                                    disabled
                                    type="text"
                                    value={row.unit_price}
                                    className="form-control"
                                  />
                                  <span className="input-group-text">
                                    <i className="bi bi-currency-dollar"></i>
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="input-group m-0">
                                  <input
                                    disabled
                                    type="text"
                                    value={row.amount.toFixed(2)}
                                    className="form-control"
                                  />
                                  <span className="input-group-text">
                                    <i className="bi bi-currency-dollar"></i>
                                  </span>
                                </div>
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
                              <select
                                className="form-select"
                                value={name}
                                onChange={(e) => {
                                  const selectedService = services.find(
                                    (service) => service.name === e.target.value
                                  );
                                  setName(e.target.value);
                                  console.log(bill.currency);
                                  if (bill.currency === "USD") {
                                    setPrice(
                                      selectedService.usd_price.toFixed(2)
                                    );
                                  } else if (bill.currency === "ZiG") {
                                    setPrice(
                                      selectedService.zig_price.toFixed(2)
                                    );
                                  }
                                  setSize(selectedService.unit_size);
                                  setAmount(unit_price * quantity);
                                }}
                                disabled={bill.currency === "" ? true : false}
                              >
                                <option value="" selected disabled>
                                  Select Service
                                </option>
                                {services.map((service) => {
                                  return (
                                    <option value={service.name}>
                                      {service.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </td>
                            <td>
                              <div className="m-0">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Quantity"
                                  value={quantity}
                                  onChange={(e) => {
                                    setQuantity(e.target.value);
                                    setAmount(e.target.value * unit_price);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="m-0">
                                <input
                                  type="number"
                                  className="form-control"
                                  value={unit_size}
                                  placeholder="Unit size"
                                  disabled
                                  onChange={(e) => setSize(e.target.value)}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="input-group m-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={unit_price}
                                  disabled
                                  placeholder="Unit price"
                                  onChange={(e) => setPrice(e.target.value)}
                                />
                                <span className="input-group-text">
                                  <i className="bi bi-currency-dollar"></i>
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="input-group m-0">
                                <input
                                  type="text"
                                  disabled
                                  value={amount > 0 ? amount.toFixed(2) : 0}
                                  className="form-control"
                                />
                                <span className="input-group-text">
                                  <i className="bi bi-currency-dollar"></i>
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="d-inline-flex gap-3">
                                {/* <button className="btn btn-outline-danger">
                                <i className="bi bi-trash m-0"></i>
                              </button> */}
                                <button
                                  className="btn btn-outline-success"
                                  onClick={handleAddRow}
                                >
                                  Add
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* <tr>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={handleAddRow}
                            >
                              Add New Row
                            </button>
                          </td>
                          <td colspan="6"></td>
                        </tr> */}
                          <tr>
                            <td colspan="4">&nbsp;</td>
                            <td>
                              <p className="m-0">Subtotal</p>
                              <h5 className="mt-2 text-red">
                                Total{" "}
                                {bill.currency === "" ? "" : bill.currency}
                              </h5>
                            </td>
                            <td>
                              <p className="m-0">
                                {bill.currency}$
                                {total > 0 ? total.toFixed(2) : 0}
                              </p>
                              <h5 className="mt-2 text-red">
                                {bill.currency}$
                                {total > 0 ? total.toFixed(2) : 0}
                              </h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-end">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-outline-success ms-1"
                        onClick={() => {
                          updateBill(true);
                        }}
                      >
                        Save as Draft
                      </button>
                      <button
                        className="btn btn-success ms-1"
                        onClick={() => {
                          updateBill(false);
                        }}
                      >
                        Create Invoice
                      </button>
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

export default UpdateBill;
