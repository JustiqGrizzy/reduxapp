import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom container ">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to={"/"}>
            <img src={logo} alt="" width={"100px"} height={"50px"} />
          </Link>
        </div>
        {loggedIn ? (
          <>
            <p className="py-2 ms-auto m-0 me-2">{user.username}</p>
            <button className="btn btn-outline-danger"> Logout</button>
          </>
        ) : (
          <>
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
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;
