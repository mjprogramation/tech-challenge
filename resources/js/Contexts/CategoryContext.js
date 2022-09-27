import React from "react";


export const CategoryContext = React.createContext()

export const CategoryProvider = ( { children } ) => {


    const [categories, setCategories] = React.useState(false)

    return (
        <CategoryContext.Provider value={{  
            categories
        }}>
            { children }
        </CategoryContext.Provider>
    )
}