import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const Productdetail = () => {
    const{productkey} = useParams();
    const product = fakeData.find(pd=>pd.key===productkey);
    console.log(product);
    return (
        <div>
           <Product showBtn={false} product={product}></Product>
        </div>
    );
};

export default Productdetail;