import React from "react";
import { Link } from 'react-router-dom'


export default function Layout ({ children }) {



    return(
        <div className="flex h-full w-full">
            <div className="flex flex-col p-2 shadow h-full bg-gray-100 text-gray-500 w-[13rem]">
                <span className="font-bold text-sm">
                    Navigation
                </span>
                <div className="flex flex-col p-2 gap-1 text-sm">
                    <Link to={"/"} className="text-gray-600 hover:text-gray-500">
                        Products
                    </Link>
                    <Link to={"categories"} className="text-gray-600 hover:text-gray-500">
                        Categories
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-full h-full overflow-auto relative container mx-auto">
                { children }
            </div>
        </div>
    )
}