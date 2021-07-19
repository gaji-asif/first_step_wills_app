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
import { validateReset } from './Validate'
import common from '../../../styles/common'

export default () => {

  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')


  const onPressReset = () => {
    if (validateReset(password, confirmPass)) {
      Actions.login()
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
              placeholder="Enter password"
              label="New Password"
              value={password}
              onChangeText={value => setPassword(value)}
            />

            <InputWithLabel
              placeholder="Enter confirm password"
              label="Confirm Password"
              value={confirmPass}
              onChangeText={value => setConfirmPass(value)}
            />

            <Block margin={[20, 0]} style={common.authBtn}>
              <PrimaryBtn btnText="Reset" onPress={onPressReset} />
            </Block>
          </Block>
        </Block>

      </Block>
    </Block>
  )
}