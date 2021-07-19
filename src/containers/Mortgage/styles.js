import { StyleSheet } from 'react-native'
import { colors } from '../../styles/theme'


export default styles = StyleSheet.create({

    inputContainer: {
        borderWidth: 1,
        borderColor: colors.SECONDARY,
        borderRadius: 10,
    },
    iconContainer: {
        width: '20%'
    },
    addIcon: {
        borderWidth: 1,
        borderColor: colors.SECONDARY
    },
    removeIcon: {
        borderWidth: 1,
        borderColor: colors.RED
    },
})