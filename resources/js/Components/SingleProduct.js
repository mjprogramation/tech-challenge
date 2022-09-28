import React from "react";


export default function SingleProduct ({ product })  {

    const productImage = product.image ? product.image : '/assets/default.svg'

    return (
        <div className="flex items-center border-b p-2">
            <div className="px-5">
                # { product.id }
            </div>
            <div className="w-16 h-16 overflow-hidden rounded-full shadow-xl">
                <img src={ productImage } className="h-full w-full" height={100} width={100}/>
            </div>
            <div className="flex flex-col w-1/6 px-4">
                <span className="text-gray-400 font-bold text-sm">
                    Product name
                </span>
                <span className="text-sky-700">
                    { product.name }
                </span>
            </div>
            <div className="flex flex-col w-1/6 px-4">
                <span className="text-gray-400 font-bold text-sm">
                    Product description
                </span>
                <span className="text-black text-sm">
                    { product.description }
                </span>
            </div>
            <div className="flex flex-col w-1/6 px-4">
                <span className="text-gray-400 font-bold text-sm">
                    Price
                </span>
                <span className="text-emerald-500 text-sm">
                   ${ product.price.toFixed(2) }
                </span>
            </div>
            <div className="flex flex-col px-4">
                <span className="text-gray-400 font-bold text-sm">
                    Product categories
                </span>
                <div className="text-gray-500 flex gap-2">
                    { product.categories.map(category => <span key={category.id} className="px-2 py-1 rounded-full bg-gray-100 sahdow text-xs">{ category.name }</span>) }
                </div>
            </div>
        </div>
    )
}