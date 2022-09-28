import React from "react";
import AddCategoryForm from "../Components/AddCategoryForm";
import Header from "../Components/Header";
import { CategoryContext } from "../Contexts/CategoryContext";

export default function Categories () {

    const { categories } = React.useContext(CategoryContext)
    const [add, setAdd] = React.useState(false)

    const toggle = () => setAdd(!add)


    return (
        <div className="flex flex-col">
            <Header title={"Categories"} />
            { add && <AddCategoryForm close={toggle} />}
            <div className="flex">
                <button onClick={toggle} className="text-gray-500 text-sm hover:underline">
                    Create a new category
                </button>
            </div>
            <div className="flex flex-col gap-1">
                {
                    categories.map((category) => (
                        <div key={category.id} className="p-2">
                            { category.name }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}