import React from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Categories from "./Routes/Categories";

import Products from './Routes/Products'


const App = () => {


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Products/>} />
                <Route path="categories" exact element={<Categories/>}/>
            </Routes>
        </BrowserRouter>
    )
}


const rootContainer = createRoot(document.querySelector("#app"))
rootContainer.render(<App/>)