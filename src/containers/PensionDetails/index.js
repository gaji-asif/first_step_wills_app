import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import Toast from 'react-native-simple-toast'
import { PrimaryBtn } from '../../components/UI/Button'
import { InputWithLabel } from '../../components/UI/TextInput'
import Block from '../../components/UI/Block'
import Navbar from '../../components/Layout/Navbar'
import common from '../../styles/common'
import { SinglePicker } from '../../components/UI/Picker'
import { colors } from '../../styles/theme'
import { IconButton } from 'react-native-paper'
import styles from './styles'
import { pensionService } from '../../api/pension'
import { Actions } from 'react-native-router-flux'
import auth from '../../utilities/auth'



export default () => {
  const [personalInputs, setPersonalInputs] = useState([{ user_id: '', provider_scd: '', type: '', policy_no: '', current_fund_value: '' }])
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    setPersonalInputs([{ user_id: userDetails.id, provider_scd: '', type: '', policy_no: '', current_fund_value: '' }])
  }



  console.log('personalInputs', personalInputs);

  const addInputs = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    setPersonalInputs([
      ...personalInputs,
      { user_id: userDetails.id, provider_scd: '', type: '', policy_no: '', current_fund_value: '' }
    ])
  }


  const removeInput = index => {
    const newInputs = personalInputs.filter((item, i) => index != i)
    setPersonalInputs(newInputs)
  }


  const renderInputs = (singleInputValue, index) => {
    return (
      <Block
        padding={[10, 10, 0]}
        style={[styles.inputContainer, { width: personalInputs.length == 1 ? '90%' : '80%' }]}
        margin={[0, 0, 15]}>
        {/* <Block margin={[0, 0, 10]}>
          <SinglePicker
            selectedValue={singleInputValue.provider_scd}
            onValueChange={value => {
              const newInputs = [...personalInputs]
              newInputs[index].provider_scd = value
              setPersonalInputs(newInputs)
            }}
            label="Provider/Company Scheme"
            list={[
              { name: 'Test 1', value: 'test' },
              { name: 'Test 2', value: 'test2' },
            ]} />
        </Block> */}

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter provider"
            label="Provider"
            value={singleInputValue.provider_scd}
            onChangeText={value => {
              const newInputs = [...personalInputs]
              newInputs[index].provider_scd = value
              setPersonalInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter type"
            label="Type"
            value={singleInputValue.type}
            onChangeText={value => {
              const newInputs = [...personalInputs]
              newInputs[index].type = value
              setPersonalInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter policy number"
            label="Policy Number"
            value={singleInputValue.policy_no}
            onChangeText={value => {
              const newInputs = [...personalInputs]
              newInputs[index].policy_no = value
              setPersonalInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter current fund value"
            label="Current Fund Value"
            value={singleInputValue.current_fund_value}
            onChangeText={value => {
              const newInputs = [...personalInputs]
              newInputs[index].current_fund_value = value
              setPersonalInputs(newInputs)
            }}
          />
        </Block>
      </Block>
    )
  }



  const renderIcons = index => {
    return (
      <Block row style={styles.iconContainer}>
        <IconButton
          style={styles.addIcon}
          icon="plus"
          color={colors.SECONDARY}
          size={16}
          onPress={addInputs} />

        {
          personalInputs.length > 1 &&
          <IconButton
            style={styles.removeIcon}
            icon="close"
            color={colors.RED}
            size={16}
            onPress={() => removeInput(index)} />
        }
      </Block>
    )
  }



  const submitForm = () => {
    setLoader(true)
    pensionService(personalInputs, (res, err) => {
      setLoader(false)
      if (err) {
        return Toast.show('Something went wrong!')
      }

      Toast.show(res.data.data)
      Actions.home()
    })
  }


  return (
    <Block block bgGray>
      <Navbar title='Pension Details' />

      <ScrollView style={common.mainContainer}>

        {
          personalInputs.map((singleInputValue, index) => (
            <Block key={index} row>
              {renderInputs(singleInputValue, index)}
              {renderIcons(index)}
            </Block>
          ))
        }

        <Block padding={[10, 0, 50]}>
          <PrimaryBtn loading={loader ? true : false} icon="check-bold" btnText="I would like an independent review" onPress={submitForm} />
        </Block>
      </ScrollView>
    </Block>
  )
}