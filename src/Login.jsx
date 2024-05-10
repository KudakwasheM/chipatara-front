import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "./utils/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "./slices/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosClient.post("/auth/login", { email, password });
      dispatch(setCredentials(res.data));
    } catch (err) {
      console.log(err);
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
    if (userInfo) {
      const role = userInfo.role;
      switch (role) {
        case "super":
          navigate("/super/dashboard");
          break;
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "doctor":
          navigate("/doctor/dashboard");
          break;
        case "nurse":
          navigate("/nurse/dashboard");
          break;
        default:
          navigate("/");
          break;
      }
    }
  }, [userInfo, navigate]);

  return (
    <div className="row justify-content-center">
      <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
        <form className="my-5">
          <div className="border border-dark rounded-2 p-4 mt-5">
            <div className="login-form">
              <a href="index.html" className="mb-4 d-flex">
                <img
                  src="assets/images/logo.svg"
                  className="img-fluid login-logo"
                  alt="Chipatara"
                />
              </a>
              <h5 className="fw-light mb-5">Sign in to your account.</h5>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="form-check m-0">
                  {/* <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPassword"
                    />
                    <label className="form-check-label" for="rememberPassword">
                      Remember
                    </label> */}
                </div>
                <Link
                  to={"/forgot-password"}
                  className="text-blue text-decoration-underline"
                >
                  Lost password?
                </Link>
              </div>
              <div className="d-grid py-3 mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-lg btn-primary"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
