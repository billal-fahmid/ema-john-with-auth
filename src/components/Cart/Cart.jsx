import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
 
    console.log(cart)
    let total = 0;
    let shipping =0;
    
    for(const product of cart){
        // console.log(product.price)
        total =total+product.price;
        shipping = shipping+ product.shipping;
    }
    const tax = (total*7)/100;
    const gandTotal = total+ shipping+ tax;
    
    return (
        <div className='cart'>
            <h4>Oder Summary </h4>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${gandTotal}</h6>
        </div>
    );
};

export default Cart;