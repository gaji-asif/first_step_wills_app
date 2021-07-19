import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { colors } from '../../../styles/theme'

export const InputWithLabel = ({ multiline, ...rest }) => {

  return (
    <TextInput
      multiline={multiline}
      style={[styles.inputStyle, { height: multiline ? 120 : 60 }]}
      underlineColor={colors.PRIMARY}
      selectionColor={colors.PRIMARY}
      theme={{colors: {primary: colors.SECONDARY}}}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({

  inputStyle: {
    backgroundColor: colors.WHITE,
  },

})