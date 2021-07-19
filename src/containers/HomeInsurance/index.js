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
import { insuranceService } from '../../api/insurance'
import { SinglePicker } from '../../components/UI/Picker'



export default () => {
  const [insuranceInputs, setInsuranceInputs] = useState([{ user_id: '', provider_scd: '', type: '', premium: '', rate: '', renium_date: '', term: '' }])
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    setInsuranceInputs([{ user_id: userDetails.id, provider_scd: '', type: '', premium: '', rate: '', renium_date: '', term: '' }])
  }


  const addInputs = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    setInsuranceInputs([
      ...insuranceInputs,
      { user_id: userDetails.id, provider_scd: '', type: '', premium: '', rate: '', renium_date: '', term: '' }
    ])
  }


  const removeInput = index => {
    const newInputs = insuranceInputs.filter((item, i) => index != i)
    setInsuranceInputs(newInputs)
  }


  const renderInputs = (singleInputValue, index) => {
    return (
      <Block
        padding={[10, 10, 0]}
        style={[styles.inputContainer, { width: insuranceInputs.length == 1 ? '90%' : '80%' }]}
        margin={[0, 0, 15]}>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter provider"
            label="Provider"
            value={singleInputValue.provider_scd}
            onChangeText={value => {
              const newInputs = [...insuranceInputs]
              newInputs[index].provider_scd = value
              setInsuranceInputs(newInputs)
            }}
          />
        </Block>
        
        <Block margin={[0, 0, 10]}>
          <SinglePicker
            selectedValue={singleInputValue.type}
            onValueChange={value => {
              const newInputs = [...insuranceInputs]
              newInputs[index].type = value
              setInsuranceInputs(newInputs)
            }}
            label="Type"
            list={[
              { name: 'Buildings & Contents', value: 'Buildings & Contents' },
              { name: 'Contents', value: 'Contents' },
            ]} />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter premium"
            label="Premium"
            value={singleInputValue.premium}
            onChangeText={value => {
              const newInputs = [...insuranceInputs]
              newInputs[index].premium = value
              setInsuranceInputs(newInputs)
            }}
          />
        </Block>


        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter renewal date"
            label="Renewal date"
            value={singleInputValue.renium_date}
            onChangeText={value => {
              const newInputs = [...insuranceInputs]
              newInputs[index].renium_date = value
              setInsuranceInputs(newInputs)
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
          insuranceInputs.length > 1 &&
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
    insuranceService(insuranceInputs, (res, err) => {
      setLoader(false)
      if (err) {
        return Toast.show(err.data.message || 'Something went wrong!')
      }

      Toast.show(res.data.data)
      Actions.home()
    })
  }


  return (
    <Block block bgGray>
      <Navbar title='Home Insuarance' />

      <ScrollView style={common.mainContainer}>

        {
          insuranceInputs.map((singleInputValue, index) => (
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