import React from "react";
import { Alert } from "react-bootstrap";

function Massage(props) {
  return (
    <div>
      <Alert variant={props.variant}>{props.children}</Alert>
    </div>
  );
}

Massage.defaultProps = {
  variant: "info",
};
export default Massage;
