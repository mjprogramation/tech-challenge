import React from "react"
import { HiOutlineFilter } from "react-icons/hi";
import { CategoryContext } from "../Contexts/CategoryContext";
import { ProductContext } from "../Contexts/ProductContext";


export default function Filter () {

    const { categories } = React.useContext(CategoryContext)

    const { filter, setFilter, getProducts } = React.useContext(ProductContext)
    
    const onChange = ({ target }) => {
        setFilter({
            ...filter,
            [target.name]: target.value
        })
    }

    return (
        <div className="bg-gray-100 rounded p-2 flex items-center justify-end gap-2">
            <select name="category" onChange={onChange} value={filter.category} className="text-sm p-2 border-0 focus:ring-0 bg-white rounded w-1/6">
                <option disabled value={""}>Choose category</option>
                {
                    categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                }
            </select>
            <select name="price" onChange={onChange} value={filter.price} className="text-sm p-2 border-0 focus:ring-0 bg-white rounded w-1/6">
                <option value={"desc"}>lowest first</option>
                <option value={"asc"}>highest first</option>
            </select>
            <button onClick={getProducts} className="text-sm bg-yellow-500 flex gap-1 ease-in-out duration-300 items-center text-white rounded px-4 py-1 hover:bg-yellow-600">
                Filter <HiOutlineFilter className="text-yellow-300"/>
            </button>
        </div>
    )
}