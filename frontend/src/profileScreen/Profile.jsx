import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { update } from "../actions/userAction";
import Message from "../message/message";
import "./profile.css";

function Profile(props) {
  //   React.useEffect(() => {
  //     if (user) {
  //       props.history.push("/");
  //     }
  //   }, []);
  const { message, error } = useSelector((state) => state.messageUpdate);
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  let user = {};
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: "UPDATE_RESET" });
    if (!userInfo) {
      props.history.push("/signin");
    } else {
      user = userInfo.user;
      setName(user.name);
      setEmail(user.email);
    }
  }, []);
  return (
    <div>
      {user && (
        <div className="profile__head">
          {console.log(message)}
          <div className="profile__head--image">
            <img
              src={`http://localhost:5000/${user.img}`}
              className="profile--image"
            />
            {console.log(`http://localhost:5000/${user.img}`)}
            <h1>{user.name}</h1>
          </div>

          <div className="profile--container">
            <div className="profile--cat">
              {" "}
              <div className="profile--cat--item">Profile</div>
              <div className="profile--cat--item">Orders</div>
            </div>
            <div className="profile-info">
              {message ? (
                <Message variant={`${error ? "danger" : "success"}`}>
                  {message}
                </Message>
              ) : (
                ""
              )}
              <form>
                <label htmlFor="name">
                  Name : <span className="required">*</span>
                </label>
                <input
                  type="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  className="form__input"
                />
                <label htmlFor="email">
                  E-mail : <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  className="form__input"
                />
                <label htmlFor="email">Password :</label>
                <input
                  type="password"
                  name="email"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="email"
                  className="form__input"
                />
                <label htmlFor="email">New Password :</label>
                <input
                  type="password"
                  name="email"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  id="email"
                  className="form__input"
                />
                <label htmlFor="email">Confirm Password :</label>
                <input
                  type="password"
                  name="email"
                  value={confirmNewPassword}
                  onChange={(e) => {
                    setConfirmNewPassword(e.target.value);
                  }}
                  id="email"
                  className="form__input"
                />
                <button
                  className="login__form--submit my-5"
                  onClick={(e) => {
                    e.preventDefault();

                    dispatch(
                      update(
                        user,
                        email,
                        name,
                        newPassword,
                        confirmNewPassword,
                        password
                      )
                    );
                  }}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
