import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollTop(props) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [props.location]);
  return <>{props.children}</>;
}

export default withRouter(ScrollTop);
