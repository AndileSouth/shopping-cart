import React, { useContext } from "react";
import Product from '../../components/Product';
import { PRODUCTS } from '../../components/Products';
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import './cart.css';
import {Link} from "react-router-dom";



export const CART= () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  
  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items</h1>

        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
                return <CartItem data={product}/>
            }
          
   })}
        </div>

    {totalAmount > 0 ?
      <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <Link to={`/`}><button>Continue Shopping</button></Link>
          <button>Checkout</button>
        </div> 
        : <h1>Your cart is Empty</h1>}
       
      </div>
    </div>
  )
}
