import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";

const Navbar = () => {
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom container ">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to={"/"}>
            <img src={logo} alt="" width={"100px"} height={"50px"} />
          </Link>
        </div>

        <div className="col-md-3 text-end">
          <Link to={"/login"}>
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
