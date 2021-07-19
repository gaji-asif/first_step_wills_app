import React, { useState } from 'react'
import { ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import Toast from 'react-native-simple-toast'
import Block from '../../../components/UI/Block'
import Text from '../../../components/UI/Text'
import { InputWithLabel } from '../../../components/UI/TextInput'
import LinearGradient from 'react-native-linear-gradient'
import { PrimaryBtn } from '../../../components/UI/Button'
import styles from './styles'
import { colors } from '../../../styles/theme'
import { validateRegister } from './Validate'
import { Actions } from 'react-native-router-flux'
import { registerService } from '../../../api/authentication'
import common from '../../../styles/common'
import { SingleCheckbox } from '../../../components/UI/Checkbox'

export default () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(false)


  const onPressRegister = () => {
    const regObj = {
      firstName,
      lastName,
      email,
      mobile,
      password,
    }
    if (validateRegister(firstName, lastName, email, password, confirmPass, checked)) {

      setIsLoading(true)
      registerService(regObj, (res, err) => {
        setIsLoading(false)
        if (err) {
          if (err.data.contents && err.data.contents.password) {
            return Toast.show(err.data.contents.password[0])

          }
          return Toast.show('Please check the fields again')
        }

        Actions.login()

      })
    }
  }


  return (

    <Block block>
      <ScrollView>
        <LinearGradient
          style={[common.authFormContainer, {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }]}
          colors={[colors.PRIMARY, colors.SECONDARY]}>
          <Block margin={[0, 0, 50]}>
            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
          </Block>
        </LinearGradient>

        <Block flex={0.4}>
          <Block style={styles.formWrapper} margin={[0, 0, 0]}>
            <Block style={common.authFormInput} margin={[10, 0, 0]}>
              <InputWithLabel
                placeholder="Enter your first name"
                label="First name"
                value={firstName}
                onChangeText={value => setFirstName(value)}
              />
              <InputWithLabel
                placeholder="Enter your last name"
                label="Lastname"
                value={lastName}
                onChangeText={value => setLastName(value)}
              />
              <InputWithLabel
                placeholder="Enter your email"
                autoCapitalize="none"
                label="Email"
                value={email}
                onChangeText={value => setEmail(value)}
              />
              <InputWithLabel
                placeholder="Enter your mobile number"
                autoCapitalize="none"
                label="Mobile"
                keyboardType='numeric'
                value={mobile}
                onChangeText={value => setMobile(value)}
              />

              <InputWithLabel
                placeholder="Enter your password"
                label="New Password"
                value={password}
                secureTextEntry={true}
                onChangeText={value => setPassword(value)}
              />

              <InputWithLabel
                placeholder="Confirm your password"
                label="Confirm Password"
                value={confirmPass}
                secureTextEntry={true}
                onChangeText={value => setConfirmPass(value)}
              />

              <Block row margin={[10, 0, 0]}>
                <SingleCheckbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(!checked)}
                />
                <Text poppinsMedium style={common.textShrink}>
                  I confirm that I have understood and accepted the
                <Text onPress={() => Linking.openURL('https://1ststepwills.co.uk/terms-and-conditions')} secondary poppinsMedium>
                    Terms and Conditions
                </Text>
                </Text>
              </Block>

              <Block margin={[20, 0, 0]} style={common.authBtn}>
                <PrimaryBtn loading={isLoading} btnText="Register" onPress={onPressRegister} />
              </Block>
            </Block>
          </Block>


          <Block margin={[20, 15]}>
            <Text center size={14} style={styles.accountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => Actions.login()}>
              <Text center size={16} style={styles.registerText}>Login</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}