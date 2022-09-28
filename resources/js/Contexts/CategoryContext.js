import React from "react";
import Loading from "../Components/Loading";
import Request from "../Request/Request";

const request = new Request('categories')
export const CategoryContext = React.createContext()

export const CategoryProvider = ( { children } ) => {


    const [categories, setCategories] = React.useState(false)

    const getCategoriesAsync = async () => {
        
        try {
            const { data } = await request.get()
            setCategories(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createCategory = async (categoryFom) => {
        try {
            const { data } = await request.post(categoryFom)
            setCategories(categories => {
                const newState = [...categories]
                newState.push(data.data)
                return newState
            })
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(()=> {
        getCategoriesAsync()
    }, [])

    /**
     * Not loaded yet!
     */
    if(categories === false) {
        return <Loading/>
    }

    return (
        <CategoryContext.Provider value={{  
            categories,
            createCategory
        }}>
            { children }
        </CategoryContext.Provider>
    )
}