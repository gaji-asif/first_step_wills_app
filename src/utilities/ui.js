/**
 * check if input is empty
 * @param {*} string
 */
export const isEmpty = str => {
    if (str.trim().length) {
        return false
    }

    return true
}


/**
 * validate email
 * @param {*} email
 */
export const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}