import React from "react";
import Header from "../Components/Header";
import { ProductContext } from "../Contexts/ProductContext";

export default function Products () {

    const { products } = React.useContext(ProductContext)

    return (
        <div className="flex flex-col">
            <Header title={"Products"} />
        </div>
    )
}