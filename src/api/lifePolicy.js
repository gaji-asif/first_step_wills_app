import { Config } from '../config/index'
import httpRequest from '../utilities/request'
import auth from '../utilities/auth'

const base_url = Config.base_url

/**
 * Method: POST
 * Contact Form
 * @param {* user email name} email 
 * @param {* user valid password} password 
 * @param {*is function that return reponse data or err in promise} callback
 */

export const lifePolicyService = async (lifePolicyInputs, callback) => {

    try {
        const userDetails = await auth.getUserDetails('userDetails')

        const url = base_url + '/life_policy_details'

        const body = {
            "life_policy_details": lifePolicyInputs
        }

        console.log('body', body);

        const response = await httpRequest.post(url, true, userDetails.token, body)
        console.log('LIFE_POLICY_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('LIFE_POLICY_ERROR--->', error.response)
        callback(null, error.response)
    }
}
