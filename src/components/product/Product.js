import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';

const Product = (props) => {
    const product = props.product
    // console.log(product.key);
    const {name,img,seller,price,stock,key} = product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset=""/>
            </div>
            <div style={{marginLeft:'10px'}}>
                <h4 className="product-name"><Link to={'/product/'+key}>{name}</Link></h4>
                <p><small>By : {seller}</small></p>
                <p>Price:${price}</p>
                <p>Only left in {stock } available.Order Soon!</p>
                <br/>
               {props.showBtn && <button class="btn" onClick={()=> props.cartHandler(product) }>Add to cart</button>}
            </div>
            
        </div>
    );
};

export default Product;