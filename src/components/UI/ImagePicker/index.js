import React from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import Text from '../Text'
import { colors } from '../../../styles/theme'

export const SingleImagePicker = ({ onPress, imagePath, text }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <Text header color="#666">{text}</Text>
      <Image
        style={styles.image}
        source={imagePath ? { uri: imagePath } : require('../../../assets/images/gallery.png')}
        resizeMode={imagePath ? 'cover' : 'contain'}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  text: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.PRIMARY,
  },

  image: {
    marginTop: 15,
    height: 100,
    width: '100%'
  },

})