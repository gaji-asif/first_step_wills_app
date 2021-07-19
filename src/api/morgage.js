import { Config } from '../config/index'
import httpRequest from '../utilities/request'
import auth from '../utilities/auth'

const base_url = Config.base_url

/**
 * Method: POST
 * @param {*is function that return reponse data or err in promise} callback
 */

export const morgageService = async (morgageInputs, callback) => {

    try {
        const userDetails = await auth.getUserDetails('userDetails')

        const url = base_url + '/morgage_details'

        const body = {
            "morgage_details": morgageInputs
        }

        console.log('body', body);

        const response = await httpRequest.post(url, true, userDetails.token, body)
        console.log('MORGAGE_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('MORGAGE_ERROR--->', error.response)
        callback(null, error.response)
    }
}
