import React from "react";
import { Link } from "react-router-dom";

const Visits = () => {
  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Visits</h5>
            </div>
            <div className="card-body">
              <div className="col-xxl-12">
                <div className="d-flex flex-wrap mb-2 gap-2 justify-content-end">
                  <Link
                    to={""}
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
                            <th>Patient Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Items Bought</th>
                            <th>Money Spent</th>
                            <th>Last Login</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#00001</td>
                            <td>
                              <a href="#" className="text-red">
                                Alia
                              </a>
                            </td>
                            <td>Willams</td>
                            <td>+143-148-60985</td>
                            <td>info@example.com</td>
                            <td>250</td>
                            <td>$4500</td>
                            <td>10/10/2022 4:30pm</td>
                          </tr>
                          <tr>
                            <td>#00002</td>
                            <td>
                              <a href="#" className="text-red">
                                Nathan
                              </a>
                            </td>
                            <td>James</td>
                            <td>+278-119-88790</td>
                            <td>info@example.com</td>
                            <td>390</td>
                            <td>$3500</td>
                            <td>12/10/2022 2:37am</td>
                          </tr>
                          <tr>
                            <td>#00003</td>
                            <td>
                              <a href="#" className="text-red">
                                Kelly
                              </a>
                            </td>
                            <td>Thomas</td>
                            <td>+125-117-88763</td>
                            <td>info@example.com</td>
                            <td>135</td>
                            <td>$2400</td>
                            <td>14/10/2022 7:50pm</td>
                          </tr>
                          <tr>
                            <td>#00004</td>
                            <td>
                              <a href="#" className="text-red">
                                Steve
                              </a>
                            </td>
                            <td>Smitth</td>
                            <td>+334-676-66530</td>
                            <td>info@example.com</td>
                            <td>765</td>
                            <td>$7890</td>
                            <td>18/10/2022 9:30pm</td>
                          </tr>
                          <tr>
                            <td>#00005</td>
                            <td>
                              <a href="#" className="text-red">
                                Kevin
                              </a>
                            </td>
                            <td>Oliver</td>
                            <td>+435-667-99808</td>
                            <td>info@example.com</td>
                            <td>763</td>
                            <td>$5690</td>
                            <td>21/10/2022 3:20pm</td>
                          </tr>
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

export default Visits;
