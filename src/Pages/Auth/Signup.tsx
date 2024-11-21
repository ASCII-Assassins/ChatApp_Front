import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });
  const Auth = AuthService();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const registerd = await Auth.signup(user);
    if (registerd.success) navigate("/signin");
    else alert(registerd.error);
  };

  return (
    <div className=" w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap login-bg1 ">
        <div className="mx-auto p-4">
          <form onSubmit={handleSubmit} className="row">
            <div className="w-auto mx-auto">
              <div className=" mx-auto mb-5 text-center">
                <img
                  src="assets/img/full-logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="card w-50 mx-auto">
                <div className="card-body">
                  <div className=" mb-4">
                    <h2 className="mb-2">Register</h2>
                    <p className="mb-0 fs-16">
                      Sign up to share moments with friends!
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="mb-3 ">
                        <label className="form-label">First Name</label>
                        <div className="input-icon mb-3 position-relative">
                          <input
                            type="text"
                            value={user.firstName}
                            name="firstName"
                            className="form-control"
                            onChange={handleChange}
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <div className="input-icon mb-3 position-relative">
                          <input
                            type="text"
                            value={user.lastName}
                            name="lastName"
                            onChange={handleChange}
                            className="form-control"
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <div className="input-icon mb-3 position-relative">
                          <input
                            type="email"
                            value={user.email}
                            name="email"
                            onChange={handleChange}
                            className="form-control"
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-mail"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <div className="input-icon mb-3 position-relative">
                          <input
                            type="tel"
                            value={user.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
                            className="form-control"
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-phone"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="mb-3 ">
                        <label className="form-label">User Name</label>
                        <div className="input-icon mb-3 position-relative">
                          <input
                            type="text"
                            value={user.username}
                            name="username"
                            onChange={handleChange}
                            className="form-control"
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-icon ">
                          <input
                            type="password"
                            className="pass-input form-control"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                          />
                          <span className="ti toggle-password ti-eye-off"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 justify-content-center"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="login-or mb-3">
                    <span className="span-or">Or sign up with </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-wrap">
                    <div className="text-center me-2 flex-fill">
                      <a
                        href="javascript:void(0);"
                        className="fs-16 btn btn-white btn-shadow d-flex align-items-center justify-content-center"
                      >
                        <img
                          className="img-fluid me-3"
                          src="assets/img/icons/google.svg"
                          alt="Facebook"
                        />
                        Google
                      </a>
                    </div>
                    <div className="text-center flex-fill">
                      <a
                        href="javascript:void(0);"
                        className="fs-16 btn btn-white btn-shadow d-flex align-items-center justify-content-center"
                      >
                        <img
                          className="img-fluid me-3"
                          src="assets/img/icons/facebook.svg"
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="mb-0 text-gray-9">
                  Already have a account?{" "}
                  <Link to="/signin" className="link-primary">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
