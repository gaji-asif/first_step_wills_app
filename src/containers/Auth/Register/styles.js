import { StyleSheet } from 'react-native'
import { colors } from '../../../styles/theme'



export default styles = StyleSheet.create({

    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    },
    formWrapper: {
        marginTop: '-7%',
        position: 'relative',
        zIndex: 1
    },
    forgotText: {
        padding: 10,
        color: colors.SECONDARY
    },
    registerText:{
        color:colors.SECONDARY,
        paddingVertical:3
    },

})