import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div className="mt-5">
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

export default Loader;
