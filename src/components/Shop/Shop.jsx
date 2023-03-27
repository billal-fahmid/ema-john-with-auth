import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch('../../../public/products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
            console.log(products)
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>product coming here :{products.length}</h2>
            </div>
            <div className="cart-container">
                <h4>Product Sumary </h4>
            </div>
        </div>
    );
};

export default Shop;