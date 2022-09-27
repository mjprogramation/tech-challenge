import React from "react";
import Request from "../Request/Request";


export const CategoryContext = React.createContext()

export const CategoryProvider = ( { children } ) => {


    const [categories, setCategories] = React.useState(false)

    const getCategoriesAsync = async () => {
        const request = new Request('categories')
        try {
            const { data } = await request.get()
            setCategories(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(()=> {
        getCategoriesAsync()
    }, [])


    return (
        <CategoryContext.Provider value={{  
            categories
        }}>
            { children }
        </CategoryContext.Provider>
    )
}