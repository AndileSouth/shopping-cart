import React from 'react';
import "./shop.css";
import { PRODUCTS } from '../../components/Products';
import Product from '../../components/Product';

export const SHOP = () => {
  return (
    <div className='SHOP'>

      <div className="shopTitle">
        <h1>Tech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  )
}
