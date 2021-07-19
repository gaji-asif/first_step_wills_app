
import { StyleSheet } from 'react-native'
import { colors } from './theme'

export default common = StyleSheet.create({

    authFormContainer: {
        flex: 0.6,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
    },
    authFormLogo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '15%'
    },
    authTitleInfo: {
        color: colors.WHITE,
        paddingTop: 30,
        fontFamily: 'Poppins-Medium'
    },
    authFormInput: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        marginHorizontal: 15,
        backgroundColor: colors.WHITE,
        elevation: 3,
        borderRadius: 20,
    },
    authBtn:{
        width:'80%',
        alignSelf: 'center',
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    container: {
        borderRadius: 8
    },
    textShrink: {
        flexShrink: 1
    },

})