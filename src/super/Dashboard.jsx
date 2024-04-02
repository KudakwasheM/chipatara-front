import React from "react";

const Dashboard = () => {
  return (
    <div class="app-body">
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card shadow mb-4 p-2 rounded-4">
            <div class="card-body d-flex align-items-center">
              <div class="icon-box lg shadow-solid-rb border border-dark p-4 rounded-4 me-3">
                <i class="bi bi-pie-chart fs-1 lh-1 text-primary"></i>
              </div>
              <div class="m-0">
                <h5 class="fw-light mb-1">Patients</h5>
                <h2 class="m-0 text-primary">250</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card shadow mb-4 p-2 rounded-4">
            <div class="card-body d-flex align-items-center">
              <div class="icon-box lg shadow-solid-rb border border-dark p-4 rounded-4 me-3">
                <i class="bi bi-sticky fs-1 lh-1 text-primary"></i>
              </div>
              <div class="m-0">
                <h5 class="fw-light mb-1">Visits</h5>
                <h2 class="m-0 text-primary">900</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card shadow mb-4 p-2 rounded-4">
            <div class="card-body d-flex align-items-center">
              <div class="icon-box lg shadow-solid-rb border border-dark p-4 rounded-4 me-3">
                <i class="bi bi-emoji-smile fs-1 lh-1 text-primary"></i>
              </div>
              <div class="m-0">
                <h5 class="fw-light mb-1">Revenue</h5>
                <h2 class="m-0 text-primary">600</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card shadow mb-4 p-2 rounded-4">
            <div class="card-body d-flex align-items-center">
              <div class="icon-box lg shadow-solid-rb border border-dark p-4 rounded-4 me-3">
                <i class="bi bi-star fs-1 lh-1 text-primary"></i>
              </div>
              <div class="m-0">
                <h5 class="fw-light mb-1">Users</h5>
                <h2 class="m-0 text-primary">95%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Yearly Sales</h5>
            </div>
            <div class="card-body p-4">
              <div id="yearlySales"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3 col-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Sales</h5>
            </div>
            <div class="card-body p-4">
              <div class="text-center my-4">
                <h1>
                  689
                  <i class="bi bi-arrow-up-right-circle-fill text-success fs-3"></i>
                </h1>
                <p class="fw-light m-0">18% higher than last month</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Revenue</h5>
            </div>
            <div class="card-body p-4">
              <div class="text-center my-4">
                <h1>
                  992
                  <i class="bi bi-arrow-up-right-circle-fill text-success fs-3"></i>
                </h1>
                <p class="fw-light m-0">21% higher than last month</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Payments</h5>
            </div>
            <div class="card-body p-4">
              <div class="text-center my-4">
                <h1>
                  864
                  <i class="bi bi-arrow-up-right-circle-fill text-success fs-3"></i>
                </h1>
                <p class="fw-light m-0">16% higher than last month</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Income</h5>
            </div>
            <div class="card-body p-4">
              <div class="text-center my-4">
                <h1>
                  598
                  <i class="bi bi-arrow-down-right-circle-fill text-danger fs-3"></i>
                </h1>
                <p class="fw-light m-0">24% higher than last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Order History</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered align-middle m-0">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Link</th>
                      <th>Post Date</th>
                      <th>Distribution</th>
                      <th>Clicks</th>
                      <th>Rating</th>
                      <th>Views</th>
                      <th>Engagement</th>
                      <th>Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex flex-row align-items-center">
                          <img
                            src="assets/images/mobiles/mob3.jpg"
                            class="img-4x rounded-3 h-auto"
                            alt="Google Admin"
                          />
                          <div class="d-flex flex-column ms-3">
                            <p class="m-0">Apple iPhone 14</p>
                            <p class="text-success m-0">(60% Discount)</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!" class="text-danger">
                          #L10010021
                        </a>
                      </td>
                      <td>02/12/2022</td>
                      <td>
                        <span class="badge bg-warning">
                          <i class="bi bi-caret-up-fill"></i>1.5x
                        </span>
                      </td>
                      <td>
                        <div class="d-flex gap-1">
                          <span class="badge bg-primary">325</span>
                          <span class="badge bg-info">
                            <i class="bi bi-caret-up-fill"></i>
                            21.2%
                          </span>
                        </div>
                      </td>
                      <td>
                        <div class="rate2 rating-stars"></div>
                      </td>
                      <td>
                        <div id="sparkline1"></div>
                      </td>
                      <td>
                        <div class="d-flex gap-1">
                          <span class="badge bg-primary">17</span>
                          <span class="badge bg-danger">
                            <i class="bi bi-caret-down-fill"></i>
                            13.5%
                          </span>
                        </div>
                      </td>
                      <td>
                        <p class="m-0">Higher than last week</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex flex-row align-items-center">
                          <img
                            src="assets/images/mobiles/mob2.jpg"
                            class="img-4x rounded-3 h-auto"
                            alt="Bootstrap Gallery"
                          />
                          <div class="d-flex flex-column ms-3">
                            <p class="m-0">Apple iPhone 13</p>
                            <p class="text-success m-0">(55% Discount)</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!" class="text-danger">
                          #L10010065
                        </a>
                      </td>
                      <td>07/12/2022</td>
                      <td>
                        <span class="badge bg-success">
                          <i class="bi bi-caret-up-fill"></i>2.9x
                        </span>
                      </td>
                      <td>
                        <div class="d-flex gap-1">
                          <span class="badge bg-primary">447</span>
                          <span class="badge bg-info">
                            <i class="bi bi-caret-up-fill"></i>
                            34.6%
                          </span>
                        </div>
                      </td>
                      <td>
                        <div class="rate5 rating-stars"></div>
                      </td>
                      <td>
                        <div id="sparkline2"></div>
                      </td>
                      <td>
                        <div class="d-flex gap-1">
                          <span class="badge bg-primary">65</span>
                          <span class="badge bg-info">
                            <i class="bi bi-caret-down-fill"></i>
                            22.3%
                          </span>
                        </div>
                      </td>
                      <td>
                        <p class="m-0">Higher than last week</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex flex-row align-items-center">
                          <img
                            src="assets/images/mobiles/mob1.jpg"
                            class="img-4x rounded-3 h-auto"
                            alt="Bootstrap Gallery"
                          />
                          <div class="d-flex flex-column ms-3">
                            <p class="m-0">Apple iPhone 12</p>
                            <p class="text-success m-0">(30% Discount)</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!" class="text-danger">
                          #L10010098
                        </a>
                      </td>
                      <td>09/12/2022</td>
                      <td>
                        <span class="badge bg-primary">
                          <i class="bi bi-caret-down-fill"></i>4.1x
                        </span>
                      </td>
                      <td>
                        <div class="d-flex gap-1">
                          <span class="badge bg-primary">825</span>
                          <span class="badge bg-info">
                            <i class="bi bi-caret-up-fill"></i>
                            18.3%
                          </span>
                        </div>
                      </td>
                      <td>
                        <div class="rate4 rating-stars"></div>
                      </td>
                      <td>
                        <div id="sparkline3"></div>
                      </td>
                      <td>
                        <div class="d-flex gap-1">
                          <span class="badge bg-primary">81</span>
                          <span class="badge bg-warning">
                            <i class="bi bi-caret-down-fill"></i>
                            18.4%
                          </span>
                        </div>
                      </td>
                      <td>
                        <p class="m-0">Lower than last week</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-4 col-sm-12 col-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Notifications</h5>
            </div>
            <div class="card-body">
              <div class="scroll350 my-3">
                <ul class="list-unstyled m-0">
                  <li class="d-flex">
                    <div class="icon-box lg flex-shrink-0 bg-primary rounded-4 text-white fs-5">
                      MK
                    </div>
                    <div class="ms-3 mb-4">
                      <span class="mb-3 badge border border-info text-info">
                        Sales
                      </span>
                      <h6 class="mb-2 fw-bold">Marie Kieffer</h6>
                      <p>
                        Thanks for choosing Apple product, further if you have
                        any questions please contact sales team.
                      </p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <div class="icon-box lg flex-shrink-0 bg-primary rounded-4 text-white fs-5">
                      ES
                    </div>
                    <div class="ms-3 mb-4">
                      <span class="mb-3 badge border border-info text-info">
                        Marketing
                      </span>
                      <h6 class="mb-2 fw-bold">Ewelina Sikora</h6>
                      <p>
                        Boost your sales by 50% with the easiest and proven
                        marketing tool for customer enggement &amp; motivation.
                      </p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <div class="icon-box lg flex-shrink-0 bg-primary rounded-4 text-white fs-5">
                      TN
                    </div>
                    <div class="ms-3 mb-4">
                      <span class="mb-3 badge border border-info text-info">
                        Business
                      </span>
                      <h6 class="mb-2 fw-bold">Teboho Ncube</h6>
                      <p>
                        Use an exclusive promo code HKYMM50 and get 50% off on
                        your first order in the new year.
                      </p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <div class="icon-box lg flex-shrink-0 bg-primary rounded-4 text-white fs-5">
                      CJ
                    </div>
                    <div class="ms-3 mb-4">
                      <span class="mb-3 badge border border-info text-info">
                        Admin
                      </span>
                      <h6 class="mb-2 fw-bold">Carla Jackson</h6>
                      <p>
                        Befor inviting the administrator, you must create a role
                        that can be assigned to them.
                      </p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <div class="icon-box lg flex-shrink-0 bg-danger rounded-4 text-white fs-5">
                      JK
                    </div>
                    <div class="ms-3 mb-4">
                      <span class="mb-3 badge border border-danger text-danger">
                        Security
                      </span>
                      <h6 class="mb-2 fw-bold">Julie Kemp</h6>
                      <p>
                        Your security subscription has expired. Please renew the
                        subscription.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 col-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Invoices</h5>
            </div>
            <div class="card-body">
              <div class="scroll350 my-4">
                <div class="d-flex position-relative">
                  <img
                    src="assets/images/user.png"
                    class="img-4x me-3 rounded-4"
                    alt="Admin Dashboard"
                  />
                  <div class="mb-5">
                    <h6 class="mb-1 fw-bold">Sophie Michiels</h6>
                    <p class="mb-1">3 day ago</p>
                    <p class="mb-2 text-primary">Paid invoice ref. #26788</p>
                    <span class="badge border border-info text-info">Sent</span>
                  </div>
                </div>
                <div class="d-flex position-relative">
                  <img
                    src="assets/images/user.png"
                    class="img-4x me-3 rounded-4"
                    alt="Admin Dashboard"
                  />
                  <div class="mb-5">
                    <h6 class="mb-1 fw-bold">Sunny Desmet</h6>
                    <p class="mb-1">3 hours ago</p>
                    <p class="mb-2 text-primary">Sent invoice ref. #23457</p>
                    <span class="badge border border-success text-success">
                      Paid
                    </span>
                  </div>
                </div>
                <div class="d-flex position-relative">
                  <img
                    src="assets/images/user.png"
                    class="img-4x me-3 rounded-4"
                    alt="Admin Themes"
                  />
                  <div class="mb-5">
                    <h6 class="mb-1 fw-bold">Ilyana Maes</h6>
                    <p class="mb-1">One week ago</p>
                    <p class="mb-2 text-primary">Paid invoice ref. #34546</p>
                    <span class="badge border border-info text-info">Sent</span>
                  </div>
                </div>
                <div class="d-flex position-relative">
                  <img
                    src="assets/images/user.png"
                    class="img-4x me-3 rounded-4"
                    alt="Admin Dashboard"
                  />
                  <div class="mb-5">
                    <h6 class="mb-1 fw-bold">Remssy Wilson</h6>
                    <p class="mb-1">7 hours ago</p>
                    <p class="mb-2 text-primary">Paid invoice ref. #23459</p>
                    <span class="badge border border-success text-success">
                      Paid
                    </span>
                  </div>
                </div>
                <div class="d-flex position-relative">
                  <img
                    src="assets/images/user.png"
                    class="img-4x me-3 rounded-4"
                    alt="Admin Themes"
                  />
                  <div class="mb-5">
                    <h6 class="mb-1 fw-bold">Elliott Hermans</h6>
                    <p class="mb-1">1 day ago</p>
                    <p class="mb-2 text-primary">Paid invoice ref. #23473</p>
                    <span class="badge border border-warning text-warning">
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 col-12">
          <div class="card shadow mb-4">
            <div class="card-header">
              <h5 class="card-title">Income</h5>
            </div>
            <div class="card-body">
              <div class="scroll350 my-4">
                <div class="d-grid gap-3 my-4">
                  <div class="d-flex align-items-center">
                    <div id="revenue"></div>
                    <div class="ms-3">
                      <h6 class="text-success d-flex align-items-center">
                        <i class="bi bi-arrow-up-right-circle-fill text-success fs-3 me-2"></i>
                        10%
                      </h6>
                      <h6>Offshore Income</h6>
                      <h3 class="text-primary">$65,000</h3>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div id="revenue2"></div>
                    <div class="ms-3">
                      <h6 class="text-success d-flex align-items-center">
                        <i class="bi bi-arrow-up-right-circle-fill text-success fs-3 me-2"></i>
                        15%
                      </h6>
                      <h6>Onsite Income</h6>
                      <h3 class="text-primary">$89,000</h3>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div id="revenue3"></div>
                    <div class="ms-3">
                      <h6 class="text-danger d-flex align-items-center">
                        <i class="bi bi-arrow-down-right-circle-fill text-danger fs-3 me-2"></i>
                        12%
                      </h6>
                      <h6>Contract Income</h6>
                      <h3 class="text-primary">$257,00</h3>
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

export default Dashboard;
