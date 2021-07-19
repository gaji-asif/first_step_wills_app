import { Config } from '../config/index'
import httpRequest from '../utilities/request'
import auth from '../utilities/auth'

const base_url = Config.base_url

/**
 * Method: POST
 * @param {*is function that return reponse data or err in promise} callback
 */

export const postDealCodeService = async (dealNo, callback) => {

    try {
        const userDetails = await auth.getUserDetails('userDetails')

        const url = base_url + '/get_access_code/' + userDetails.id

        const body = {
            deal_no: dealNo,
        }

        const response = await httpRequest.post(url, true, userDetails.token, body)
        console.log('POST_ACCESS_CODE_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('POST_ACCESS_CODE_ERROR--->', error.response)
        callback(null, error.response)
    }
}

/**
 * Method: GET
 * @param {*is function that return reponse data or err in promise} callback
 */

export const getDealCodeService = async (callback) => {

    try {
        const userDetails = await auth.getUserDetails('userDetails')

        const url = base_url + '/acess_codes_exist/' + userDetails.id


        const response = await httpRequest.get(url, true, userDetails.token)
        console.log('GET_ACCESS_CODE_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('GET_ACCESS_CODE_ERROR--->', error.response)
        callback(null, error.response)
    }
}
