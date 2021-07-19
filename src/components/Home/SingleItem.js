import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Block from '../UI/Block'
import Text from '../UI/Text'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../styles/theme'


export default ({ onPress, text, iconName }) => {
  return (
    <Block style={styles.mainContainer}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <FontAwesome name={iconName} color={colors.SECONDARY} size={35} />
        <Text poppinsMedium center style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Block>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    width: '50%',
  },
  container: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 6,
  },
  text: {
    marginTop: 10
  }
})