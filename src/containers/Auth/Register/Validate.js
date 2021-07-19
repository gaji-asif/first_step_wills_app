import Toast from 'react-native-simple-toast'
import { isEmpty, validateEmail } from '../../../utilities/ui'

export const validateRegister = (firstName, lastName, email, password, confirmPass, checked) => {
    if (isEmpty(firstName)) {
        Toast.show('Please enter your first name')
        return false

    } else if (isEmpty(lastName)) {
        Toast.show('Please enter your last name')
        return false

    } else if (isEmpty(email)) {
        Toast.show('Please enter your email')
        return false

    } else if (!validateEmail(email.trim())) {
        Toast.show('Please enter a valid email')
        return false

    } else if (isEmpty(password)) {
        Toast.show('Please enter your password')
        return false

    } else if (isEmpty(confirmPass)) {
        Toast.show('Please enter your confirm password')
        return false

    } else if (password != confirmPass) {
        Toast.show('Password does not match')
        return false

    }else if (!checked) {
        Toast.show('You need to accept terms & conditions')
        return false

    } else {
        return true
    }
}