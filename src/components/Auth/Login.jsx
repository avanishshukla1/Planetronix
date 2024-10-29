import React from "react";

const Login = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-12">
              <form className="loginform">
                <h2> Login </h2>
                <div className="form-group">
                  <label >Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label >Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className=" mt-2 btn-theme">
                  {" "}
                  Login{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
