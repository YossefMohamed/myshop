import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Message from "./../message/message";
import Loader from "react-loader-spinner";
// import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";

function Register(props) {
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [registerName, setRegisterName] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [buildingNumber, setBuildingNumber] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState([]);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const onSubimitRegisterHandler = (e) => {
    e.preventDefault();
    // console.log(buildingNumber || city || street);
    setMessage([]);
    try {
      if (
        !registerEmail ||
        !registerPassword ||
        !registerName ||
        !buildingNumber ||
        !city ||
        !street
      )
        throw new Error("Please Fill All the Fields !!");
      if (registerPassword !== confirmPassword) {
        throw new Error("Password And Password Confirmation is Not Equal !");
      }

      dispatch(
        register(
          registerEmail,
          registerPassword,
          registerName,
          buildingNumber,
          street,
          city
        )
      );
    } catch (error) {
      if (!message.includes(error.message))
        setMessage([...message, error.message]);
    }
  };

  useEffect(() => {
    if (userRegister.userInfo) {
      props.history.push(redirect);
    }
  }, [userRegister, redirect]);

  return (
    <Container className="registerScreen">
      {userRegister.error ? (
        <Message variant="danger">{userRegister.error}</Message>
      ) : (
        ""
      )}

      {userRegister.userInfo ? (
        <Message variant="success">Done !!!</Message>
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
      {userRegister.loading ? (
        <div className="loader">
          <Loader type="Circles" color="black" height={100} width={100} />
        </div>
      ) : (
        <div className="registerScreen--flex">
          <div className="register">
            <h2>Register</h2>
            <form className="login__form">
              <label htmlFor="email">
                E-mail : <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="register__email"
                className="form__input"
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
              <label htmlFor="name">
                Name : <span className="required">*</span>
              </label>
              <input
                type="text"
                name="Name"
                id="register__Name"
                className="form__input"
                onChange={(e) => {
                  setRegisterName(e.target.value);
                }}
              />
              <label htmlFor="name">
                Building Number : <span className="required">*</span>
              </label>
              <input
                type="text"
                name="building"
                id="register__Name"
                className="form__input"
                onChange={(e) => {
                  setBuildingNumber(e.target.value);
                }}
              />
              <label htmlFor="name">
                Street : <span className="required">*</span>
              </label>
              <input
                type="text"
                name="street"
                id="register__Name"
                className="form__input"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
              <label htmlFor="name">
                City : <span className="required">*</span>
              </label>
              <input
                type="text"
                name="city"
                id="register__Name"
                className="form__input"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <label htmlFor="password">
                Password : <span className="required">*</span>
              </label>
              <input
                type="password"
                name="password"
                className="form__input"
                id="register__password"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
              <label htmlFor="passwordConfirm">
                passwordConfirm : <span className="required">*</span>
              </label>
              <input
                type="password"
                name="passwordConfirm"
                className={`form__input`}
                id="passwordConfirm"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              <button
                className="register__form--submit "
                onClick={onSubimitRegisterHandler}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Register;
