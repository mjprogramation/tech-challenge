import React from "react";

export default function Loading ({ text = "Loading ..." }) {



    return (
        <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center text-gray-500 text-xl bg-white">
            { text }
        </div>
    )
}