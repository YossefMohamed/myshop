import { set } from "mongoose";
import React from "react";
import { Alert } from "react-bootstrap";

function Message(props) {
  const [hide, setHide] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      console.log(props.children);
      if (
        props.children === "Please Fill All the Fields !!" ||
        props.children === "Password And Password Confirmation is Not Equal !"
      )
        setHide(true);
    }, 3000);
  });

  return (
    <div className={`m-auto ${hide ? "d-none" : ""}`}>
      <Alert variant="danger">
        <p>{props.children}</p>
      </Alert>
    </div>
  );
}

Message.defaultProps = {
  variant: "info",
};
export default Message;
