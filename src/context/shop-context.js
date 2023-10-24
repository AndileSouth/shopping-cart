import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../components/Products';

export const ShopContext = createContext(null);

const getDefualtCart = () => {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }

        return cart;
    }

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefualtCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        //this is how you loop through an obj
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }

        }

        return totalAmount;
    }

    

    // now set a obj to contain all the logic
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};

  

  return <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
}
