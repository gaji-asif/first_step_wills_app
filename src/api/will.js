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

export const myWillFormService = async (willOb, callback) => {

    try {
        const userDetails = await auth.getUserDetails('userDetails')

        const url = base_url + '/my_wills'

        const body = {
            user_id: userDetails.id,
            will_type: willOb.willType,
            storage_no: willOb.storageNo,
            will_type_1: willOb.willType2,
            storage_no_1: willOb.storageNo2,
            upload_copy_url: willOb.uploadCopy
        }

        const response = await httpRequest.post(url, true, userDetails.token, body)
        console.log('MY_WILL_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('MY_WILL_ERROR--->', error.response)
        callback(null, error.response)
    }
}
