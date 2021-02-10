import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userAction";
import "./option.css";
function Option(props) {
  const dispatch = useDispatch();
  // console.log(props);
  return (
    <div className="option">
      <div
        className="info--menu"
        style={{ display: `${props.display ? "block" : "none"}` }}
      >
        <span onClick={(e) => props.clickme()}>
          <Link to="/me">Profile</Link>
        </span>
        <span
          onClick={(e) => {
            dispatch(logout());

            dispatch({ type: "CART_RESET" });
            props.clickme();
          }}
        >
          <Link to="/">Logout</Link>
        </span>
      </div>
    </div>
  );
}

export default Option;
