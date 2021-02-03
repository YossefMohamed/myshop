import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Message from "./../message/message";
import Loader from "react-loader-spinner";
import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../actions/userAction";
import "./loginScreen.css";

export default function LoginScreen(props) {
  const myRef = React.useRef(null);

  const [loginEmail, setEmail] = useState();
  const [loginPassword, setloginPassword] = useState();

  const [message, setMessage] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const userRegister = useSelector((state) => state.userRegister);
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props.history, "Check");
    if (userLogin.loading) {
      if (userLogin.error) setMessage([...message, userLogin.message]);
    }
    console.log(true);
    if (userLogin.userInfo) {
      props.history.push(redirect);
    }
  }, [userLogin, redirect]);

  // useEffect(() => {

  // }, [message]);
  const handleFacebookLogin = (e) => {
    e.preventDefault();
    myRef.current.children[0].getElementsByTagName("button")[0].click();
  };
  const responesFacebook = (response) => {
    console.table(response);
    dispatch(register(response.email, response.id, response.name));
  };

  const onSubimitHandler = (e) => {
    e.preventDefault();
    console.log(userLogin);

    try {
      if (!loginEmail || !loginPassword)
        throw new Error("Please Fill All the Fields !!");
      dispatch(login(loginEmail, loginPassword));
    } catch (error) {
      setMessage([...message, error.message]);
      console.log(error.message);
    }
  };
  return (
    <Container className="loginScreen">
      <div style={{ display: "none" }} ref={myRef}>
        <FacebookLogin
          appId="461875371864202"
          fields="name,email,picture,userID"
          callback={responesFacebook}
        />
      </div>
      {userLogin.error ? (
        <Message variant="danger">{userLogin.error}</Message>
      ) : (
        ""
      )}
      {userLogin.userInfo ? (
        <Message variant="success">{userLogin.error}</Message>
      ) : (
        ""
      )}
      {message.length
        ? message.map((e, idx) => (
            <Message key={idx} variant="danger">
              {e}
            </Message>
          ))
        : ""}
      {userLogin.loading ? (
        <div className="loader">
          <Loader type="Circles" color="black" height={100} width={100} />
        </div>
      ) : (
        <div className="container__flex">
          <div className="signin">
            <h2>Login</h2>
            <form className="login__form">
              <label htmlFor="email">
                E-mail : <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                className="form__input"
              />
              <label htmlFor="password">
                Password : <span className="required">*</span>
              </label>
              <input
                type="password"
                name="password"
                className={`form__input`}
                onChange={(e) => {
                  setloginPassword(e.target.value);
                }}
                id="password"
              />
              <div className="form__password--reset">
                <Link to="/reset">Forget Your Password ?</Link>
              </div>
              <button
                className="login__form--submit"
                onClick={onSubimitHandler}
              >
                Login
              </button>
              <button
                className="login__form--facebook"
                onClick={(e) => handleFacebookLogin(e)}
              >
                <i class="fab fa-facebook"></i>
              </button>
            </form>
            <div className="register--link">
              <div className="register--link--or">
                <div className="hr"></div>
              </div>
              <button className="login__form--submit">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
