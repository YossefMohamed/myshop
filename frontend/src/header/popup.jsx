import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./popup.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.popUpRef = React.createRef();
  }

  componentDidMount() {
    let clicked = 0;
    // console.log(this.props);
    document.addEventListener("click", (event) => {
     if(!!this.popUpRef.current){ if (
        !this.popUpRef.current.contains(event.target) &&
        this.props.display.display &&
        !(event.target.className === this.props.className)
      ) {
        this.props.clickMe();
      }}
    });
  }

  render() {
    const display = this.props.display.display === true ? "" : "none";
    return (
      <div className="popup__container" ref={this.popUpRef}>
        {/* {console.log(this.props.cartItems)} */}

        <div className="popup" style={{ display }}>
          <div
            className="media__close--icon"
            onClick={() => this.props.clickMe()}
          >
            <i className="fas fa-times"></i>
          </div>

          <div className="cartItems__popup">
            {this.props.cartItems.length !== 0 ? (
              this.props.cartItems.map((item, indx) => (
                <div className="cart-item" key={indx}>
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <span className="name">{item.name}</span>
                    <span className="price">
                      {item.qty} {item.qty ? "x" : ""} ${item.price}
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
          <button onClick={this.props.clickMe}>
            <Link to={`/${this.props.linkTo}`} className="button-container">
              {this.props.type}
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
