import Toast from 'react-native-simple-toast'
import { isEmpty, validateEmail } from '../../utilities/ui'

export const validateContact = (email, message) => {
    if (isEmpty(email)) {
        Toast.show('Please enter your email')
        return false

    } else if (!validateEmail(email.trim())) {
        Toast.show('Please enter a valid email')
        return false

    } else if (isEmpty(message)) {
        Toast.show('Please enter your message')
        return false

    } else {
        return true
    }
}