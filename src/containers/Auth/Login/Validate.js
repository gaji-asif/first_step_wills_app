import Toast from 'react-native-simple-toast'
import { isEmpty, validateEmail } from '../../../utilities/ui'

export const validateLogin = (email, password) => {
    if (isEmpty(email)) {
        Toast.show('Please enter your email')
        return false

    } else if (!validateEmail(email.trim())) {
        Toast.show('Please enter a valid email')
        return false

    } else if (isEmpty(password)) {
        Toast.show('Please enter your password')
        return false

    } else {
        return true
    }
}