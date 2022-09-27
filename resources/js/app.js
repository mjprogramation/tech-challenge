import React from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout";
import { ProductProvider } from "./Contexts/ProductContext";
import Categories from "./Routes/Categories";

import Products from './Routes/Products'


const App = () => {


    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" exact element={
                        <ProductProvider>
                            <Products/>
                        </ProductProvider>
                    } />
                    <Route path="categories" exact element={<Categories/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}


const rootContainer = createRoot(document.querySelector("#app"))
rootContainer.render(<App/>)