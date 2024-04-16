import React, { useState } from "react";

const ProductTable = () => {
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setRows([...rows, {}]);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  //   Avoiding reload
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");

    if (!userInfo && !storedRole) {
      navigate("/");
    } else {
      const role = userInfo?.role || storedRole;
      dispatch(setUserRole(role));

      switch (role) {
        case "super":
          navigate("/super");
          break;
        case "admin":
          navigate("/admin");
          break;
        case "doctor":
          navigate("/doctor");
          break;
        case "nurse":
          navigate("/nurse");
          break;
        default:
          navigate("/");
          break;
      }
    }
  }, []);

  return (
    <table className="table table-bordered">
      {/* Table headers */}
      {/* ... */}
      <tbody>
        {/* Existing rows */}
        {rows.map((row, index) => (
          <tr key={index}>
            {/* Render the columns for each row */}
            {/* ... */}
          </tr>
        ))}
        {/* New row */}
        <tr>
          <td>
            <select className="form-select">{/* ... */}</select>
          </td>
          <td>
            <div className="m-0">
              <input type="number" className="form-control" placeholder="Qty" />
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
          {/* ... */}
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
        {/* Button to add new row */}
        <tr>
          <td>
            <button className="btn btn-dark" onClick={handleAddRow}>
              Add New Row
            </button>
          </td>
          <td colSpan="6"></td>
        </tr>
        {/* ... */}
      </tbody>
    </table>
  );
};

export default ProductTable;
