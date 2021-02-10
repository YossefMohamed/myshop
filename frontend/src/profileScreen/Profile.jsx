import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addImage, update } from "../actions/userAction";
import { getOrders } from "../actions/orderAction";
import Message from "../message/message";
import "./profile.css";

function Profile(props) {
  const { message, error } = useSelector((state) => state.messageUpdate);
  const orders = useSelector((state) => state.allOrder.order);
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  if (!userInfo) {
    props.history.push("/signin");
  } 
  const [myPhoto, setMyPhoto] = React.useState();
  const [image, setImage] = React.useState();
  var user = userInfo ? userInfo : {};
  const dispatch = useDispatch();

  const [profile, setProfile] = React.useState(true);
  React.useEffect(() => {
    dispatch(getOrders());
    if (!userInfo) {
      props.history.push("/signin");
    } 
  }, []);
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const [city, setCity] = React.useState();
  const [street, setStreet] = React.useState();
  const [buildingNumber, setBuildingNumber] = React.useState();
  const [newPassword, setNewPassword] = React.useState();
  const [confirmNewPassword, setConfirmNewPassword] = React.useState();
  React.useEffect(() => {
    dispatch({ type: "UPDATE_RESET" });
    if (!userInfo) {
      props.history.push("/signin");
    } else {
      setName(user.name);
      setEmail(user.email);
      setMyPhoto(user.img);
      setBuildingNumber(user.shippingAddress.buildingNumber);
      setStreet(user.shippingAddress.street);
      setCity(user.shippingAddress.city);
    }
  }, []);
  React.useEffect(() => {
    setMyPhoto(user.img);
  }, [userInfo]);

  return (
    <div>
      {user && (
        <div className="profile__head">
          {/* {console.log(message)} */}
          <div className="profile__head--image">
            <img
              src={`http://localhost:5000/${myPhoto}`}
              className="profile--image"
            />
            {/* {console.log(`http://localhost:5000/${user.img}`)} */}
            <h1>{user.name}</h1>
          </div>

          <div className="profile--container">
            <div className="profile--cat">
              {" "}
              <div
                className="profile--cat--item"
                onClick={() => setProfile(true)}
              >
                Profile
              </div>
              <div
                className="profile--cat--item"
                onClick={() => setProfile(false)}
              >
                Orders
              </div>
            </div>
            <div className="profile-info">
              {message ? (
                <Message variant={`${error ? "danger" : "success"}`}>
                  {message}
                </Message>
              ) : (
                ""
              )}
              {profile ? (
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
                  <label htmlFor="name">
                    Building Number : <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="building"
                    value={buildingNumber}
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
                    value={street}
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
                    value={city}
                    id="register__Name"
                    className="form__input"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
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
                  <input
                    type="file"
                    id="exampleFormControlFile1"
                    name="image"
                    className="mt-5"
                    onChange={(event) => {
                      // Update the state
                      setImage(event.target.files[0]);
                    }}
                  />

                  <button
                    className="login__form--submit my-5"
                    onClick={(e) => {
                      e.preventDefault();
                      if (image) {
                        const formData = new FormData();
                        // console.log(image);
                        formData.append("photo", image);
                        dispatch(addImage(formData));
                      }
                      dispatch(
                        update(
                          user,
                          email,
                          name,
                          newPassword,
                          confirmNewPassword,
                          password,
                          buildingNumber,
                          street,
                          city
                        )
                      );
                    }}
                  >
                    Update
                  </button>
                </form>
              ) : (
                <div className="order--tracker">
                  <div class="div-table">
                    <div class="trow">
                      <div class="tcolumn tcolumn1">ORDER #</div>
                      <div class="tcolumn tcolumn2">STATUS</div>

                      <div class="tcolumn tcolumn6">WARRANTY</div>
                    </div>
                    {orders.map((e) => (
                      <div class="trow">
                        <div class="tcolumn">
                          <Link to={`/order/${e._id}`}>{e._id}</Link>
                        </div>
                        <div class="tcolumn">IN ROUTE</div>

                        <div class="tcolumn">No</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
