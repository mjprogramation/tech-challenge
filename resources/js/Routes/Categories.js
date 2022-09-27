import React from "react";
import Header from "../Components/Header";
import { CategoryContext } from "../Contexts/CategoryContext";

export default function Categories () {

    const { categories } = React.useContext(CategoryContext)

    return (
        <div className="flex flex-col">
            <Header title={"Categories"} />
            
        </div>
    )
}