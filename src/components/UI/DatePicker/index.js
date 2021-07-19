import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { colors } from '../../../styles/theme'
import Text from '../Text'

export default ({ onPress, value, ...rest }) => {

  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.text}>
        <Text header color="#666">{value}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        mode="date"
        {...rest}
      />
    </>
  )
}

const styles = StyleSheet.create({

  text: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.PRIMARY,
  },

})