import _ from "lodash";
import React from "react";
import { MdClose } from "react-icons/md"
import { CategoryContext } from "../Contexts/CategoryContext";
import { ProductContext } from "../Contexts/ProductContext";


export default function AddProductForm ({ close }) {


    const { categories } = React.useContext(CategoryContext)

    const { createProduct } = React.useContext(ProductContext)

    const [form, setForm] = React.useState({
        name: '',
        description: '',
        image: null,
        price: '',
        category_id: []
    })

    const onChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const onChangeSelectedCategories = ({ target }) => {
        setForm({
            ...form,
            category_id: Array.from(target.selectedOptions, v => v.value)
        })
    }


    const createProductAsync = async (event) => {
        event.preventDefault()
        await createProduct(form)
        close()
    }

    return (
        <div className="flex items-center justify-center top-0 left-0 absolute w-full h-full bg-white/50">
            <div className="bg-white rounded shadow flex flex-col w-1/2">
                <div className="p-3 bg-gray-100 rounded-t flex items-center justify-between">
                    Add product
                    <MdClose onClick={close} className="text-gray-600 cursor-pointer"/>
                </div>
                <form onSubmit={createProductAsync} className="flex flex-col p-2 gap-1" >
                    <label className="text-xs text-gray-500">Name</label>
                    <input 
                        required
                        name="name"
                        onChange={onChange}
                        value={form.name} 
                        type={"text"}
                        placeholder="Product name"
                        className="p-2 border-0 focus:ring-0 bg-gray-100"
                        />
                    <label className="text-xs text-gray-500">Description</label>
                    <input  
                        name="description"
                        onChange={onChange}
                        value={form.description} 
                        type={"text"}
                        required
                        placeholder="Product description"
                        className="p-2 border-0 focus:ring-0 bg-gray-100"
                        />
                    <label className="text-xs text-gray-500">Sale Price</label>
                    <input 
                        name="price"
                        onChange={onChange}
                        value={form.price}  
                        step={1}
                        required
                        type={"number"}
                        placeholder="Product price"
                        className="p-2 border-0 focus:ring-0 bg-gray-100"
                        />
                    <label className="text-xs text-gray-500">featured image</label>
                    <div className="h-[5rem] bg-gray-100 rounded flex items-center justify-center text-gray-500">
                        Upload Image
                    </div>
                    <label className="text-xs text-gray-500">Product category</label>
                    <select required multiple={true} onChange={onChangeSelectedCategories} className="p-2 border-0 focus:ring-0 bg-gray-100">
                        <option disabled value={""}>Choose</option>
                        {
                            categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                        }
                    </select>
                    <div className="flex justify-end">
                        <button className="px-4 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}