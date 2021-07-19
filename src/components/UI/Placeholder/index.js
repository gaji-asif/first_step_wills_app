import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Block from '../Block'
import Text from '../Text'

export default ({ text }) =>

  <Block block center middle style={styles.containder}>
    <Text h3 poppinsMedium>{text}</Text>
  </Block>

const styles = StyleSheet.create({
  containder: {
    height: Dimensions.get('window').height - 90
  },

})