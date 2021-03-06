import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../product/Product';
import {Link} from 'react-router-dom';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);


    const [total,setTotal] = useState([]);
    
    const cartHandler = (product)=>{
        const newTotal = [...total,product];
        setTotal(newTotal)  ;
        const sameProduct = newTotal.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key,count);
    }

    const price = parseFloat(total.reduce((total,cd)=>cd.price+total,0).toFixed(2));
   
    const totalPrice = parseFloat((price).toFixed(2));
    return (
        <div>
           <div className="shop-container">
               <div className="product-container">
                   {products.map(product =><Product product={product} showBtn={true} cartHandler={cartHandler}></Product>)}
               </div>
               <div className="card-container">
                   <h1>Order Summary</h1>
                   <p><small>Items :{total.length}</small></p>
                   <p>Price:${price}</p>
                   <p>Total Price:${totalPrice}</p>
                   
                   <Link to="/review"><button className="btn">Review your item</button></Link>
               </div>
           </div>
        </div>
    );
};

export default Shop;