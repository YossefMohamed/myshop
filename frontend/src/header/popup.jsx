import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./popup.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.popUpRef = React.createRef();
  }
  // componentDidMount() {
  //   let clicked = 0;
  //   document.addEventListener("click", (event) => {
  //     if (!this.popUpRef.current.contains(event.target)) {
  //       if (clicked === 0) {
  //         clicked++;
  //       } else {
  //         this.props.clickMe("bag");
  //         clicked = 0;
  //       }
  //     }
  //   });
  // }

  render() {
    const display = this.props.display.display === true ? "block" : "none";
    return (
      <div className="popup__container" ref={this.popUpRef}>
        <div className="popup" style={{ display }}>
          <div className="cartItems__popup">
            {this.props.cartItems || this.props.cartItems.length === 0 ? (
              this.props.cartItems.map((item, indx) => (
                <div className="cart-item" key={indx}>
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
          <Link to={`/${this.props.linkTo}`}>
            <button>{this.props.type}</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Popup;
