import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./popup.css";

class Popup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const display = this.props.display.display === true ? "block" : "none";
    return (
      <div className="popup__container">
        <div className="popup" style={{ display }}>
          <div className="cartItems__popup">
            {console.log(this.props.cartItems)}
            {this.props.cartItems || this.props.cartItems === 0 ? (
              this.props.cartItems.map((item) => (
                <div className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <span className="name">{item.name}</span>
                    <span className="price">
                      {item.qty} x ${item.price}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty--cart">
                <p>No items !!</p>
              </div>
            )}
          </div>
          <Link to="/cart">
            <button>Cart Page</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Popup;
