import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const Signin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const Auth = AuthService();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const loggedIn = await Auth.signin(login);
    if (loggedIn.success) navigate("/");
    else alert(loggedIn.error);
  };

  return (
    <div className=" w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div>
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
                <div className="card">
                  <div className="card-body">
                    <div className=" mb-4">
                      <h2 className="mb-2">Welcome!</h2>
                      <p className="mb-0 fs-16">
                        Sign in to see what you’ve missed.
                      </p>
                    </div>
                    <div className="mb-3 ">
                      <label className="form-label">Email</label>
                      <div className="input-icon mb-3 position-relative">
                        <input
                          type="email"
                          value={login.email}
                          name="email"
                          onChange={handleChange}
                          className="form-control"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-user"></i>
                        </span>
                      </div>
                      <label className="form-label">Password</label>
                      <div className="input-icon ">
                        <input
                          type="password"
                          className="pass-input form-control"
                          name="password"
                          value={login.password}
                          onChange={handleChange}
                        />
                        <span className="ti toggle-password ti-eye-off"></span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 justify-content-center"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="login-or mb-3">
                      <span className="span-or">Or sign in with </span>
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
                    Don’t have a account?{" "}
                    <Link to="/signup" className="link-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
