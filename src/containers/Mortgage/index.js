import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import Toast from 'react-native-simple-toast'
import { PrimaryBtn } from '../../components/UI/Button'
import { InputWithLabel } from '../../components/UI/TextInput'
import Block from '../../components/UI/Block'
import Navbar from '../../components/Layout/Navbar'
import common from '../../styles/common'
import { colors } from '../../styles/theme'
import { IconButton } from 'react-native-paper'
import styles from './styles'
import { Actions } from 'react-native-router-flux'
import auth from '../../utilities/auth'
import { morgageService } from '../../api/morgage'
import { SinglePicker } from '../../components/UI/Picker'



export default () => {
  const [morgageInputs, setMorgageInputs] = useState([{ user_id: '', provider_scd: '', type: '', loan_amount: '', rate: '', end_date_of_rate: '', term: '' }])
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    setMorgageInputs([{ user_id: userDetails.id, provider_scd: '', type: '', loan_amount: '', rate: '', end_date_of_rate: '', term: '' }])
  }


  const addInputs = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    setMorgageInputs([
      ...morgageInputs,
      { user_id: userDetails.id, provider_scd: '', type: '', loan_amount: '', rate: '', end_date_of_rate: '', term: '' }
    ])
  }


  const removeInput = index => {
    const newInputs = morgageInputs.filter((item, i) => index != i)
    setMorgageInputs(newInputs)
  }


  const renderInputs = (singleInputValue, index) => {
    return (
      <Block
        padding={[10, 10, 0]}
        style={[styles.inputContainer, { width: morgageInputs.length == 1 ? '90%' : '80%' }]}
        margin={[0, 0, 15]}>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter provider"
            label="Provider"
            value={singleInputValue.provider_scd}
            onChangeText={value => {
              const newInputs = [...morgageInputs]
              newInputs[index].provider_scd = value
              setMorgageInputs(newInputs)
            }}
          />
        </Block>
        
        <Block margin={[0, 0, 10]}>
          <SinglePicker
            selectedValue={singleInputValue.type}
            onValueChange={value => {
              const newInputs = [...morgageInputs]
              newInputs[index].type = value
              setMorgageInputs(newInputs)
            }}
            label="Type"
            list={[
              { name: 'Interest only', value: 'Interest only' },
              { name: 'Repayment', value: 'Repayment' },
            ]} />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter loan amount"
            label="Loan Amount"
            value={singleInputValue.loan_amount}
            onChangeText={value => {
              const newInputs = [...morgageInputs]
              newInputs[index].loan_amount = value
              setMorgageInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter rate"
            label="Rate"
            value={singleInputValue.rate}
            onChangeText={value => {
              const newInputs = [...morgageInputs]
              newInputs[index].rate = value
              setMorgageInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter date"
            label="End date of rate"
            value={singleInputValue.end_date_of_rate}
            onChangeText={value => {
              const newInputs = [...morgageInputs]
              newInputs[index].end_date_of_rate = value
              setMorgageInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter term"
            label="Term"
            value={singleInputValue.term}
            onChangeText={value => {
              const newInputs = [...morgageInputs]
              newInputs[index].term = value
              setMorgageInputs(newInputs)
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
          morgageInputs.length > 1 &&
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
    morgageService(morgageInputs, (res, err) => {
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
      <Navbar title='Mortgage' />

      <ScrollView style={common.mainContainer}>

        {
          morgageInputs.map((singleInputValue, index) => (
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