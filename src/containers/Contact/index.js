import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import Toast from 'react-native-simple-toast'
import { PrimaryBtn } from '../../components/UI/Button'
import { SingleCheckbox } from '../../components/UI/Checkbox'
import { InputWithLabel } from '../../components/UI/TextInput'
import Block from '../../components/UI/Block'
import Text from '../../components/UI/Text'
import Navbar from '../../components/Layout/Navbar'
import common from '../../styles/common'
import auth from '../../utilities/auth'
import { contactFormService } from '../../api/contact'
import { validateContact } from './Validate'
import { Actions } from 'react-native-router-flux'

export default () => {
  const [checked, setChecked] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    if (userDetails) {
      setFirstName(userDetails.first_name || '')
      setLastName(userDetails.last_name || '')
      setEmail(userDetails.email || '')
      setMobile(userDetails.mobile || '')
    }
  }


  const onPressSubmit = () => {

    if (validateContact(email, message)) {
      setIsLoading(true)
      contactFormService(5, message, (res, err) => {
        setIsLoading(false)
        if (err) {
          return Toast.show('Something went wrong!')
        }

        Toast.show(res.data.data)
        Actions.home()
      })
    }
  }

  return (
    <Block block bgGray>
      <Navbar title='Contact Us' />

      <ScrollView style={common.mainContainer}>
        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter your first name"
            label="First name"
            value={firstName}
            onChangeText={value => setFirstName(value)}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter your surname"
            label="Surname"
            value={lastName}
            onChangeText={value => setLastName(value)}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter your email"
            label="Email address"
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter your contact number"
            label="Contact Number"
            value={mobile}
            onChangeText={value => setMobile(value)}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <Block margin={[0, 0, 5]}>
            <Text header>Services:</Text>
          </Block>

          <SingleCheckbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              console.log('Clicked');
              setChecked(!checked)
            }}
            level="Online Will Writing"
          />

          <SingleCheckbox
            level="Telephone Based Wills"
          />

          <SingleCheckbox
            level="Shariah Law Wills"
          />

          <SingleCheckbox
            level="Probate"
          />

          <SingleCheckbox
            level="Cremation"
          />

          <SingleCheckbox
            level="Funeral Plans"
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            multiline
            placeholder="Enter your message"
            label="Message"
            value={message}
            onChangeText={value => setMessage(value)}
          />
        </Block>

        <Block padding={[10, 0, 50]}>
          <PrimaryBtn loading={isLoading} icon="check-bold" btnText="Submit" onPress={onPressSubmit} />
        </Block>
      </ScrollView>
    </Block>
  )
}