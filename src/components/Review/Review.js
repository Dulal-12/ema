import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Item from '../item/Item';

const Review = () => {
    const [cart,setCart] = useState([]);
    
    
    useEffect(()=>{
        const savedCart = getDatabaseCart();
         const productkeys = Object.keys(savedCart);
         const cartProducts = productkeys.map((ky)=> {
         const product = fakeData.find(pd => pd.key === ky);
        
             return product;

         });

        setCart(cartProducts);
    },[])
   

    
      

    return (
         <div>
           {
               cart.map(product=> <Item product = {product} removeProduct  = {removeProduct }></Item>)
           }
        </div>
    );
    }

export default Review;