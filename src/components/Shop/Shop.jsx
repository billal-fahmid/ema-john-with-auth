import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch('/products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
            // console.log(products)
    },[]);
    
    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
 
        //step 1 get id
        for(const id in storedCart){
            // step 2 get product by using the id
            const addedProduct = products.find(product =>product.id === id )
            // step 3 get the quantity of the product 
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity
            // console.log(addedProduct,quantity)
            // step 4 add the addedProduct to the saveCart
            saveCart.push(addedProduct);
           }
           
        }
        // step 5 set the cart 
        setCart(saveCart)
    },[products])

    const [cart , setCart] = useState([])
    // console.log(cart)
    const handleAddToCart=(product)=>{
        // console.log(product)
        const newCart =[...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handleAddToCart= {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;