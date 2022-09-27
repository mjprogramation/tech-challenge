import React from "react";

export const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = React.useState(false)


    return (
        <ProductContext.Provider value={{
            products
        }}>
            { children }
        </ProductContext.Provider>
    )
}