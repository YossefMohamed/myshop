import React from "react";
import Massage from "./../message/message"
import { Link } from "react-router-dom"
import { useDispatch , useSelector} from "react-redux";
import {Row , Col ,ListGroup , Image , Form ,Button ,Card, ListGroupItem} from "react-bootstrap"
import {  addToCart } from "../actions/cartAction";

function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split('=')[1]):1 ;
  console.log(qty)
  const  dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.cart)
  const removeFromCartHandler = (id) => {
    console.log('remove' , id)
  }
  const checkoutHandler =() => {
    props.hist.push('/login?redirect=shipping')
  }
  React.useEffect(() => {
    if(productId){
      dispatch(addToCart(productId,qty))
    }
  }, [dispatch,productId,qty])
  return (
      <Row>
        <Col md={8}>
      <h1>
        Shopping Cart
</h1>
{cartItems.length===0 ? <Massage>YourCart Is Empty<Link to="/">Go Back</Link></Massage>:(
  <ListGroup variant="flush">
    {cartItems.map(item => (
      <ListGroup.Item key={item.product}>
        <Row>
          <Col md={2}>
            <Image src={item.image} alt={item.name} fluid/>
          </Col>
          <Col md={2}>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
          </Col>
          <Col md={2}>
            ${item.price}
          </Col>
          <Col md={2}>
          <Form.Control
                            as="select"
                            onChange={(e) => dispatch(addToCart(item.product , Number(e.target.value)))}
                            size="sm"
                          >
                            {[...Array(item.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
          </Col>
        <Col md={2}>
              <Button type="button" variant='light' onClick={() => removeFromCartHandler(item.product)}>
                <i className='fas fa-trash'></i> 
              </Button>
</Col>
        </Row>
      </ListGroup.Item>
        
    ))}
  </ListGroup>
)}
        </Col>
                                <Col md={4}>
                                  <ListGroup variant='flush'>
                                  <ListGroupItem>
                                    <h2>SubTotal ({cartItems.reduce((acc , cur) => acc+cur.qty , 0)}) items</h2>
                                      ${cartItems.reduce((acc , item) => acc+item.qty*item.price , 0).toFixed(2)}
                                  </ListGroupItem>
                                  <ListGroupItem>
                                    <Button type='button' className='btn-block' disabled={cartItems.length===0}
                                    onClick={checkoutHandler}>
                                      CheckOut
                                    </Button>
                                  </ListGroupItem>
                                  </ListGroup>
                                </Col>
      
      </Row>
    );
}

export default CartScreen;
