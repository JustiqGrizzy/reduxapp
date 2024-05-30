import React, { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
} from "../slice/auth";
import AuthSerrvice from "../service/auth";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    const user = {
      bio: { firstName, lastname },
      username: userName,
      email,
      password,
    };
    try {
      const response = await AuthSerrvice.userRegister(user);
      console.log(response);
      console.log(user);

      dispatch(registerUserSuccess());
    } catch (error) {
      dispatch(registerUserFailure());
    }
  };

  return (
    <div className="container">
      <div className="py-3 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="img"
          width="72"
          height="57"
        />
        <h1>Registration form</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Enter your information</h4>
          <form>
            <div className="row g-3">
              <div className="col-sm-6">
                <Input
                  label={"Firstname"}
                  state={firstName}
                  setState={setFirstName}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label={"Lastname"}
                  state={lastname}
                  setState={setLastname}
                />
              </div>
              <div className="col-12">
                <Input
                  label={"Username"}
                  state={userName}
                  setState={setUserName}
                />
              </div>
              <div className="col-12">
                <Input
                  label={"Your email address"}
                  type="email"
                  placeholder="Your Email@example.com"
                  state={email}
                  setState={setEmail}
                />
              </div>
              <div className="col-12">
                <Input
                  label={"Create password"}
                  type="password"
                  state={password}
                  setState={setPassword}
                />
              </div>
            </div>
            <button
              className="w-100 btn btn-primary btn-lg mt-3"
              type="submit"
              onClick={registerHandler}
              disabled={isLoading}
            >
              {isLoading ? "loading..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
