import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-paper'
import { colors } from '../../../styles/theme'
import Block from '../Block'

export const FullPageLoader = () =>

  <Block block center middle style={styles.container}>
    <ActivityIndicator color={colors.PRIMARY} size="large" />
  </Block>

const styles = StyleSheet.create({

  container: {
    height: '100%'
  },

})