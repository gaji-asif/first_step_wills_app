import Toast from 'react-native-simple-toast'
import { isEmpty } from '../../utilities/ui'

export const validateDeal = ( dealNo) => {
    if (isEmpty(dealNo)) {
        Toast.show('Please enter your deal ID')
        return false

    } else {
        return true
    }
}