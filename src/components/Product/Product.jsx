import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, category, price, img, seller, stock, quantity, shipping, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Menufacturer: {seller}</p>
                <p>Ratting : {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;