import Toast from 'react-native-simple-toast'
import { isEmpty } from '../../../utilities/ui'

export const validateCode = code => {
    if (isEmpty(code)) {
        Toast.show('Please enter code')
        return false

    } else {
        return true
    }
}