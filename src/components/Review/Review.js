import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import Item from '../item/Item';

const Review = () => {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
         const productkeys = Object.keys(savedCart);
         const productValues = Object.values(savedCart);

         const cartProducts = productkeys.map((ky)=> {
             const product = fakeData.find(pd => pd.key === ky);
             product.quantity = savedCart[ky]
             return product;

         });
        setCart(cartProducts);
    })
    return (
        <div>
           {
               cart.map(product=> <Item product = {product}></Item>)
           }
        </div>
    );
};

export default Review;