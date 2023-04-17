import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faTrash, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart ,handleClearCart,children}) => {
 
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

            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon  icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;