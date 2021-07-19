import { Dimensions, StyleSheet } from 'react-native'


export default styles = StyleSheet.create({

    imgBg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    },
    mainWrapper: {
        ...StyleSheet.absoluteFillObject,
        top: 90,
        backgroundColor: 'rgba(0,46,79,0.7)'
    },

})