import { Config } from '../config/index'
import httpRequest from '../utilities/request'
import auth from '../utilities/auth'

const base_url = Config.base_url

/**
 * Method: POST
 * Login
 * @param {* user email name} email 
 * @param {* user valid password} password 
 * @param {*is function that return reponse data or err in promise} callback
 */

export const loginService = async (email, password, callback) => {

    try {
        const url = base_url + '/login'
        const body = {
            email,
            password,
        }

        const response = await httpRequest.post(url, false, null, body)
        await auth.setUserDetails('userDetails', response.data.data)
        console.log('LOGIN_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('LOGIN_ERROR--->', error.response)
        callback(null, error.response)
    }
}


/**
 * Method: POST
 * Register
 * @param {* user email name} email 
 * @param {* user valid password} password 
 * @param {*is function that return reponse data or err in promise} callback
 */

export const registerService = async (regObj, callback) => {

    try {
        const url = base_url + '/new_register'
        const body = {
            first_name: regObj.firstName,
            last_name: regObj.lastName,
            email: regObj.email,
            mobile: regObj.mobile,
            password: regObj.password,
        }

        const response = await httpRequest.post(url, false, null, body)
        console.log('REGISTER_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('REGISTER_ERROR--->', error.response)
        callback(null, error.response)
    }
}



/**
 * Method: POST
 * logout 
 * @param {*is function that return reponse data or err in promise} callback
 */

export const logoutService = async (callback) => {


    try {
        await auth.clearAppStorage()
        // const userInfo = await auth.clearAppStorage()
        // const token = userInfo.token

        // const api = base_url + '/auth/logout'

        // const response = await httpRequest.post(api, true, token, {})
        // console.log('LOGOUT_SUCCESS--->', response)
        // callback(response, null)

    } catch (error) {
        // callback(null, error.response)
        console.log('LOGOUT_ERROR--->', error)
    }
}