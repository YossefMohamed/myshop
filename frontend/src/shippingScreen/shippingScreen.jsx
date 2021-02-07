import React from "react";

import "./shipping.css";

function ShippingScreen() {
  return (
    <div className="shipping__container">
      <div className="container px-1 px-md-4 py-1 mx-auto">
        <div className="card">
          <div className="row d-flex justify-content-between px-3 top">
            <div className="d-flex">
              <h5>
                ORDER{" "}
                <span className="text-primary font-weight-bold">#Y34XDHR</span>
              </h5>
            </div>
            <div className="d-flex flex-column text-sm-right">
              <p className="mb-0">
                Expected Arrival <span>01/12/19</span>
              </p>
              <p>
                USPS{" "}
                <span className="font-weight-bold">234094567242423422898</span>
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <ul id="progressbar" className="text-center">
                <li className="active step0"></li>
                <li className="active step0"></li>
                <li className="active step0"></li>
                <li className="step0"></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-between top">
            <div className="row d-flex icon-content">
              {" "}
              <img className="icon" src="https://i.imgur.com/9nnc9Et.png" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order
                  <br />
                  Processed
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              {" "}
              <img className="icon" src="https://i.imgur.com/u1AzR7w.png" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order
                  <br />
                  Shipped
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              {" "}
              <img className="icon" src="https://i.imgur.com/TkPm63y.png" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order
                  <br />
                  Comming
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              {" "}
              <img className="icon" src="https://i.imgur.com/HdsziHP.png" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order
                  <br />
                  Arrived
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingScreen;
