import React from 'react'
import { Text as Typography, StyleSheet } from 'react-native'

import { colors, sizes } from '../../../styles/theme'

export default ({
    h1,
    h2,
    h3,
    title,
    body,
    caption,
    header,
    small,
    size,
    transform,
    align,
    // styling
    regular,
    bold,
    poppinsRegular,
    poppinsMedium,
    poppinsBold,
    medium,
    weight,
    light,
    upperCase,
    center,
    right,
    spacing,
    height, // line-height
    // colors
    color,
    red,
    primary,
    secondary,

    lime,
    black,
    white,
    gray,
    lightGrey,
    textColorDark,
    textColorBlue,
    textColorPink,
    textColor,
    textColor2,
    textColor3,
    dodgerBlue,
    tacha,
    style,
    children,
    ...props
  }) => {
      

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      header && styles.header,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      poppinsRegular && styles.poppinsRegular,
      poppinsMedium && styles.poppinsMedium,
      poppinsBold && styles.poppinsBold,
      medium && styles.medium,
      light && styles.light,
      upperCase && styles.upperCase,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      primary && styles.primary,
      secondary && styles.secondary,
      red && styles.red,
      lime && styles.lime,
      black && styles.black,
      white && styles.white,
      tacha && styles.tacha,
      gray && styles.gray,
      lightGrey && styles.lightGrey,
      textColorDark && styles.textColorDark,
      textColor && styles.textColor,
      textColor2 && styles.textColor2,
      textColor3 && styles.textColor3,
      textColorBlue && styles.textColorBlue,
      textColorPink && styles.textColorPink,
      dodgerBlue && styles.dodgerBlue,
      style
    ]

    return (
      <Typography style={textStyles} {...props}>
        {children}
      </Typography>
    )
  }

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: sizes.font,
    color: colors.textColorLight,
  },
  // Font Weight
  regular: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
  poppinsRegular: {
    fontFamily: "Poppins-Regular"
  },
  poppinsMedium: {
    fontFamily: "Poppins-Medium"
  },
  poppinsBold: {
    fontFamily: "Poppins-Bold"
  },
  medium: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "200",
  },
  upperCase: {
    textTransform: "uppercase",
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  red: { color: colors.RED },
  primary: { color: colors.PRIMARY },
  secondary: { color: colors.SECONDARY },
  lime: { color: colors.lime },
  black: { color: colors.BLACK },
  white: { color: colors.WHITE },
  tacha: { color: colors.tacha },
  gray: { color: colors.GRAY },
  lightGrey: { color: colors.lightGrey },
  textColorDark: { color: colors.textColorDark },
  textColor: { color: colors.textColor },
  textColor2: { color: colors.textColor2 },
  textColor3: { color: colors.textColor3 },
  textColorBlue: { color: colors.textColorBlue },
  textColorPink: { color: colors.textColorPink },
  dodgerBlue: { color: colors.dodgerBlue },
  // fonts
  h1: { fontSize: sizes.h1 },
  h2: { fontSize: sizes.h2 },
  h3: { fontSize: sizes.h3 },
  title: { fontSize: sizes.title },
  body: { fontSize: sizes.body },
  caption: { fontSize: sizes.caption },
  header: { fontSize: sizes.header },
  small: { fontSize: sizes.small }
})