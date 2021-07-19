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

export const contactFormService = async (serviceId, message, callback) => {

    try {
        const userDetails = await auth.getUserDetails('userDetails')

        const url = base_url + '/contact_form'

        const body = { 
            user_id: userDetails.id,
            service_id: serviceId,
            message
          }

        const response = await httpRequest.post(url, true, userDetails.token, body)
        console.log('CONTACT_FORM_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('CONTACT_FORM_ERROR--->', error.response)
        callback(null, error.response)
    }
}
