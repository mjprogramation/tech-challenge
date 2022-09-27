import _ from "lodash"

export default class Prepare {


    static getBase(resource) {
        return "/api/" + resource
    }

    /**
     * Get prepared url for request
     * 
     * @param {uri} resource 
     * @param {object} params 
     * @returns String
     */
    static getUri (resource, params) {
        let url = process.env.URL + resource
        return url + this.strignifyParams(params)
    } 


    /**
     * return params object as url query string
     * 
     * @param {object} params 
     * @returns 
     */
    static strignifyParams (params) {
        
        if(_.isEmpty(params)) {
            return ""
        }
        if(typeof params === "string" || typeof params === "number"){
            return "/" + params
        }
        let paramsString = '/?withparams'
        for(const param in params) {
            paramsString += `&${param}=${params[param]}`
        }
        return paramsString
    }
}
