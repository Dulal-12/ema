import React from 'react';
import './Product.css';

const Product = (props) => {
    const product = props.product
    const {name,img,seller,price,stock} = product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset=""/>
            </div>
            <div style={{marginLeft:'10px'}}>
                <h4 className="product-name">{name}</h4>
                <p><small>By : {seller}</small></p>
                <p>Price:${price}</p>
                <p>Only left in {stock } available.Order Soon!</p>
                <br/>
                <button class="btn" onClick={()=> props.cartHandler(product) }>Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;