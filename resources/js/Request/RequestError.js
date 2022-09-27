import axios from "axios"

export default class RequestError {




    /**
     * Construct new RequestError Class
     * 
     * @param {AxiosError} Error 
     */
    constructor(Error) {
        this.response = Error
        const { response } = Error
        this.status = response.status
        this.message = response.data?.message
        this.errors = response.data?.errors
        this.requestError = true
    }

    /**
     * check if request has been canceled
     * 
     * @returns Boolean
     */
    isCanceled() {
        return axios.isCancel(this.response)
    }


    /**
     * Get response statu code
     * 
     * @returns number
     */
    getStatus() {
        return this.status || 500
    }


    /**
     * Get request custom error message
     * 
     * @returns String
     */
    getMessage() {
        return this.message || "Unknown Error"
    }


    /**
     * Get current request form errors (POST,PUT only)
     * 
     * @returns Array
     */
    getFormErrors() {
        return this.errors || { }
    }



}