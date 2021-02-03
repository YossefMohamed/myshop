import React, { useContext } from 'react';
import {useDispatch} from "react-redux"
import { addToCart, removeFromCart } from "../actions/cartAction";
import products from '../products';
// import products from '../products';

const CartItem = ({product}) => {
    console.log(product)
    const dispatch = useDispatch()
    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={product.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: {(product.price)}$ </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <p className="mb-0">Qty: {product.qty}</p>
            </div>
            <div className="col-sm-4 p-2 text-right ">
                 <button 
                 onClick={() => {if(!(product.qty===product.countInStock)){
                    dispatch(addToCart(product.product, product.qty+1))
                 }}
                 }
                 className="btn btn-primary btn-sm mr-2 mb-1">
                     +
                 </button>

                 
                     <button
                 onClick={() => {if(product.qty===1){
                    dispatch(removeFromCart(product.product));
                }else{
                    dispatch(addToCart(product.product, product.qty-1))
                }}}
                    className="btn btn-danger btn-sm mb-1" >
-
                    </button>
                 

                 
            </div>
        </div>
     );
}
 
export default CartItem;