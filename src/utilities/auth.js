import AsyncStorage from '@react-native-community/async-storage'



const USER_DETAILS = 'userDetails'

const parse = JSON.parse
const stringify = JSON.stringify



const auth = {

    /**
     * Set data in storage
     * @param {String|Object}  value    The data to store
     * @param {String}  key
     */
    async set(key, value) {
        if (!value) {
            return null
        }
        try {
            await AsyncStorage.setItem(key, stringify(value))
        } catch (error) {
            return null
        }
        return null
    },

    setUserDetails(userDetails = USER_DETAILS, value = {}) {
        return auth.set(userDetails, value).then(res => res)
    },




    /**
     * Returns data from storage
     * @param  {String} key Item to get from the storage
     * @return {String|Object}     Data from the storage
     */
    async get(key) {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value) {
                return parse(value) || null
            }
        } catch (error) {
            return null
        }
        return null
    },

    getUserDetails(userDetails = USER_DETAILS) {
        return auth.get(userDetails).then(res => res).catch(err => err)
    },





    /**
     * Remove an item from the used storage
     * @param  {String} key [description]
     */
    async clear(key) {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value) {
                await AsyncStorage.removeItem(key)


                return true
            }
        } catch (error) {
            return false
        }
        return null
    },

    /**
     * Clear all app storage
     */
    async clearAppStorage() {
        await AsyncStorage.clear()
    },

    clearUserDetails(userDetails = USER_DETAILS) {
        return auth.clear(userDetails)
    },

}

export default auth
