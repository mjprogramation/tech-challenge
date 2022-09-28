import React from "react";
import { toast } from "react-toastify";
import Request from "../Request/Request";


export default function UploadImage ({ setImage }) {

    const fileRef = React.useRef()
    const triggerFileBrowser = () => fileRef.current.click()

    const onChangeFile = async ({ target }) => {
        const file = target.files[0]
        if(!validate(file)) {
            return
        }

        try {
            const request = new Request('image/product')
            const formData = new FormData
            formData.append('image', file)
            const { data } = await request.post(formData)
            setImage(data)
        } catch (error) {
            toast.error(error.getMessage())
        }

    }

    const validate = (file) => {
        if(!file){
            toast.error("Séléctionner une image")
            return false
        }

        

        if(file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
            toast.error("Image doit etre PNG | JPG ou JPEG")
            return false
        }

        return true
    }

    return (
        <div className="">
            <input ref={fileRef} onChange={onChangeFile} type={"file"} className="hidden"/>
            <div onClick={triggerFileBrowser} className="h-[5rem] hover:bg-gray-50 cursor-pointer bg-gray-100 rounded flex items-center justify-center text-gray-500">
                Choose image
            </div>
        </div>
    )
}