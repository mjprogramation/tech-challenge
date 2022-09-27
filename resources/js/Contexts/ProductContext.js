import React from "react";
import Request from '../Request/Request'


export const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = React.useState(false)

    const getAllProductsAsync = async () => {

        const request = new Request('products')
        try {
            const { data } = await request.get()

            setProducts(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getAllProductsAsync()
    }, [])

    return (
        <ProductContext.Provider value={{
            products
        }}>
            { children }
        </ProductContext.Provider>
    )
}