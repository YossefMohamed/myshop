// import React from "react";
// import Massage from "../message/message";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Row,
//   Col,
//   ListGroup,
//   Image,
//   Form,
//   Button,
//   Card,
//   ListGroupItem,
// } from "react-bootstrap";
// import { addToCart, removeFromCart } from "../actions/cartAction";

// function CartScreen(props) {
//   const productId = props.match.params.id;
//   const qty = props.location.search
//     ? Number(props.location.search.split("=")[1])
//     : 1;
//   console.log(qty);
//   const dispatch = useDispatch();
//   const { cartItems } = useSelector((state) => state.cart);
//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };
//   const checkoutHandler = () => {
//     props.history.push("/signin?redirect=shipping");
//   };
//   React.useEffect(() => {
//     if (productId) {
//       dispatch(addToCart(productId, qty));
//     }
//   }, [dispatch, productId, qty]);
//   return (
//     <Row>
//       <Col md={8}>
//         <h1>Shopping Cart</h1>
//         {cartItems.length === 0 ? (
//           <Massage>
//             YourCart Is Empty<Link to="/">Go Back</Link>
//           </Massage>
//         ) : (
//           <ListGroup variant="flush">
//             {cartItems.map((item) => (
//               <ListGroup.Item key={item.product}>
//                 <Row>
//                   <Col md={2}>
//                     <Image src={item.image} alt={item.name} fluid />
//                   </Col>
//                   <Col md={2}>
//                     <Link to={`/product/${item.product}`}>{item.name}</Link>
//                   </Col>
//                   <Col md={2}>${item.price}</Col>
//                   <Col md={2}>
//                     <Form.Control
//                       as="select"
//                       onChange={(e) =>
//                         dispatch(
//                           addToCart(item.product, Number(e.target.value))
//                         )
//                       }
//                       value={item.qty}
//                       size="sm"
//                     >
//                       {[...Array(item.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </option>
//                       ))}
//                     </Form.Control>
//                   </Col>
//                   <Col md={2}>
//                     <Button
//                       type="button"
//                       variant="light"
//                       onClick={() => removeFromCartHandler(item.product)}
//                     >
//                       <i className="fas fa-trash"></i>
//                     </Button>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         )}
//       </Col>
//       <Col md={4}>
//         <ListGroup>
//           <ListGroupItem>
//             <h2>
//               SubTotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)})
//               items
//             </h2>
//             $
//             {cartItems
//               .reduce((acc, item) => acc + item.qty * item.price, 0)
//               .toFixed(2)}
//           </ListGroupItem>
//           <ListGroupItem>
//             <Button
//               type="button"
//               className="btn-block"
//               disabled={cartItems.length === 0}
//               onClick={checkoutHandler}
//             >
//               CheckOut
//             </Button>
//           </ListGroupItem>
//         </ListGroup>
//       </Col>
//     </Row>
//   );
// }

// export default CartScreen;

import React from "react";
import { Row } from "react-bootstrap";
// import { CartContext } from '../../contexts/CartContext';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
// import Message from "../message/message";
import CartItem from "./cartItem";

// import CartItem from './CartItem';

const CartScreen = (props) => {
  const productId = props.match.params.id;

  const { cartItems } = useSelector((state) => state.cart);

  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  console.log(cartItems.length === 0);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="col-md-3 col-12 p-3 m-auto">
          {<div className="p-3 text-center text-muted">Your cart is empty</div>}

          <div className="p-3 text-center text-success">
            <p>Checkout successfull</p>
            <a href="/" className="btn btn-outline-success btn-sm">
              BUY MORE
            </a>
          </div>
        </div>
      ) : (
        <div>
          <Row noGutters>
            <div className="card card-body border-0 col-md-8 col-12">
              {cartItems.map((product) => (
                <CartItem key={product.product} product={product} />
              ))}
            </div>

            <div className="col-md-4 col-12 p-3">
              <div className="card card-body">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">
                  {cartItems.reduce((acc, cur) => acc + cur.qty, 0)}
                  {` items`}
                </h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}{" "}
                  $
                </h3>
                <hr className="my-4" />
                <div className="text-center">
                  <button type="button" className="btn btn-primary mb-2">
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={dispatch({ type: "CART_RESET" })}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          </Row>
        </div>
      )}
    </>
  );
};

export default CartScreen;
