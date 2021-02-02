import React from "react";
import { LinkContainer } from "react-router-bootstrap";
// import { BiCartAlt } from "react-icons/bi";

const Menu = (props) => {
  // console.log(props.clicked);
  const display = `props.clicked?"block" : "none"`;
  return (
    <div
      className="info--menu"
      style={{ display: `${props.clicked ? "block" : "none"}` }}
    >
      <ul></ul>
    </div>
  );
};

export default Menu;

// <div className="social">
// <ul>
//   <li>
//     <i class="fab fa-facebook-f"></i>
//   </li>
//   <li>
//     <i class="fab fa-twitter"></i>
//   </li>
//   <li>
//     <i class="fab fa-instagram"></i>{" "}
//   </li>
// </ul>
// </div>

// <Col className="language">
{
  /* <i class="fas fa-globe-americas"></i> */
}
// </Col>
