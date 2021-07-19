import { Config } from '../config/index'
import httpRequest from '../utilities/request'
import auth from '../utilities/auth'

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*is function that return reponse data or err in promise} callback
 */

export const getFaqService = async (callback) => {

    try {
        const userDetails = await auth.getUserDetails('userDetails')

        const url = base_url + '/get_faq'

        const response = await httpRequest.get(url, true, userDetails.token, null)
        console.log('GET_FAQ_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('GET_FAQ_ERROR--->', error.response)
        callback(null, error.response)
    }
}
