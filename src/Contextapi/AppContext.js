import React, { useState, createContext } from "react";
import { CartAddRemove, NewCartAdd } from "../Utility/Cart";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [CartData, SetCartData] = useState([]);


    // const RemoveCart = ()=>{
    //     const data = RemoveAllDataFromCart()
    //     SetCartData(data)
    // }
    // const RemoveOneElementFromCart = async (id, type, did) =>{
    //     const data = await RemoveOneDataFromCart(id, type, did);
    //     SetCartData(data)
    // }



    const cartTotalUpdate = (data)=>{
        SetCartData(data);
    }


    // New ADD && REMOVE
    const PlusMinusHanlder = async(name, image, price, id, action) =>{
        const data = await CartAddRemove(name, image, price, id, action);
        SetCartData(data);
    }


    // New Cart

    const addCart = async (name,product_image,attribute_id,quantity, price, id, action) =>{

        const data = await NewCartAdd(name,product_image,attribute_id,quantity, price, id, action)
        SetCartData(data);

    }

    const value ={
        CartData,
        // RemoveCart,
        // RemoveOneElementFromCart,
        SetCartData,
        cartTotalUpdate,
        PlusMinusHanlder,
        addCart

    }

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );

};

export default CartProvider