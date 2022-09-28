import React from "react";
import { MdClose } from "react-icons/md"
import { CategoryContext } from "../Contexts/CategoryContext";


export default function AddCategoryForm ({ close }) {

    const { categories, createCategory } = React.useContext(CategoryContext)

    const [form, setForm] = React.useState({
        name: '',
        category_id: ''
    })

    const onChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const create = async (event) => {
        event.preventDefault()
        await createCategory(form)
        close()
    }

    return (
        <div className="flex items-center justify-center top-0 left-0 absolute w-full h-full bg-white/50">
            <div className="bg-white rounded shadow flex flex-col w-1/2">
                <div className="p-3 bg-gray-100 rounded-t flex items-center justify-between">
                    Add category
                    <MdClose onClick={close} className="text-gray-600 cursor-pointer"/>
                </div>
                <form onSubmit={create} className="flex flex-col p-2 gap-1" >
                    <label className="text-xs text-gray-500">Name</label>
                    <input 
                        name="name"
                        onChange={onChange}
                        value={form.name} 
                        type={"text"}
                        placeholder="Category Name"
                        className="p-2 border-0 focus:ring-0 bg-gray-100"
                        />
                    <label className="text-xs text-gray-500">Parent</label>
                    <select onChange={onChange} value={form.category_id} name="category_id" className="p-2 border-0 focus:ring-0 bg-gray-100">
                        <option disabled value={""}>Choose</option>
                        {
                            categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                        }
                    </select>
                    <div className="flex justify-end">
                        <button className="px-4 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded">
                            Add Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}