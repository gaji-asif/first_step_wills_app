import Toast from 'react-native-simple-toast'
import { isEmpty } from '../../../utilities/ui'

export const validateReset = (password, confirmPass) => {
     if (isEmpty(password)) {
        Toast.show('Please enter your password')
        return false

    } else if (isEmpty(confirmPass)) {
        Toast.show('Please enter your confirm password')
        return false

    } else if (password != confirmPass) {
        Toast.show('Password does not match')
        return false

    } else {
        return true
    }
}