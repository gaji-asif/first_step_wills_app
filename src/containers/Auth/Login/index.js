import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import Toast from 'react-native-simple-toast'
import Block from '../../../components/UI/Block'
import Text from '../../../components/UI/Text'
import { InputWithLabel } from '../../../components/UI/TextInput'
import LinearGradient from 'react-native-linear-gradient'
import { PrimaryBtn } from '../../../components/UI/Button'
import styles from './styles'
import { colors } from '../../../styles/theme'
import { Actions } from 'react-native-router-flux'
import { validateLogin } from './Validate'
import common from '../../../styles/common'
import { loginService } from '../../../api/authentication'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const onPressLogin = () => {
    if (validateLogin(email, password)) {
      setIsLoading(true)
      loginService(email, password, (res, err) => {
        setIsLoading(false)
        if (err) {
          return Toast.show('Please enter correct credential')
        }

        Actions.home()

      })
    }
  }



  return (

    <Block block>
      <LinearGradient style={common.authFormContainer} colors={[colors.PRIMARY, colors.SECONDARY]}>
        <Image style={common.authFormLogo} source={require('../../../assets/images/logo.png')} />
      </LinearGradient>

      <Block flex={0.4}>
        <Block style={styles.formWrapper}>
          <Text center h3 style={common.authTitleInfo}>Login</Text>
          <Block style={common.authFormInput} margin={[20, 0, 0]}>

            <InputWithLabel
              label="Email"
              placeholder="Enter your email"
              autoCapitalize="none"
              value={email}
              onChangeText={value => setEmail(value)}
            />

            <InputWithLabel
              label="Password"
              placeholder="Enter your Password"
              secureTextEntry={true}
              value={password}
              onChangeText={value => setPassword(value)}
            />

            {/* <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text right size={14} style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity> */}

            <Block margin={[20, 0]} style={common.authBtn}>
              <PrimaryBtn loading={isLoading} btnText="Login" onPress={onPressLogin} />
            </Block>
          </Block>
        </Block>

        <Block margin={[30, 15, 20]}>
          <Text center size={14}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => Actions.register()}>
            <Text center size={16} style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  )
}