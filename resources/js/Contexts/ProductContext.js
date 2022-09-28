import React from "react";
import Loading from "../Components/Loading";
import Request from '../Request/Request'

const request = new Request('products')
export const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = React.useState(false)

    const getAllProductsAsync = async () => {

        
        try {
            const { data } = await request.get()

            setProducts(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createProduct = async (productForm) => {
        try {
            const { data } = await request.post(productForm)
            setProducts(products => {
                const newState = [ ...products ]
                newState.push(data.data)
                return newState
            })
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getAllProductsAsync()
    }, [])

    if(products === false) {
        return <Loading/>
    }


    return (
        <ProductContext.Provider value={{
            products,
            createProduct
        }}>
            { children }
        </ProductContext.Provider>
    )
}