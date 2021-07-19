import { Config } from '../config/index'
import httpRequest from '../utilities/request'
import auth from '../utilities/auth'

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*is function that return reponse data or err in promise} callback
 */

export const getArticleService = async (callback) => {

    try {
        const userDetails = await auth.getUserDetails('userDetails')

        console.log('userDetails', userDetails);

        const url = base_url + '/get_article_by_user/' + userDetails.id

        const response = await httpRequest.get(url, true, userDetails.token, null)
        console.log('GET_ARTICLE_SUCCESS--->', response)
        callback(response, null)

    } catch (error) {
        console.log('GET_ARTICLE_ERROR--->', error.response)
        callback(null, error.response)
    }
}
