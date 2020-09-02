import React from 'react';

const Item = (props) => {
    const {name,quantity,img,key}=props.product;
    return (
        <div className="product">
             <div style={{height:'80px',diplay:'flex'}}>
                <img src={img} alt="" srcset=""/>
            </div>
            <div >
                <h3 className="product-name">{name}</h3>
                <h4>Quantity:{quantity}</h4>
                <button className="btn" onClick={()=>props.removeProduct(key)}>Remove</button>
            </div>
        </div>
    );
};

export default Item;