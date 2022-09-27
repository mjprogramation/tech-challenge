import axios from "axios";
import Prepare from "./Prepare";
import RequestError from "./RequestError"


/**
 * Minimal request class
 */

export default class Request {

    constructor(
        resource
    ) {
        this.resource = resource
        this.cancelToken = false
    }


    makeRequest() {
        this.isCancellable()
        return axios.create({
            baseURL: Prepare.getBase(this.resource),
            headers: {
                'Accept': 'application/json'
            },  
            cancelToken: this.cancelToken.token
        })
    }

    isCancellable() {
        if (this.cancelToken) {
            this.cancelToken.cancel()
        }
        this.cancelToken = axios.CancelToken.source()
    }



    async get(params = "") {
        try {
            return await this.makeRequest().get(Prepare.strignifyParams(params))
        } catch (error) {
            throw new RequestError(error)
        }
    }

    async post(playload = {}) {
        try {
            return await this.makeRequest().post("", playload)
        } catch (error) {
            throw new RequestError(error)
        }
    }

    async update(params, playload = {}) {
        try {
            return await this.makeRequest().put("/"+params, playload)
        } catch (error) {
            throw new RequestError(error)
        }
    }

    async delete(params) {
        try {
            return await this.makeRequest().delete("/"+params)
        } catch (error) {
            throw new RequestError(error)
        }
    }


}