import React from "react";
import AddProductForm from "../Components/AddProductForm";
import Header from "../Components/Header";
import { ProductContext } from "../Contexts/ProductContext";
import { CategoryProvider } from "../Contexts/CategoryContext"
import SingleProduct from "../Components/SingleProduct";
import Filter from "../Components/Filter";

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
            <CategoryProvider>
                { add && 
                    <AddProductForm close={toggle} />
                }
                <Filter/>
            </CategoryProvider> 
            <div className="flex flex-col">
                {
                    products.map((product) => (
                        <SingleProduct key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}