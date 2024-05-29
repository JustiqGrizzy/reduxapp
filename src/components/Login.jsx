import React, { useState } from "react";
import { Input } from "../ui";
import { logo } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(isLoading);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };
  return (
    <div className="container my-5">
      <div className="py-3 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="img"
          width="72"
          height="57"
        />
        <h1>Please Login</h1>
      </div>
      <div className="d-flex justify-content-center mx-auto w-50">
        <div className="col-md-7 col-lg-8 ">
          <form>
            <div className="row g-3">
              <div className="col-12">
                <Input
                  label={"Username"}
                  state={userName}
                  setState={setUserName}
                />
              </div>
              <div className="col-12">
                <Input
                  label={"Password"}
                  type="password"
                  state={password}
                  setState={setPassword}
                />
              </div>
            </div>
            <button
              className="w-100 btn btn-primary btn-lg mt-3"
              type="submit"
              onClick={loginHandler}
              disabled={isLoading}
            >
              {isLoading ? "loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
