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
import { lifePolicyService } from '../../api/lifePolicy'
import { SinglePicker } from '../../components/UI/Picker'



const LifePolicyDetails = () => {
  const [lifePolicyInputs, setLifePolicyInputs] = useState([{ user_id: '', provider_scd: '', sum_assured: '', term: '', premium: '', in_trust: '' }])
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    setLifePolicyInputs([{ user_id: userDetails.id, provider_scd: '', sum_assured: '', term: '', premium: '', in_trust: '' }])

  }

  console.log('lifePolicyInputs', lifePolicyInputs);

  const addInputs = async () => {
    const userDetails = await auth.getUserDetails('userDetails')
    setLifePolicyInputs([
      ...lifePolicyInputs,
      { user_id: userDetails.id, provider_scd: '', sum_assured: '', term: '', premium: '', in_trust: '' }
    ])
  }


  const removeInput = index => {
    const newInputs = lifePolicyInputs.filter((item, i) => index != i)
    setLifePolicyInputs(newInputs)
  }


  const renderInputs = (singleInputValue, index) => {
    return (
      <Block
        padding={[10, 10, 0]}
        style={[styles.inputContainer, { width: lifePolicyInputs.length == 1 ? '90%' : '80%' }]}
        margin={[0, 0, 15]}>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter provider"
            label="Provider"
            value={singleInputValue.provider_scd}
            onChangeText={value => {
              const newInputs = [...lifePolicyInputs]
              newInputs[index].provider_scd = value
              setLifePolicyInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter sum assured"
            label="Sum assured"
            value={singleInputValue.sum_assured}
            onChangeText={value => {
              const newInputs = [...lifePolicyInputs]
              newInputs[index].sum_assured = value
              setLifePolicyInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter term"
            label="Term"
            value={singleInputValue.term}
            onChangeText={value => {
              const newInputs = [...lifePolicyInputs]
              newInputs[index].term = value
              setLifePolicyInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter premium"
            label="Premium"
            value={singleInputValue.premium}
            onChangeText={value => {
              const newInputs = [...lifePolicyInputs]
              newInputs[index].premium = value
              setLifePolicyInputs(newInputs)
            }}
          />
        </Block>

        <Block margin={[0, 0, 10]}>
          <SinglePicker
            selectedValue={singleInputValue.in_trust}
            onValueChange={value => {
              const newInputs = [...lifePolicyInputs]
              newInputs[index].in_trust = value
              setLifePolicyInputs(newInputs)
            }}
            label="In trust"
            list={[
              { name: 'Yes', value: 'Yes' },
              { name: 'No', value: 'No' },
              { name: 'Don’t know', value: 'Don’t know' },
            ]} />
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
          lifePolicyInputs.length > 1 &&
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
    lifePolicyService(lifePolicyInputs, (res, err) => {
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
      <Navbar title='Life Policy Details' />

      <ScrollView style={common.mainContainer}>

        {
          lifePolicyInputs.map((singleInputValue, index) => (
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

export default LifePolicyDetails