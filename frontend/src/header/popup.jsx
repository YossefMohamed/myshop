import { FaReact } from "react-icons/fa";

import React, { Component } from "react";

export default class Popup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    console.log(this.props.display.display);
    const display = this.props.display.display === true ? "block" : "none";
    console.log(display);
    return <div className="popup" style={{ display }}></div>;
  }
}
