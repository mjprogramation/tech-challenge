import React from "react";
import { createRoot } from "react-dom/client"

const App = () => {


    return(
        <div className="">
            APP
        </div>
    )
}


const rootContainer = createRoot(document.querySelector("#app"))
rootContainer.render(<App/>)