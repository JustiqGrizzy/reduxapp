import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../helpers/persistance-storage";
import { logoutUser } from "../slice/auth";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/login");
  };
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
            <Link to={"/create-article"}>
              <button className="btn btn-success">Create Article</button>
            </Link>
            <button className="btn btn-outline-danger" onClick={logoutHandler}>
              {" "}
              Logout
            </button>
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
