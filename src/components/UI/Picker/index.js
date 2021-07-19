import React from 'react'
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { colors } from '../../../styles/theme'
import Block from '../Block'

export const SinglePicker = ({ selectedValue, onValueChange, label, list }) => {

  return (
    <Block style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        <Picker.Item color="#666" label={label} value='' />
        {
          list && list.length > 0 && list.map((item, index) =>
            <Picker.Item key={index} color="#666" label={item.name} value={item.value} />
          )
        }
      </Picker>
    </Block>
  )
}

const styles = StyleSheet.create({

  pickerContainer: {
    width: '100%',
    backgroundColor: colors.WHITE,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.PRIMARY,
  },
  picker: {
    height: 50
  }

})