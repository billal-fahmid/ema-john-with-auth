import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
 
    console.log(cart)
    let total = 0;
    let shipping =0;
    let quantity = 0;

    for(const product of cart){
        // console.log(product.price)
        // product.quantity = product.quantity || 1;
        total =total+product.price * product.quantity;
        shipping = shipping+ product.shipping;
        quantity = quantity + product.quantity;
        // console.log(quantity)
    }
    const tax = (total*7)/100;
    const gandTotal = total+ shipping+ tax;
    console.log(quantity)
    return (
        <div className='cart'>
            <h4>Oder Summary </h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${gandTotal}</h6>
        </div>
    );
};

export default Cart;