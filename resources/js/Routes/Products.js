import React from "react";
import AddProductForm from "../Components/AddProductForm";
import Header from "../Components/Header";
import { ProductContext } from "../Contexts/ProductContext";
import { CategoryProvider } from "../Contexts/CategoryContext"

export default function Products () {

    const { products } = React.useContext(ProductContext)

    const [add, setAdd] = React.useState(false)

    const toggle = () => setAdd(!add)


    return (
        <div className="flex flex-col">
            <Header title={"Products"} />
            <div className="flex">
                <button onClick={toggle} className="text-gray-500 text-sm hover:underline">
                    Create a new product
                </button>
            </div>
            { add && 
            <CategoryProvider>
                <AddProductForm close={toggle} />
            </CategoryProvider> }

            <div className="flex flex-col">
                {
                    products.map((product) => (
                        <div key={product.id} className="p-2 flex items-center">
                            { product.name }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}