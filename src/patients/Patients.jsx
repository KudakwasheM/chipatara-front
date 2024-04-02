import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPatients = async () => {
    setLoading(true);

    await axiosClient.get("/patients").then((res) => {
      console.log(res.data.data);
      setPatients(res.data.data);
    });
  };

  useEffect(() => {
    getPatients();
  }, []);
  return (
    <div class="app-body">
      <div class="row">
        <div class="col-xxl-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Patients</h5>
            </div>
            <div class="card-body">
              <div class="col-xxl-12">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped m-0">
                        <thead>
                          <tr>
                            <th>Customer ID</th>
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
                              <a href="#" class="text-red">
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
                              <a href="#" class="text-red">
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
                              <a href="#" class="text-red">
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
                              <a href="#" class="text-red">
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
                              <a href="#" class="text-red">
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

export default Patients;
