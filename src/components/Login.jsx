import React, { useState } from "react";
import { Input } from "../ui";
import { logo } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthSerrvice from "../service/auth";
import { ValidationError } from "./";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthSerrvice.userLogin(user);
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
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
        <ValidationError width={"300px"} />
      </div>
      <div className="d-flex justify-content-center mx-auto w-50">
        <div className="col-md-7 col-lg-8 ">
          <form>
            <div className="row g-3">
              <div className="col-12">
                <Input
                  label={"Email"}
                  state={email}
                  setState={setEmail}
                  type="email"
                  placeholder="YourEmail@example.com"
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
