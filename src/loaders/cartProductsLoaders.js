import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoaders = async () =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();


    // if cart data is in database , you have to use async await 

    const storedCart = getShoppingCart();

    // console.log(storedCart);

    const saveCart =[];

    for( const id in storedCart){
        const addedProducts = products.find(pd => pd.id === id);
        if(addedProducts){
            const quantity = storedCart[id]
            addedProducts.quantity = quantity;
            saveCart.push(addedProducts)
        }
    }

    // console.log(products)
    return saveCart;
}

export default cartProductsLoaders ;