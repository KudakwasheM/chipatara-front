import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import moment from "moment";
import { useSelector } from "react-redux";
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

const Visits = () => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const headers = [
    {
      title: "Visit Number",
      prop: "visit_number",
      isFilterable: true,
    },
    {
      title: "Patient Name",
      prop: "name",
      isSortable: true,
      isFilterable: true,
      cell: (row) => {
        const patientName = row.patient.name;
        return <span>{patientName}</span>;
      },
    },
    {
      title: "Doctor's Name",
      prop: "national_id",
      isSortable: true,
      isFilterable: true,
      cell: (row) => {
        const doctorName = row.doctor.name;
        return <span>{doctorName}</span>;
      },
    },
    {
      title: "Date",
      prop: "createdAt",
      cell: (row) => {
        const formattedDate = moment(row.dob).format("ll");
        return <span>{formattedDate}</span>;
      },
    },
    // { title: "Prescription", prop: "prescription" },
    {
      title: "Action",
      prop: "actions",
      cell: (row) => (
        <div className="d-flex flex-wrap justify-content-around">
          <Link
            to={`/${userInfo.role}/visits/${row._id}`}
            type="button"
            className="btn btn-outline-primary"
          >
            <i className="bi bi-eye m-0"></i>
          </Link>
          <Link
            to={`/${userInfo.role}/visits/edit/${row._id}`}
            type="button"
            className="btn btn-outline-success"
          >
            <i className="bi bi-pencil m-0"></i>
          </Link>
          <button type="button" className="btn btn-outline-danger">
            <i className="bi bi-trash m-0"></i>
          </button>
        </div>
      ),
    },
  ];

  const getVisits = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get("/visits");
      setVisits(res.data.data);
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
    getVisits();
  }, []);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xxl-12">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h5 className="card-title">Visits</h5>
            </div>
            {loading ? (
              <CustomLoader />
            ) : (
              <div className="card-body">
                <div className="col-xxl-12">
                  <DatatableWrapper
                    body={visits}
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
                        {/* <Link
                          to={"/super/users/create"}
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Add New User
                        </Link> */}
                      </Col>
                    </Row>
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="table-responsive">
                          <Table className="table table-striped m-0">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visits;
