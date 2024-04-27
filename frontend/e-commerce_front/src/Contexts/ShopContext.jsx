import React, { createContext } from "react";
import allproduct from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;