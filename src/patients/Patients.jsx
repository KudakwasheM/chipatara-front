import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
import CustomLoader from "../components/CustomLoader";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  TableBody,
  TableHeader,
} from "react-bs-datatable";
import { Col, Row, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const headers = [
    {
      title: "Patient Number",
      prop: "patient_number",
      isFilterable: true,
    },
    {
      title: "Patient Name",
      prop: "name",
      // isSortable: true,
      isFilterable: true,
    },
    {
      title: "National Id",
      prop: "national_id",
      isFilterable: true,
    },
    {
      title: "D.O.B",
      prop: "createdAt",
      cell: (row) => {
        const formattedDate = moment(row.dob).format("ll");
        return <span>{formattedDate}</span>;
      },
    },
    { title: "Gender", prop: "gender" },
    { title: "Phone", prop: "phone" },
    // {
    //   title: "Email",
    //   prop: "email",
    //   isFilterable: true,
    // },
    {
      title: "Action",
      prop: "actions",
      cell: (row) => (
        <div className="d-flex flex-wrap justify-content-around">
          <Link
            to={`/${userInfo.role}/patients/${row._id}`}
            type="button"
            className="btn btn-outline-primary"
          >
            <i className="bi bi-eye m-0"></i>
          </Link>
          <Link
            to={`/${userInfo.role}/patients/edit/${row._id}`}
            type="button"
            className="btn btn-outline-success"
          >
            <i className="bi bi-pencil m-0"></i>
          </Link>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => addToQueue(row)}
          >
            <i className="bi bi-box-arrow-up m-0"></i>
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i className="bi bi-trash m-0"></i>
          </button>
        </div>
      ),
    },
  ];

  const getPatients = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get("/patients");
      setPatients(res.data.data);
    } catch (err) {
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

  const addToQueue = async (patient) => {
    setLoading(true);

    const details = {
      patient_id: patient._id,
      name: patient.name,
      gender: patient.gender,
    };

    try {
      const res = await axiosClient.post(`/queues`, details);

      toast.success("Patient Added To Queue");
    } catch (err) {
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
    getPatients();
  }, []);
  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Patients</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <div className="card-body">
                <div className="col-xxl-12">
                  <div className="card-body">
                    <div className="col-xxl-12">
                      <DatatableWrapper
                        body={patients}
                        headers={headers}
                        paginationOptionsProps={{
                          initialState: {
                            rowsPerPage: 10,
                            options: [5, 10, 15, 20],
                          },
                        }}
                      >
                        <Row className="mb-2">
                          <Col
                            xs={6}
                            lg={3}
                            className="d-flex flex-col justify-content-end align-items-end"
                          >
                            <Filter placeholder="Search..." />
                          </Col>
                          <Col xs={0} lg={3}></Col>
                          <Col xs={0} lg={3}></Col>
                          <Col
                            xs={6}
                            lg={3}
                            className="d-flex flex-col justify-content-end align-items-end"
                          >
                            <Link
                              to={`/${userInfo.role}/patients/create`}
                              type="button"
                              className="btn btn-outline-success"
                            >
                              Add New Patient
                            </Link>
                          </Col>
                        </Row>
                        <div className="card shadow mb-4">
                          <div className="card-body">
                            <div className="table-responsive">
                              <Table className="table-striped m-0" autoWidth>
                                <TableHeader />
                                <TableBody />
                              </Table>
                            </div>
                          </div>
                        </div>
                        <Row className="d-flex flex-col mt-2 justify-content-end">
                          <Col
                            xs={12}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-end align-items-end"
                          >
                            <Pagination />
                          </Col>
                        </Row>
                      </DatatableWrapper>
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

export default Patients;
