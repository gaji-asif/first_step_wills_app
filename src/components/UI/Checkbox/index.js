import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { colors } from '../../../styles/theme'
import Block from '../../UI/Block'
import Text from '../../UI/Text'

export const SingleCheckbox = ({ onPress, level, ...rest }) => {

  return (
    <Block row center>
      <Checkbox {...rest} color={colors.SECONDARY} onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text poppinsMedium>{level}</Text>
      </TouchableOpacity>
    </Block>
  )
}

const styles = StyleSheet.create({

  inputStyle: {
    backgroundColor: colors.WHITE,
  },

})