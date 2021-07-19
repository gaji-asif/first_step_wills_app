import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { colors } from '../../../styles/theme'

export const PrimaryBtn = ({ onPressBtn, btnStyles, btnText, ...rest }) =>

  <Button
    mode="contained"
    color={colors.SECONDARY}
    style={styles.border}
    contentStyle={[styles.primaryBtnStyle, btnStyles]}
    {...rest}>
    {btnText}
  </Button>

const styles = StyleSheet.create({

  primaryBtnStyle: {
    paddingVertical: 5,
    width: '100%',
    justifyContent: 'center'
  },
  border: {
    borderRadius: 30,
  },
  btnText: {
    color: colors.WHITE,
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },

})