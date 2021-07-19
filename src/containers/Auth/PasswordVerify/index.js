import React, { useState } from 'react'
import { Image } from 'react-native'
import Block from '../../../components/UI/Block'
import Text from '../../../components/UI/Text'
import { InputWithLabel } from '../../../components/UI/TextInput'
import LinearGradient from 'react-native-linear-gradient'
import { PrimaryBtn } from '../../../components/UI/Button'
import styles from './styles'
import { colors } from '../../../styles/theme'
import { Actions } from 'react-native-router-flux'
import { validateCode } from './Validate'
import common from '../../../styles/common'

export default () => {

  const [code, setCode] = useState('')


  const onPressSubmit = () => {
    if(validateCode(code)) {
      Actions.resetPassword()
    }
  }


  return (

    <Block block>
      <LinearGradient style={common.authFormContainer} colors={[colors.PRIMARY, colors.SECONDARY]}>
        <Image style={common.authFormLogo} source={require('../../../assets/images/logo.png')} />
      </LinearGradient>

      <Block flex={0.4}>
        <Block style={styles.formWrapper}>
          <Text center h3 style={common.authTitleInfo}>Fill below information</Text>
          <Block style={common.authFormInput} margin={[20, 0, 0]}>

            <InputWithLabel
              placeholder="Enter code"
              label="Code"
              value={code}
              onChangeText={value => setCode(value)}
            />

            <Block margin={[20, 0]} style={common.authBtn}>
              <PrimaryBtn btnText="Submit" onPress={onPressSubmit} />
            </Block>
          </Block>
        </Block>

      </Block>
    </Block>
  )
}